from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.product import ProductDetailResponse
import uuid
from decimal import Decimal
from app.utils.enums import PriceTier, SpaceRequired, Urgency

router = APIRouter()

@router.get("/{product_id}/details", response_model=ProductDetailResponse)
def get_product_details(product_id: uuid.UUID, db: Session = Depends(get_db)):
    """
    Get detailed product info.
    """
    return {
        "product": {
            "id": product_id,
            "name": "Travel Lite Stroller",
            "category": "Travel",
            "subcategory": "Strollers",
            "description": "Lightweight stroller perfect for urban living...",
            "price_tier": PriceTier.MID_RANGE,
            "average_price": Decimal("149.99"),
            "price_range_min": Decimal("100.00"),
            "price_range_max": Decimal("200.00"),
            "space_required": SpaceRequired.COMPACT,
            "urgency": Urgency.IMMEDIATE,
            "is_overhyped": False,
            "safety_rating": Decimal("4.8"),
            "parent_consensus_score": Decimal("4.2"),
            "tags": ["portable", "travel_friendly", "compact"],
            "usage_duration_months": 36,
            "alternatives_exist": True,
            "safe_to_buy_used": True,
            "created_at": "2026-01-01T00:00:00"
        },
        "details": {
            "why_recommended": "Perfect for your urban lifestyle...",
            "common_praise": "Parents love how easy it is to fold...",
            "expert_tip": "Pro tip: Store in trunk for quick errands..."
        },
        "for_your_situation": {
            "personalized_reason": "Based on your compact car and urban lifestyle...",
            "match_score": 4.5,
            "conditional_notes": "Great for public transit use"
        },
        "reviews_summary": {
            "total_reviews": 1250,
            "average_rating": 4.2,
            "sentiment": "positive",
            "top_positive_keywords": ["easy to use", "compact", "lightweight"],
            "top_negative_keywords": ["small basket", "not for jogging"]
        }
    }

@router.get("/")
def get_products(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    """
    Get list of products.
    """
    return [
        {
            "id": uuid.uuid4(),
            "name": "Product " + str(i),
            "category": "General"
        } for i in range(limit)
    ]
