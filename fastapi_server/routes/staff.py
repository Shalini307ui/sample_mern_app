from fastapi import APIRouter

staff_router=APIRouter(prefix="/staff",tags=["staff"])

#localhost:8000/staff/addstaff
@staff_router.post("/addstudent")
def addstudent():
    return "add student method called"

#localhost:8000/staff/getstaff
@staff_router.get("/getstudent")
def getstudent():
    return "get student method called"

#localhost:8000/staff/updatestaff =>put
@staff_router.get("/updatestudent")
def updatestudent():
    return "update student method called"

#localhost:8000/staff/deletestaff =>delete
@staff_router.get("/deletestudent")
def deletestudent():
    return "delete student method called"
