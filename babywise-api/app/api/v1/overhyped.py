from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db

router = APIRouter()

@router.get("/overhyped-products")
def get_overhyped_products(db: Session = Depends(get_db)):
    """
    Get list of overhyped products.
    """
    return [
        {
            "product_name": "Wipe Warmer",
            "overhype_score": 9.5,
            "reality_rating": 2.0,
            "percentage_who_regret": 85,
            "hype_reason": "Seems comforting for baby",
            "reality_check": "Dries out wipes, breeds bacteria",
            "better_alternative": "Warm wipes in hands"
        },
        {
            "product_name": "Diaper Genie",
            "overhype_score": 8.0,
            "reality_rating": 4.0,
            "percentage_who_regret": 40,
            "hype_reason": "Odor control",
            "reality_check": "Expensive refills, regular trash can works fine if emptied daily",
            "better_alternative": "Regular trash can with lid"
        }
    ]
