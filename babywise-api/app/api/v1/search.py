from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.search import SearchResponse
import uuid
from decimal import Decimal

router = APIRouter()

@router.get("/", response_model=SearchResponse)
def search(query: str, db: Session = Depends(get_db)):
    """
    Search for products.
    """
    return {
        "results": [
            {
                "product_id": uuid.uuid4(),
                "name": "Best Stroller 2026",
                "category": "Travel",
                "match_score": 0.95,
                "price": Decimal("299.99")
            }
        ],
        "suggestions": ["stroller", "travel system", "car seat"]
    }
