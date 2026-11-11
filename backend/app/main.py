from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    app_name: str = "Cheerful Takeaways API"
    app_env: str = "development"
    cors_origins: str = "http://localhost:5173"
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

settings = Settings()
app = FastAPI(title=settings.app_name, version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in settings.cors_origins.split(",")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
def health():
    return {"status": "ok", "service": "cheerful-takeaways-api", "version": "0.1.0"}

@app.get("/api/v1/store")
def store_profile():
    return {
        "name": "Cheerful Takeaways",
        "tagline": "Tradition served with a smile",
        "address": "Moonlight Building, Gweru, Zimbabwe",
        "fulfilment": ["pickup", "delivery"],
        "payment_methods": ["cash", "electronic"],
        "currency_configuration": ["USD", "ZWG"],
    }

@app.get("/api/v1/menu")
def menu():
    return {"categories": [], "items": [], "message": "Menu catalogue not configured yet."}
