import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#1FA0FF] via-[#12DAFB] to-[#A7FDCC]">
        {children}
      </div>
    );
};

export default AuthLayout