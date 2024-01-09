"use server";
import * as z from "zod";
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
    return  Promise.resolve({ status: "success", message: "Email sent!" });
};
