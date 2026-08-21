import uuid
from datetime import datetime
from sqlalchemy import Column, String, Integer, Float, Boolean, JSON, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from database import Base

class StudentModel(Base):
    __tablename__ = "students"

    id = Column(String(64), primary_key=True, default=lambda: str(uuid.uuid4()))
    full_name = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, index=True, nullable=False)
    phone = Column(String(32), nullable=True)
    age = Column(Integer, nullable=True)
    gender = Column(String(32), nullable=True)
    district = Column(String(64), index=True, nullable=False)
    category = Column(String(32), nullable=False, default="OM")
    family_annual_income = Column(Float, nullable=False, default=300000.0)
    current_education_level = Column(String(64), nullable=False, default="class_12")
    current_stream = Column(String(64), nullable=True)
    class10_percentage = Column(Float, nullable=True)
    class12_percentage = Column(Float, nullable=True)
    preferred_subjects = Column(JSON, default=list)
    interests = Column(JSON, default=list)
    hobbies = Column(JSON, default=list)
    current_skills = Column(JSON, default=list)
    career_aspirations = Column(JSON, default=list)
    career_readiness_score = Column(Integer, default=50)
    persona_badge = Column(String(128), default="Aspiring Pioneer")
    persona_description = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    assessments = relationship("AssessmentModel", back_populates="student", cascade="all, delete-orphan")


class AssessmentModel(Base):
    __tablename__ = "assessments"

    id = Column(String(64), primary_key=True, default=lambda: str(uuid.uuid4()))
    student_id = Column(String(64), ForeignKey("students.id"), nullable=False)
    raw_answers = Column(JSON, default=dict)
    scores = Column(JSON, default=list)
    overall_aptitude_index = Column(Integer, default=0)
    dominant_traits = Column(JSON, default=list)
    completed_at = Column(DateTime, default=datetime.utcnow)

    student = relationship("StudentModel", back_populates="assessments")


class CollegeModel(Base):
    __tablename__ = "colleges"

    id = Column(String(64), primary_key=True)
    name = Column(String(255), nullable=False)
    short_name = Column(String(64), nullable=False)
    type = Column(String(64), nullable=False)
    state = Column(String(64), nullable=False)
    district = Column(String(64), nullable=False)
    naac_grade = Column(String(16), nullable=True)
    nirf_rank = Column(Integer, nullable=True)
    tuition_fee_range = Column(String(128), nullable=True)
    average_package_lpa = Column(Float, default=0.0)
    highest_package_lpa = Column(Float, default=0.0)
    pmsss_approved = Column(Boolean, default=True)
    pmsss_seats = Column(Integer, default=0)
    courses_offered = Column(JSON, default=list)
    website_url = Column(String(255), nullable=True)


class ScholarshipModel(Base):
    __tablename__ = "scholarships"

    id = Column(String(64), primary_key=True)
    title = Column(String(255), nullable=False)
    provider = Column(String(255), nullable=False)
    category_type = Column(String(64), nullable=False)
    max_benefit_amount = Column(Float, nullable=False)
    benefit_description = Column(Text, nullable=False)
    eligibility_criteria = Column(JSON, default=dict)
    deadline = Column(String(64), nullable=False)
    status = Column(String(32), default="Open")
    application_url = Column(String(255), nullable=False)
