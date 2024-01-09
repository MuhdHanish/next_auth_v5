"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface IBackButtonProps {
    label: string;
    href: string;
}

export const BackButton: React.FC<IBackButtonProps> = ({ label, href }) => {
    return (
        <Button className="font-normal w-full" variant={"link"} size={"sm"} asChild>
            <Link href={href}>{label}</Link>
        </Button>
    );
};
