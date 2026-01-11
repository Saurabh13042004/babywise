from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.recommendation import GenerateRecommendationsResponse, RecommendationResponse
from datetime import datetime
import uuid

router = APIRouter()

@router.post("/generate", response_model=GenerateRecommendationsResponse)
def generate_recommendations(user_id: uuid.UUID, db: Session = Depends(get_db)):
    """
    Generate personalized product recommendations.
    """
    return {
        "user_id": user_id,
        "generated_at": datetime.now(),
        "categories": {
            "must_have_now": [
                {
                    "product_id": "prod-001",
                    "name": "Convertible Crib",
                    "category": "Sleep",
                    "price_range": "$200-$400",
                    "why_recommended": "Based on your moderate budget and standard apartment, this crib offers excellent value and converts to a toddler bed...",
                    "recommendation_score": 45.5,
                    "is_saved": False
                }
            ],
            "get_soon": [],
            "can_wait": [],
            "skip_it": [],
            "consider_if": []
        }
    }

@router.get("/{user_id}", response_model=GenerateRecommendationsResponse)
def get_recommendations(user_id: uuid.UUID, db: Session = Depends(get_db)):
    """
    Get cached recommendations.
    """
    return {
        "user_id": user_id,
        "generated_at": datetime.now(),
        "categories": {
            "must_have_now": [
                {
                    "product_id": "prod-001",
                    "name": "Convertible Crib",
                    "category": "Sleep",
                    "price_range": "$200-$400",
                    "why_recommended": "Based on your moderate budget and standard apartment, this crib offers excellent value and converts to a toddler bed...",
                    "recommendation_score": 45.5,
                    "is_saved": False
                }
            ],
            "get_soon": [],
            "can_wait": [],
            "skip_it": [],
            "consider_if": []
        }
    }

@router.patch("/{recommendation_id}/save")
def save_recommendation(recommendation_id: str, db: Session = Depends(get_db)):
    """
    Save a recommendation.
    """
    return {"status": "success", "message": "Recommendation saved"}

@router.patch("/{recommendation_id}/purchased")
def mark_purchased(recommendation_id: str, db: Session = Depends(get_db)):
    """
    Mark a recommendation as purchased.
    """
    return {"status": "success", "message": "Marked as purchased"}
