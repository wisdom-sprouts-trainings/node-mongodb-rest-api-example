import mongoose from "mongoose";

const StudentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        mobile: {
            type: Number,
            required: true,
            unique: true
        },
        subjects: [
            {
                subjectName: String,
                points: {
                    type: Number,
                    default: 0
                }
            }
        ]
    }
);

const StudentModel = mongoose.model("student", StudentSchema);
export default StudentModel;