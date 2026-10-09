"use client";

import React, { useEffect, useState } from "react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-action-bar">
      <a
        href="https://wa.me/8801790314278?text=Hello%20IELTS%20LAB,%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-whatsapp"
        title="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
        <span className="float-tooltip">Chat with us</span>
      </a>
      <a
        href="tel:01790314278"
        className="float-btn float-call"
        title="Call Now"
      >
        <i className="fa-solid fa-phone"></i>
        <span className="float-tooltip">01790-314278</span>
      </a>
      <button
        id="back-to-top"
        className={`float-btn float-top ${showTop ? "visible" : ""}`}
        title="Back to Top"
        aria-label="Back to Top"
        onClick={scrollToTop}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
}
