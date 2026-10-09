"use client";

import React, { useEffect, useState } from "react";
import { useApp } from "@/context/AppContext";

export default function Navbar() {
  const { openModal, openMobileDrawer, setActiveCourseFilter } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = [
        "home",
        "courses",
        "mock-test",
        "abroad-study",
        "success-stories",
        "about",
        "contact",
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownFilter = (filter: string) => {
    setActiveCourseFilter(filter);
  };

  return (
    <header className={`main-header ${isScrolled ? "scrolled" : ""}`} id="header">
      <div className="container navbar-container">
        <a href="#home" className="brand-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.jpg" alt="IELTS LAB Logo" className="logo-img" />
          <div className="logo-text">
            <span className="brand-title">
              IELTS <span className="highlight-red">LAB</span>
            </span>
            <span className="brand-sub">Tangail Premier Academy</span>
          </div>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="nav-menu" id="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link ${activeSection === "home" ? "active" : ""}`}
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#courses"
                className={`nav-link dropdown-toggle ${
                  activeSection === "courses" ? "active" : ""
                }`}
              >
                Courses <i className="fa-solid fa-chevron-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="#courses"
                    onClick={() => handleDropdownFilter("ielts")}
                  >
                    <div className="drop-icon">
                      <i className="fa-solid fa-award"></i>
                    </div>
                    <div>
                      <strong>IELTS Training</strong>
                      <p>Academic & General Training (7.5+ Target)</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    onClick={() => handleDropdownFilter("spoken")}
                  >
                    <div className="drop-icon">
                      <i className="fa-solid fa-comments"></i>
                    </div>
                    <div>
                      <strong>Spoken English</strong>
                      <p>Fluency, Accent & Corporate Communication</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    onClick={() => handleDropdownFilter("kids")}
                  >
                    <div className="drop-icon">
                      <i className="fa-solid fa-child-reaching"></i>
                    </div>
                    <div>
                      <strong>Kids Spoken English</strong>
                      <p>Phonics, Storytelling & Fun Speaking</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    onClick={() => handleDropdownFilter("grammar")}
                  >
                    <div className="drop-icon">
                      <i className="fa-solid fa-pen-nib"></i>
                    </div>
                    <div>
                      <strong>Written & Grammar</strong>
                      <p>Sentence Structure, Essay & Report Writing</p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                href="#mock-test"
                className={`nav-link ${activeSection === "mock-test" ? "active" : ""}`}
              >
                Mock Test
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#abroad-study"
                className={`nav-link ${
                  activeSection === "abroad-study" ? "active" : ""
                }`}
              >
                Abroad Study
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#success-stories"
                className={`nav-link ${
                  activeSection === "success-stories" ? "active" : ""
                }`}
              >
                Success Story
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className={`nav-link ${activeSection === "about" ? "active" : ""}`}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Header Action Buttons */}
        <div className="header-actions">
          <button
            onClick={() => openModal()}
            className="btn btn-consultancy open-consultancy-modal"
          >
            <i className="fa-solid fa-calendar-check"></i> Free Consultancy
          </button>
          <button
            className="mobile-toggle"
            id="mobile-toggle"
            aria-label="Toggle Menu"
            onClick={openMobileDrawer}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
