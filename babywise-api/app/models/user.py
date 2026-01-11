from sqlalchemy import Column, String, Boolean, DateTime, Enum
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import uuid
from app.database import Base
from app.utils.enums import AuthProvider

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=True)
    auth_provider = Column(Enum(AuthProvider), default=AuthProvider.EMAIL)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    last_login = Column(DateTime(timezone=True), nullable=True)
    profile_completed = Column(Boolean, default=False)

    profile = relationship("UserProfile", back_populates="user", uselist=False)
    budget_plan = relationship("BudgetPlan", back_populates="user", uselist=False)
    recommendations = relationship("UserRecommendation", back_populates="user")
    shopping_timeline = relationship("ShoppingTimeline", back_populates="user", uselist=False)
