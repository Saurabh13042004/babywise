from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.api.v1 import auth, profile, recommendations, products, budget, search, overhyped

app = FastAPI(
    title="BabyWise AI API",
    description="AI-powered baby product recommendation platform",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/v1/auth", tags=["Auth"])
app.include_router(profile.router, prefix="/api/v1/profile", tags=["Profile"])
app.include_router(recommendations.router, prefix="/api/v1/recommendations", tags=["Recommendations"])
app.include_router(products.router, prefix="/api/v1/products", tags=["Products"])
app.include_router(budget.router, prefix="/api/v1/budget", tags=["Budget"])
app.include_router(search.router, prefix="/api/v1/search", tags=["Search"])
app.include_router(overhyped.router, prefix="/api/v1/overhyped", tags=["Overhyped"])

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.get("/")
def root():
    return {"message": "Welcome to BabyWise AI API"}
