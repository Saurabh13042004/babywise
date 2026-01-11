from sqlalchemy import Column, String, Integer, Numeric, Text, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import uuid
from app.database import Base

class OverhypedProduct(Base):
    __tablename__ = "overhyped_products"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    product_id = Column(UUID(as_uuid=True), ForeignKey("products.id"), unique=True, nullable=False)
    overhype_score = Column(Numeric, nullable=False)
    reality_rating = Column(Numeric, nullable=False)
    percentage_who_regret = Column(Integer, nullable=False)
    hype_reason = Column(Text, nullable=True)
    reality_check = Column(Text, nullable=True)
    exceptions = Column(Text, nullable=True)
    better_alternative = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    product = relationship("Product", back_populates="overhyped_info")
