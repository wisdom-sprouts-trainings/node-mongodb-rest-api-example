import StudentModel from "../models/StudentModel.js";

const createStudent = async (req, res) => {
  let { name, email, mobile } = req.body;

  //   const oldStudent = await StudentModel.findOne({ mobile });

  const newStudent = await StudentModel.create({
    name,
    email,
    mobile,
  });

  if (newStudent) {
    res.status(201).json({
      _id: newStudent._id,
      name: newStudent.name,
      email: newStudent.email,
      mobile: newStudent.mobile,
      subjects: newStudent.subjects,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Student Data");
  }
};

const getStudents = async (req, res) => {
  const students = await StudentModel.find();
  if (students) {
    return res.status(200).json(students);
  } else {
    res.status(400);
    throw new Error("Invalid Request");
  }
};

const getStudentById = async (req, res) => {
  const students = await StudentModel.findById(req.params.id);
  if (students) {
    return res.status(200).json(students);
  } else {
    res.status(400);
    throw new Error("Invalid Request");
  }
};

const updateStudent = async (req, res) => {
  const student = await StudentModel.findById(req.params.id);

  if (student) {
    student.name = req.body.name || student.name;
    student.email = req.body.email || student.email;
    student.mobile = req.body.mobile || student.mobile;
    student.subjects = req.body.subjects || student.subjects;

    const updatedStudent = await student.save();

    if (updatedStudent) {
      res.status(201).json({
        _id: updatedStudent._id,
        name: updatedStudent.name,
        email: updatedStudent.email,
        mobile: updatedStudent.mobile,
        subjects: updatedStudent.subjects,
      });
    } else {
      res.status(400);
      throw new Error("Invalid Student Data");
    }
  } else {
    res.status(404);
    throw new Error("Student not found");
  }
};

export { createStudent, getStudents, getStudentById, updateStudent };
