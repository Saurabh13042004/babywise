from pydantic import BaseModel
from typing import List, Optional
from decimal import Decimal
from uuid import UUID

class SearchQuery(BaseModel):
    query: str
    filters: Optional[dict] = None

class SearchResult(BaseModel):
    product_id: UUID
    name: str
    category: str
    match_score: float
    price: Decimal
    image_url: Optional[str] = None

class SearchResponse(BaseModel):
    results: List[SearchResult]
    suggestions: List[str]
