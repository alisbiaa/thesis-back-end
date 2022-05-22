import {model, Schema} from "mongoose";

export interface IUser {
    email: string;
    name: string;
    last_name: string;
    bio?: string;
    department_id?: string;
    role: "student" | "teacher" | "admin";
}

const schema = new Schema<IUser>({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    last_name: {type: String, required: true},
    bio: {type: String},
    department_id: {type: String},
    role: {type: String, required: true, enum: ['student', 'teacher', 'admin']},
}, {timestamps: true, autoIndex: true});

export const user_model = model<IUser>("user", schema);
