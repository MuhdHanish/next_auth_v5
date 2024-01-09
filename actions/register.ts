"use server";
import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { registerSchema } from "@/schemas";

export interface IRegisterResponse {
    status: "error" | "success";
    message: string;
}

export const register = async (values: z.infer<typeof registerSchema>): Promise<IRegisterResponse> => {
    const validateFields = registerSchema.safeParse(values);
    
    if (!validateFields.success) {
        return Promise.resolve({ status: "error", message: "Invalid credentials!" });
    }
    const { name, email, password } = validateFields.data;
    const userExist = await db.user.findUnique({
        where: {
            email
        }
    });
    if (userExist) {
        return Promise.resolve({ status: "error", message: "Email already in use!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });
    // TODO: Send verifcation token email
    return  Promise.resolve({ status: "success", message: "Account created!" });
};
