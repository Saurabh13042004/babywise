from sqlalchemy import Column, Integer, Text, DateTime, Enum, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import uuid
from app.database import Base
from app.utils.enums import PurchaseTimeframe, UrgencyLevel

class ShoppingTimeline(Base):
    __tablename__ = "shopping_timelines"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), unique=True, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    user = relationship("User", back_populates="shopping_timeline")
    items = relationship("TimelineItem", back_populates="timeline")

class TimelineItem(Base):
    __tablename__ = "timeline_items"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    timeline_id = Column(UUID(as_uuid=True), ForeignKey("shopping_timelines.id"), nullable=False)
    product_id = Column(UUID(as_uuid=True), ForeignKey("products.id"), nullable=False)
    recommended_purchase_timeframe = Column(Enum(PurchaseTimeframe), nullable=False)
    urgency_level = Column(Enum(UrgencyLevel), nullable=False)
    reason_for_timing = Column(Text, nullable=True)
    weeks_before_due = Column(Integer, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    timeline = relationship("ShoppingTimeline", back_populates="items")
    product = relationship("Product", back_populates="timeline_items")
