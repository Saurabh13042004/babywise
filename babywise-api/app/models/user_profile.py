from sqlalchemy import Column, String, Boolean, Date, DateTime, Enum, ForeignKey, ARRAY
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import uuid
from app.database import Base
from app.utils.enums import (
    UserType, BudgetTier, SpaceType, SleepLocation, FeedingPlan, 
    SupportLevel, VehicleType, SecondhandComfort
)

class UserProfile(Base):
    __tablename__ = "user_profiles"

    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), primary_key=True)
    user_type = Column(Enum(UserType), nullable=False)
    due_date = Column(Date, nullable=True)
    birth_date = Column(Date, nullable=True)
    budget_tier = Column(Enum(BudgetTier), nullable=False)
    space_type = Column(Enum(SpaceType), nullable=False)
    has_stairs = Column(Boolean, default=False)
    multiple_floors = Column(Boolean, default=False)
    sleep_location = Column(Enum(SleepLocation), nullable=False)
    lifestyle_tags = Column(ARRAY(String), default=[])
    feeding_plan = Column(Enum(FeedingPlan), nullable=False)
    support_level = Column(Enum(SupportLevel), nullable=False)
    priorities = Column(ARRAY(String), default=[])
    vehicle_type = Column(Enum(VehicleType), nullable=False)
    secondhand_comfort = Column(Enum(SecondhandComfort), nullable=False)
    completed_at = Column(DateTime(timezone=True), server_default=func.now())
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    user = relationship("User", back_populates="profile")
