import React, { FC, ReactNode } from "react";

interface IDashboardLayoutProps {
    children: ReactNode
}

const DashbaordLayout:FC<IDashboardLayoutProps> = props => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-black text-white">This is a shared navbar for dashboard segment</nav>
      {props.children}
    </div>
  );
};


export default DashbaordLayout;
