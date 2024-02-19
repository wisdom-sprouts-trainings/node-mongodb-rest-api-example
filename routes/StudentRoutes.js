import express from "express";
import {
  createStudent,
  getStudentById,
  getStudents,
  updateStudent,
} from "../controllers/StudentController.js";
const studentRouter = express.Router();

studentRouter.route("/student").post(createStudent);
studentRouter.route("/student").get(getStudents);
studentRouter.route("/student/:id").get(getStudentById);
studentRouter.route("/student/:id").put(updateStudent);

export default studentRouter;
