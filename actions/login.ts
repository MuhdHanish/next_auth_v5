"use server";
import * as z from "zod";
import { loginSchema } from "@/schemas";

export interface ILoginResponse {
    status: "error" | "success";
    message: string;
}

export const login = async (values: z.infer<typeof loginSchema>): Promise<ILoginResponse> => {
    const validateFields = loginSchema.safeParse(values);
    
    if (!validateFields.success) {
        return Promise.resolve({ status: "error", message: "Invalid credentials !" });
    }
    return  Promise.resolve({ status: "success", message: "Email sent !" });
};
