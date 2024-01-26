import React from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const messageObjects = {
  error: {
    icon: <ExclamationTriangleIcon className="w-4 h-4" />,
    class: `bg-destructive/15 text-destructive`,
  },
  success: {
    icon: <CheckCircledIcon className="w-4 h-4" />,
    class: `bg-emerald-500/15 text-emerald-500`,
  },
};

interface IFormStatusMessageProps {
  status?: keyof typeof messageObjects;
  message?: string;
}

export const FormStatusMessage: React.FC<IFormStatusMessageProps> = ({ status, message }) => {
    if (!status || !message) {
        return null;
    }
    const { icon, class: statusClass } =  messageObjects[status];
  return (
    <div className={`p-3 rounded-md flex items-center gap-x-2 text-sm ${statusClass}`}>
      {icon}
      <p>{message}</p>
    </div>
  );
};
