from sqlalchemy import Column, String, Numeric, Date, DateTime, Enum, ForeignKey, Boolean, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import uuid
from app.database import Base
from app.utils.enums import BudgetTier, Priority

class BudgetPlan(Base):
    __tablename__ = "budget_plans"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), unique=True, nullable=False)
    total_budget = Column(Numeric, nullable=False)
    current_spent = Column(Numeric, default=0)
    projected_total = Column(Numeric, nullable=False)
    budget_tier = Column(Enum(BudgetTier), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    user = relationship("User", back_populates="budget_plan")
    items = relationship("BudgetItem", back_populates="budget_plan")

class BudgetItem(Base):
    __tablename__ = "budget_items"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    budget_plan_id = Column(UUID(as_uuid=True), ForeignKey("budget_plans.id"), nullable=False)
    product_id = Column(UUID(as_uuid=True), ForeignKey("products.id"), nullable=True)
    item_name = Column(String, nullable=False)
    category = Column(String, nullable=False)
    estimated_cost = Column(Numeric, nullable=True)
    actual_cost = Column(Numeric, nullable=True)
    priority = Column(Enum(Priority), nullable=False)
    is_purchased = Column(Boolean, default=False)
    purchase_date = Column(Date, nullable=True)
    notes = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    budget_plan = relationship("BudgetPlan", back_populates="items")
    product = relationship("Product", back_populates="budget_items")
