"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

export default function MobileDrawer() {
  const {
    isMobileDrawerOpen,
    closeMobileDrawer,
    openModal,
    setActiveCourseFilter,
  } = useApp();

  const handleLinkClick = (filter?: string) => {
    closeMobileDrawer();
    if (filter) {
      setActiveCourseFilter(filter);
    }
  };

  const handleConsultancyClick = () => {
    closeMobileDrawer();
    openModal();
  };

  return (
    <>
      <div
        className={`mobile-menu-overlay ${isMobileDrawerOpen ? "active" : ""}`}
        id="mobile-overlay"
        onClick={closeMobileDrawer}
      />
      <div
        className={`mobile-menu-drawer ${isMobileDrawerOpen ? "active" : ""}`}
        id="mobile-drawer"
      >
        <div className="mobile-drawer-header">
          <div className="brand-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.jpg" alt="IELTS LAB" className="logo-img" />
            <span className="brand-title">
              IELTS <span className="highlight-red">LAB</span>
            </span>
          </div>
          <button
            className="mobile-close"
            id="mobile-close"
            onClick={closeMobileDrawer}
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <ul className="mobile-nav-list">
          <li>
            <a
              href="#home"
              className="mobile-nav-link"
              onClick={() => handleLinkClick()}
            >
              <i className="fa-solid fa-house"></i> Home
            </a>
          </li>
          <li>
            <span className="mobile-group-title">Courses</span>
            <ul className="mobile-sub-list">
              <li>
                <a
                  href="#courses"
                  className="mobile-nav-link"
                  onClick={() => handleLinkClick("ielts")}
                >
                  <i className="fa-solid fa-angle-right"></i> IELTS Training (Academic & GT)
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="mobile-nav-link"
                  onClick={() => handleLinkClick("spoken")}
                >
                  <i className="fa-solid fa-angle-right"></i> Spoken English
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="mobile-nav-link"
                  onClick={() => handleLinkClick("kids")}
                >
                  <i className="fa-solid fa-angle-right"></i> Kids Spoken English
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="mobile-nav-link"
                  onClick={() => handleLinkClick("grammar")}
                >
                  <i className="fa-solid fa-angle-right"></i> Written & Grammar
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#mock-test"
              className="mobile-nav-link"
              onClick={() => handleLinkClick()}
            >
              <i className="fa-solid fa-laptop-file"></i> Mock Test Lab
            </a>
          </li>
          <li>
            <a
              href="#abroad-study"
              className="mobile-nav-link"
              onClick={() => handleLinkClick()}
            >
              <i className="fa-solid fa-plane-departure"></i> Abroad Study
            </a>
          </li>
          <li>
            <a
              href="#success-stories"
              className="mobile-nav-link"
              onClick={() => handleLinkClick()}
            >
              <i className="fa-solid fa-trophy"></i> Success Stories
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="mobile-nav-link"
              onClick={() => handleLinkClick()}
            >
              <i className="fa-solid fa-circle-info"></i> About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="mobile-nav-link"
              onClick={() => handleLinkClick()}
            >
              <i className="fa-solid fa-phone"></i> Contact
            </a>
          </li>
        </ul>

        <div className="mobile-drawer-footer">
          <button
            onClick={handleConsultancyClick}
            className="btn btn-primary btn-block open-consultancy-modal"
          >
            <i className="fa-solid fa-comments"></i> Book Free Consultation
          </button>
          <div className="mobile-contact-info">
            <p>
              <i className="fa-solid fa-phone"></i> 01790-314278
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Kumodini College Gate, Tangail
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
