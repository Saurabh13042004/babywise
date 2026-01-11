from sqlalchemy import Column, String, Boolean, Integer, Numeric, Text, DateTime, Enum, ARRAY
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import uuid
from app.database import Base
from app.utils.enums import PriceTier, SpaceRequired, Urgency

class Product(Base):
    __tablename__ = "products"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    category = Column(String, nullable=False)
    subcategory = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    price_tier = Column(Enum(PriceTier), nullable=False)
    average_price = Column(Numeric, nullable=False)
    price_range_min = Column(Numeric, nullable=False)
    price_range_max = Column(Numeric, nullable=False)
    space_required = Column(Enum(SpaceRequired), nullable=False)
    urgency = Column(Enum(Urgency), nullable=False)
    is_overhyped = Column(Boolean, default=False)
    safety_rating = Column(Numeric, nullable=True)
    parent_consensus_score = Column(Numeric, nullable=True)
    tags = Column(ARRAY(String), default=[])
    usage_duration_months = Column(Integer, nullable=True)
    alternatives_exist = Column(Boolean, default=False)
    safe_to_buy_used = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    details = relationship("ProductDetail", back_populates="product", uselist=False)
    overhyped_info = relationship("OverhypedProduct", back_populates="product", uselist=False)
    recommendations = relationship("UserRecommendation", back_populates="product")
    budget_items = relationship("BudgetItem", back_populates="product")
    timeline_items = relationship("TimelineItem", back_populates="product")
