"use client";
import { useRouter } from 'next/navigation';
import React, { FC, ReactNode } from 'react';

interface ILoginButtonProps {
    children: ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
};

export const LoginButton: FC<ILoginButtonProps> = ({ children, mode = "redirect", asChild }) => {

    const router = useRouter();
    const onClick = () => router.push(`/auth/login`);

    if (mode === "modal") {
        return (
            <span>TODO: Implement modal</span>
        )
    }

    return (
        <span onClick={onClick} className="cursor-pointer">{children}</span>
    )
};
