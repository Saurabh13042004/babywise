# BabyWise AI API

AI-powered baby product recommendation platform backend.

## Setup

1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env` and update the values.

4. Run the application:
   ```bash
   uvicorn app.main:app --reload
   ```

## Documentation

- Swagger UI: http://localhost:8000/api/docs
- ReDoc: http://localhost:8000/api/redoc

## Testing

Run tests with pytest:
```bash
pytest
```
