from sqlalchemy import Column, String, Text, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import uuid
from app.database import Base

class ProductDetail(Base):
    __tablename__ = "product_details"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    product_id = Column(UUID(as_uuid=True), ForeignKey("products.id"), unique=True, nullable=False)
    why_recommended = Column(Text, nullable=True)
    why_skip = Column(Text, nullable=True)
    situational_use = Column(Text, nullable=True)
    common_complaints = Column(Text, nullable=True)
    common_praise = Column(Text, nullable=True)
    expert_tip = Column(Text, nullable=True)
    budget_alternative = Column(String, nullable=True)
    splurge_alternative = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    product = relationship("Product", back_populates="details")
