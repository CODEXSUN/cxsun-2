"use client";

import { type JSX, useEffect } from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdErrorOutline, MdCancel, MdWarning } from "react-icons/md";

export type AlertType = "success" | "update" | "delete" | "warning" | "failed";

export interface AlertProps {
  type: AlertType;
  message: string;
  show: boolean;
  onClose?: () => void;
  duration?: number;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

export default function Alert({
  type,
  message,
  show,
  onClose,
  duration = 5000,
  position = "top-right",
}: AlertProps) {
  // Schedule auto-close
  useEffect(() => {
    if (!show || duration <= 0) return;
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  if (!show) return null;

  const config: Record<AlertType, { className: string; icon: JSX.Element }> = {
    success: {
      className: "bg-create border-l-primary text-white",
      icon: <IoCheckmarkDoneCircleSharp size={24} />,
    },
    update: {
      className: "bg-update border-l-primary text-white",
      icon: <MdCancel size={24} />,
    },
    delete: {
      className: "bg-delete border-l-primary text-white",
      icon: <MdErrorOutline size={24} />,
    },
    warning: {
      className: "bg-warning border-l-primary text-white",
      icon: <MdWarning size={24} />,
    },
    failed: {
      className: "bg-delete border-l-primary text-white",
      icon: <MdErrorOutline size={24} />,
    },
  };

  const positionClass =
    position === "top-right"
      ? "fixed top-5 right-5"
      : position === "top-left"
      ? "fixed top-5 left-5"
      : position === "bottom-right"
      ? "fixed bottom-5 right-5"
      : "fixed bottom-5 left-5";

  const { className, icon } = config[type];

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`${positionClass} w-[300px] md:w-96 z-60 flex items-center border-l-4 gap-4 p-4 px-3 md:px-6 border border-ring rounded-lg shadow-lg animate__animated animate__slideInRight ${className}`}
      onClick={onClose} // Optional: click to dismiss
    >
      {icon}
      <span className="text-base font-medium text-white">{message}</span>
    </div>
  );
}
