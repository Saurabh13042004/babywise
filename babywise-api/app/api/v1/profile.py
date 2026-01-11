from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.profile import ProfileCreate, ProfileUpdate, ProfileResponse
from app.utils.enums import (
    UserType, BudgetTier, SpaceType, SleepLocation, FeedingPlan, 
    SupportLevel, VehicleType, SecondhandComfort
)
from datetime import datetime
import uuid

router = APIRouter()

@router.post("/", response_model=ProfileResponse)
def create_profile(profile: ProfileCreate, db: Session = Depends(get_db)):
    """
    Create user profile.
    """
    return ProfileResponse(
        user_id=uuid.uuid4(),
        completed_at=datetime.now(),
        created_at=datetime.now(),
        updated_at=datetime.now(),
        **profile.model_dump()
    )

@router.get("/{user_id}", response_model=ProfileResponse)
def get_profile(user_id: uuid.UUID, db: Session = Depends(get_db)):
    """
    Get user profile by ID.
    """
    return ProfileResponse(
        user_id=user_id,
        user_type=UserType.FIRST_TIME,
        budget_tier=BudgetTier.MODERATE,
        space_type=SpaceType.APARTMENT,
        sleep_location=SleepLocation.PARENTS_ROOM_TEMPORARY,
        feeding_plan=FeedingPlan.BREASTFEED,
        support_level=SupportLevel.COUPLE,
        vehicle_type=VehicleType.COMPACT,
        secondhand_comfort=SecondhandComfort.MODERATE,
        completed_at=datetime.now(),
        created_at=datetime.now(),
        updated_at=datetime.now()
    )

@router.patch("/{user_id}", response_model=ProfileResponse)
def update_profile(user_id: uuid.UUID, profile: ProfileUpdate, db: Session = Depends(get_db)):
    """
    Update user profile.
    """
    return ProfileResponse(
        user_id=user_id,
        user_type=UserType.FIRST_TIME,
        budget_tier=BudgetTier.MODERATE,
        space_type=SpaceType.APARTMENT,
        sleep_location=SleepLocation.PARENTS_ROOM_TEMPORARY,
        feeding_plan=FeedingPlan.BREASTFEED,
        support_level=SupportLevel.COUPLE,
        vehicle_type=VehicleType.COMPACT,
        secondhand_comfort=SecondhandComfort.MODERATE,
        completed_at=datetime.now(),
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
