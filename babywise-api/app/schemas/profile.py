from pydantic import BaseModel
from typing import List, Optional
from datetime import date, datetime
from uuid import UUID
from app.utils.enums import (
    UserType, BudgetTier, SpaceType, SleepLocation, FeedingPlan, 
    SupportLevel, VehicleType, SecondhandComfort
)

class ProfileBase(BaseModel):
    user_type: UserType
    due_date: Optional[date] = None
    birth_date: Optional[date] = None
    budget_tier: BudgetTier
    space_type: SpaceType
    has_stairs: bool = False
    multiple_floors: bool = False
    sleep_location: SleepLocation
    lifestyle_tags: List[str] = []
    feeding_plan: FeedingPlan
    support_level: SupportLevel
    priorities: List[str] = []
    vehicle_type: VehicleType
    secondhand_comfort: SecondhandComfort

class ProfileCreate(ProfileBase):
    pass

class ProfileUpdate(BaseModel):
    user_type: Optional[UserType] = None
    due_date: Optional[date] = None
    birth_date: Optional[date] = None
    budget_tier: Optional[BudgetTier] = None
    space_type: Optional[SpaceType] = None
    has_stairs: Optional[bool] = None
    multiple_floors: Optional[bool] = None
    sleep_location: Optional[SleepLocation] = None
    lifestyle_tags: Optional[List[str]] = None
    feeding_plan: Optional[FeedingPlan] = None
    support_level: Optional[SupportLevel] = None
    priorities: Optional[List[str]] = None
    vehicle_type: Optional[VehicleType] = None
    secondhand_comfort: Optional[SecondhandComfort] = None

class ProfileResponse(ProfileBase):
    user_id: UUID
    completed_at: datetime
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True
