"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

export default function ToastContainer() {
  const { toasts } = useApp();

  return (
    <div id="toast-container" className="toast-container">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast ${toast.type === "success" ? "toast-success" : ""}`}
        >
          <i
            className={`fa-solid ${
              toast.type === "success" ? "fa-circle-check" : "fa-circle-info"
            }`}
          ></i>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
