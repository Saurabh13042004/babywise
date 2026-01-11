from pydantic import BaseModel
from typing import List, Optional, Dict
from datetime import datetime
from uuid import UUID
from decimal import Decimal
from app.utils.enums import CategoryAssignment

class RecommendationResponse(BaseModel):
    product_id: str
    name: str
    category: str
    price_range: str
    why_recommended: str
    recommendation_score: float
    is_saved: bool = False

class RecommendationsByCategory(BaseModel):
    must_have_now: List[RecommendationResponse] = []
    get_soon: List[RecommendationResponse] = []
    can_wait: List[RecommendationResponse] = []
    skip_it: List[RecommendationResponse] = []
    consider_if: List[RecommendationResponse] = []

class GenerateRecommendationsResponse(BaseModel):
    user_id: UUID
    generated_at: datetime
    categories: RecommendationsByCategory
