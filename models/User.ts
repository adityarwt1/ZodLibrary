import mongoose ,{Schema , Document } from "mongoose";
import {z} from "zod";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
const UserSchema:Schema<IUser> = new Schema({
    username: z.string().min(3).max(20).describe("Username").parse(""),
    email: z.string().email().describe("Email").parse(""),
    password: z.string().min(6).max(100).describe("Password").parse(""),
},{timestamps: true});

const User = mongoose.model<IUser>("User", UserSchema) || mongoose.models.User;
export default User;