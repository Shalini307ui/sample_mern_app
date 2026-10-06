from fastapi import APIRouter

from database import student_collection
from models import student_model

student_router=APIRouter(prefix="/student",tags=["student"])

#localhost:8000/student/addstudent
@student_router.post("/addstudent")
def addstudent(stu:student_model):
    result=student_collection.insert_one(stu.model_dump())
    #model_dump used to convert class fields into dict
    return " student inserted success"

#localhost:8000/student/getstudent
@student_router.get("/getstudent")
def getstudent():
    return "get student method called"

#localhost:8000/student/updatestudent =>put
@student_router.get("/updatestudent")
def updatestudent():
    return "update student method called"

#localhost:8000/student/deletestudent =>delete
@student_router.get("/deletestudent")
def deletestudent():
    return "delete student method called"
