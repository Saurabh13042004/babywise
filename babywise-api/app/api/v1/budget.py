from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.budget import BudgetPlanResponse, BudgetItemResponse, BudgetItemCreate, BudgetItemUpdate, BudgetOverview
from app.utils.enums import BudgetTier, Priority
from datetime import datetime
import uuid
from decimal import Decimal

router = APIRouter()

@router.post("/initialize", response_model=BudgetPlanResponse)
def initialize_budget(user_id: uuid.UUID, db: Session = Depends(get_db)):
    """
    Initialize budget plan.
    """
    return {
        "id": uuid.uuid4(),
        "user_id": user_id,
        "total_budget": Decimal("5000.00"),
        "current_spent": Decimal("0.00"),
        "projected_total": Decimal("4500.00"),
        "budget_tier": BudgetTier.MODERATE,
        "created_at": datetime.now()
    }

@router.get("/{user_id}", response_model=BudgetOverview)
def get_budget(user_id: uuid.UUID, db: Session = Depends(get_db)):
    """
    Get budget overview.
    """
    return {
        "plan": {
            "id": uuid.uuid4(),
            "user_id": user_id,
            "total_budget": Decimal("5000.00"),
            "current_spent": Decimal("1200.00"),
            "projected_total": Decimal("4800.00"),
            "budget_tier": BudgetTier.MODERATE,
            "created_at": datetime.now()
        },
        "items": [
            {
                "id": uuid.uuid4(),
                "budget_plan_id": uuid.uuid4(),
                "item_name": "Crib",
                "category": "Sleep",
                "estimated_cost": Decimal("300.00"),
                "priority": Priority.MUST_HAVE,
                "created_at": datetime.now()
            }
        ],
        "category_breakdown": {
            "Sleep": Decimal("300.00"),
            "Travel": Decimal("200.00")
        }
    }

@router.post("/items", response_model=BudgetItemResponse)
def create_budget_item(item: BudgetItemCreate, db: Session = Depends(get_db)):
    """
    Create budget item.
    """
    return {
        "id": uuid.uuid4(),
        "budget_plan_id": item.budget_plan_id,
        "item_name": item.item_name,
        "category": item.category,
        "estimated_cost": item.estimated_cost,
        "priority": item.priority,
        "created_at": datetime.now()
    }

@router.patch("/items/{item_id}", response_model=BudgetItemResponse)
def update_budget_item(item_id: uuid.UUID, item: BudgetItemUpdate, db: Session = Depends(get_db)):
    """
    Update budget item.
    """
    return {
        "id": item_id,
        "budget_plan_id": uuid.uuid4(),
        "item_name": "Updated Item",
        "category": "Sleep",
        "priority": Priority.MUST_HAVE,
        "created_at": datetime.now()
    }

@router.delete("/items/{item_id}")
def delete_budget_item(item_id: uuid.UUID, db: Session = Depends(get_db)):
    """
    Delete budget item.
    """
    return {"status": "success", "message": "Item deleted"}

@router.get("/splurge-save-guide")
def get_splurge_save_guide(db: Session = Depends(get_db)):
    """
    Get splurge vs save guide.
    """
    return {
        "splurge_on": ["Car Seat", "Stroller", "Mattress"],
        "save_on": ["Clothes", "Toys", "High Chair"]
    }
