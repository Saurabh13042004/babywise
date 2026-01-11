from pydantic import BaseModel
from typing import List, Optional, Dict
from datetime import date, datetime
from uuid import UUID
from decimal import Decimal
from app.utils.enums import BudgetTier, Priority

class BudgetItemBase(BaseModel):
    item_name: str
    category: str
    estimated_cost: Optional[Decimal] = None
    actual_cost: Optional[Decimal] = None
    priority: Priority
    is_purchased: bool = False
    purchase_date: Optional[date] = None
    notes: Optional[str] = None

class BudgetItemCreate(BudgetItemBase):
    budget_plan_id: UUID
    product_id: Optional[UUID] = None

class BudgetItemUpdate(BaseModel):
    item_name: Optional[str] = None
    category: Optional[str] = None
    estimated_cost: Optional[Decimal] = None
    actual_cost: Optional[Decimal] = None
    priority: Optional[Priority] = None
    is_purchased: Optional[bool] = None
    purchase_date: Optional[date] = None
    notes: Optional[str] = None

class BudgetItemResponse(BudgetItemBase):
    id: UUID
    budget_plan_id: UUID
    product_id: Optional[UUID] = None
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class BudgetPlanResponse(BaseModel):
    id: UUID
    user_id: UUID
    total_budget: Decimal
    current_spent: Decimal
    projected_total: Decimal
    budget_tier: BudgetTier
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class BudgetOverview(BaseModel):
    plan: BudgetPlanResponse
    items: List[BudgetItemResponse]
    category_breakdown: Dict[str, Decimal]
