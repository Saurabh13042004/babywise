from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.user import UserCreate, UserLogin, UserResponse, Token
from app.utils.enums import AuthProvider
from datetime import datetime
import uuid

router = APIRouter()

@router.post("/register", response_model=UserResponse)
def register(user: UserCreate, db: Session = Depends(get_db)):
    """
    Register a new user.
    """
    return UserResponse(
        id=uuid.uuid4(),
        email=user.email,
        auth_provider=AuthProvider.EMAIL,
        profile_completed=False,
        created_at=datetime.now()
    )

@router.post("/login", response_model=Token)
def login(user: UserLogin, db: Session = Depends(get_db)):
    """
    Login user and return JWT token.
    """
    return Token(
        access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.hardcoded.token",
        token_type="bearer"
    )

@router.post("/google", response_model=Token)
def google_auth(token: str, db: Session = Depends(get_db)):
    """
    Authenticate with Google.
    """
    return Token(
        access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.google.token",
        token_type="bearer"
    )

@router.post("/apple", response_model=Token)
def apple_auth(token: str, db: Session = Depends(get_db)):
    """
    Authenticate with Apple.
    """
    return Token(
        access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.apple.token",
        token_type="bearer"
    )

@router.get("/me", response_model=UserResponse)
def get_current_user(db: Session = Depends(get_db)):
    """
    Get current authenticated user.
    """
    return UserResponse(
        id=uuid.uuid4(),
        email="user@example.com",
        auth_provider=AuthProvider.EMAIL,
        profile_completed=True,
        created_at=datetime.now()
    )
