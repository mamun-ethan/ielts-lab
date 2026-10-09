"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface ToastItem {
  id: number;
  message: string;
  type: "success" | "info";
}

interface AppContextType {
  isModalOpen: boolean;
  modalCourse: string;
  openModal: (courseName?: string) => void;
  closeModal: () => void;
  activeCourseFilter: string;
  setActiveCourseFilter: (filter: string) => void;
  isMobileDrawerOpen: boolean;
  openMobileDrawer: () => void;
  closeMobileDrawer: () => void;
  toasts: ToastItem[];
  showToast: (message: string, type?: "success" | "info") => void;
  sendToWhatsApp: (data: {
    name: string;
    phone: string;
    course: string;
    email?: string;
    note?: string;
  }) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState("IELTS Masterclass (Academic)");
  const [activeCourseFilter, setActiveCourseFilter] = useState("all");
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const openModal = (courseName?: string) => {
    if (courseName) {
      setModalCourse(courseName);
    }
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  const openMobileDrawer = () => {
    setIsMobileDrawerOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMobileDrawer = () => {
    setIsMobileDrawerOpen(false);
    document.body.style.overflow = "";
  };

  const showToast = (message: string, type: "success" | "info" = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const sendToWhatsApp = (data: {
    name: string;
    phone: string;
    course: string;
    email?: string;
    note?: string;
  }) => {
    const whatsappNumber = "8801790314278";
    const text =
      `*New Admission / Free Consultation Request (IELTS LAB Tangail)*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(data.name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(data.phone)}%0A` +
      (data.email ? `✉️ *Email:* ${encodeURIComponent(data.email)}%0A` : "") +
      `🎯 *Course/Program:* ${encodeURIComponent(data.course)}%0A` +
      (data.note ? `💬 *Details:* ${encodeURIComponent(data.note)}%0A` : "") +
      `📍 *Campus:* Kumodini College Gate, Tangail`;

    const waUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1200);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isModalOpen) closeModal();
        if (isMobileDrawerOpen) closeMobileDrawer();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, isMobileDrawerOpen]);

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        modalCourse,
        openModal,
        closeModal,
        activeCourseFilter,
        setActiveCourseFilter,
        isMobileDrawerOpen,
        openMobileDrawer,
        closeMobileDrawer,
        toasts,
        showToast,
        sendToWhatsApp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
