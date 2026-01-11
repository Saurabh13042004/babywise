from sqlalchemy import Column, Integer, Numeric, Text, Boolean, DateTime, Enum, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import uuid
from app.database import Base
from app.utils.enums import CategoryAssignment

class UserRecommendation(Base):
    __tablename__ = "user_recommendations"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    product_id = Column(UUID(as_uuid=True), ForeignKey("products.id"), nullable=False)
    category_assignment = Column(Enum(CategoryAssignment), nullable=False)
    recommendation_score = Column(Numeric, nullable=False)
    personalized_reason = Column(Text, nullable=True)
    conditional_note = Column(Text, nullable=True)
    display_order = Column(Integer, nullable=False)
    is_saved = Column(Boolean, default=False)
    is_purchased = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    user = relationship("User", back_populates="recommendations")
    product = relationship("Product", back_populates="recommendations")
