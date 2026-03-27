"""
Civic Nexus — Backend API
FastAPI + PostgreSQL (Railway)
"""

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from contextlib import asynccontextmanager
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

from database import engine, Base
from routers import auth, civic_cube, donations, admin, users, research, policy_cube


# ── Rate limiter ─────────────────────────────────────────────────────────────
limiter = Limiter(key_func=get_remote_address, default_limits=["200/minute"])


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create all tables on startup if they don't exist
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield


app = FastAPI(
    title="Civic Nexus API",
    version="1.0.0",
    description="Backend for Civic Nexus — political insight & research platform.",
    lifespan=lifespan,
)

# ── Rate limit error handler ──────────────────────────────────────────────────
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# ── CORS ──────────────────────────────────────────────────────────────────────
import os
origins = os.getenv(
    "ALLOWED_ORIGINS",
    "http://localhost,https://garetP.github.io"
).split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Routers ───────────────────────────────────────────────────────────────────
app.include_router(auth.router,      prefix="/auth",      tags=["Auth"])
app.include_router(civic_cube.router, prefix="/civic-cube", tags=["Civic Cube"])
app.include_router(donations.router, prefix="/donation",  tags=["Donations"])
app.include_router(admin.router,     prefix="/admin",     tags=["Admin"])
app.include_router(users.router,     prefix="/users",     tags=["Users"])
app.include_router(research.router,  prefix="/research",  tags=["Research"])
app.include_router(policy_cube.router,    prefix="/policy-cube",    tags=["Policy Cube"])


@app.get("/", tags=["Health"])
async def root():
    return {"status": "ok", "service": "Civic Nexus API"}


@app.get("/health", tags=["Health"])
async def health():
    return {"status": "healthy"}
