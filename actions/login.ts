"use server";
import * as z from "zod";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { loginSchema } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export interface ILoginResponse {
    status: "error" | "success";
    message: string;
}

export const login = async (values: z.infer<typeof loginSchema>): Promise<ILoginResponse | undefined>=> {
    const validateFields = loginSchema.safeParse(values);
    
    if (!validateFields.success) {
        return Promise.resolve({ status: "error", message: "Invalid credentials!" });
    }
    const { email, password } = validateFields.data;
    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return Promise.resolve({ status: "error", message: "Invalid credentials!" });
                default:
                    return Promise.resolve({ status: "error", message: "Something went wrong!" });
            }
        }
        throw error;
    }
};
