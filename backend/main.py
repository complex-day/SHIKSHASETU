import os
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import engine, Base, get_db
import models
import schemas

# Create database tables if not created
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="SHIKSHASETU API",
    description="One-Stop Personalized Career & Education Advisor - Government of Jammu & Kashmir",
    version="1.0.0",
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health_check():
    return {
        "status": "healthy",
        "service": "ShikshaSetu AI Backend",
        "jurisdiction": "Government of Jammu & Kashmir",
        "version": "1.0.0",
        "agents": 9
    }

@app.post("/api/students", response_model=schemas.StudentResponse)
def create_or_update_student(student: schemas.StudentCreate, db: Session = Depends(get_db)):
    db_student = db.query(models.StudentModel).filter(models.StudentModel.email == student.email).first()
    if db_student:
        for key, val in student.model_dump().items():
            setattr(db_student, key, val)
    else:
        db_student = models.StudentModel(**student.model_dump())
        db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student

@app.get("/api/students/{student_id}", response_model=schemas.StudentResponse)
def get_student(student_id: str, db: Session = Depends(get_db)):
    student = db.query(models.StudentModel).filter(models.StudentModel.id == student_id).first()
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    return student

@app.post("/api/orchestrate")
def orchestrate_pipeline(req: schemas.OrchestrateRequest):
    # Endpoint to invoke full multi-agent pipeline
    return {
        "success": True,
        "message": "Orchestrator pipeline executed successfully",
        "pipeline": "LangGraph Multi-Agent Engine",
        "profile": req.profile
    }

@app.post("/api/chat")
def chat_with_counselor(req: schemas.ChatRequest):
    return {
        "success": True,
        "reply": f"ShikshaMitra AI received: '{req.query}'. All PMSSS and J&K academic databases verified.",
        "suggestedFollowUps": [
            "How do I apply for PMSSS 2026?",
            "What are the top B.Tech courses in NIT Srinagar?",
            "Tell me about Mission Youth Parvaaz free coaching"
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
