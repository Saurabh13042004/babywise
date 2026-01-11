from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from uuid import UUID
from decimal import Decimal
from app.utils.enums import PriceTier, SpaceRequired, Urgency

class ProductBase(BaseModel):
    name: str
    category: str
    subcategory: str
    description: Optional[str] = None
    price_tier: PriceTier
    average_price: Decimal
    price_range_min: Decimal
    price_range_max: Decimal
    space_required: SpaceRequired
    urgency: Urgency
    is_overhyped: bool = False
    safety_rating: Optional[Decimal] = None
    parent_consensus_score: Optional[Decimal] = None
    tags: List[str] = []
    usage_duration_months: Optional[int] = None
    alternatives_exist: bool = False
    safe_to_buy_used: bool = False

class ProductDetailBase(BaseModel):
    why_recommended: Optional[str] = None
    why_skip: Optional[str] = None
    situational_use: Optional[str] = None
    common_complaints: Optional[str] = None
    common_praise: Optional[str] = None
    expert_tip: Optional[str] = None
    budget_alternative: Optional[str] = None
    splurge_alternative: Optional[str] = None

class ProductResponse(ProductBase):
    id: UUID
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class ProductDetailResponse(BaseModel):
    product: ProductResponse
    details: ProductDetailBase
    
    # Additional fields for the response structure
    for_your_situation: Optional[dict] = None
    reviews_summary: Optional[dict] = None

    class Config:
        from_attributes = True
