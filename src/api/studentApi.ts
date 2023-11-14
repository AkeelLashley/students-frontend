import axios from "axios";

import { StudentType } from "../types/student.types";


const STUDENTS_API_URL = `${import.meta.env.VITE_BASE_URL}/students`

export const addStudent = async (studentData: StudentType) => {
    try {
        const response = await axios.post(STUDENTS_API_URL, studentData)
        console.log("Student Added:", response.data)
    } catch(err){
        console.log(err)
    }
}


