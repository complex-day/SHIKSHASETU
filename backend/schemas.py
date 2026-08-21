from typing import List, Optional, Dict, Any
from pydantic import BaseModel, EmailStr

class StudentBase(BaseModel):
    full_name: str
    email: EmailStr
    phone: Optional[str] = None
    age: Optional[int] = None
    gender: Optional[str] = "male"
    district: str
    category: str = "OM"
    family_annual_income: float = 300000.0
    current_education_level: str = "class_12"
    current_stream: Optional[str] = "science_pcm"
    class10_percentage: Optional[float] = None
    class12_percentage: Optional[float] = None
    preferred_subjects: List[str] = []
    interests: List[str] = []
    hobbies: List[str] = []
    current_skills: List[str] = []
    career_aspirations: List[str] = []

class StudentCreate(StudentBase):
    pass

class StudentResponse(StudentBase):
    id: str
    career_readiness_score: int
    persona_badge: str
    persona_description: Optional[str] = None

    class Config:
        from_attributes = True

class AssessmentSubmit(BaseModel):
    student_id: str
    answers: Dict[str, int]

class OrchestrateRequest(BaseModel):
    profile: Dict[str, Any]
    assessment_answers: Optional[Dict[str, int]] = None

class ChatRequest(BaseModel):
    query: str
    history: Optional[List[Dict[str, str]]] = []
    student_profile: Optional[Dict[str, Any]] = None
