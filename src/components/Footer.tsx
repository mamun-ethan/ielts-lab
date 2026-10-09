"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { setActiveCourseFilter } = useApp();

  return (
    <footer className="main-footer bg-dark text-white">
      <div className="container footer-top section-padding">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-col col-brand">
            <a href="#home" className="footer-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.jpg"
                alt="IELTS LAB Logo"
                className="footer-logo-img"
              />
              <div>
                <span className="brand-title text-white">
                  IELTS <span className="highlight-red">LAB</span>
                </span>
                <span className="brand-tagline">Makes Life Easy</span>
              </div>
            </a>
            <p className="footer-desc">
              &quot;Achieve your dream IELTS band Score with expert guidance from
              IELTS LAB. We offer Academic &amp; General IELTS Training, Kids English,
              Mock test, Spoken English and personalized feedback.&quot;
            </p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/profile.php?id=61577687096983"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.facebook.com/messages/t/61577687096983/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Messenger"
              >
                <i className="fa-brands fa-facebook-messenger"></i>
              </a>
              <a
                href="https://wa.me/8801790314278"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="mailto:ieltslab4@gmail.com" aria-label="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">
                  <i className="fa-solid fa-angle-right"></i> Home
                </a>
              </li>
              <li>
                <a href="#courses">
                  <i className="fa-solid fa-angle-right"></i> All Courses
                </a>
              </li>
              <li>
                <a href="#mock-test">
                  <i className="fa-solid fa-angle-right"></i> Mock Test Lab
                </a>
              </li>
              <li>
                <a href="#abroad-study">
                  <i className="fa-solid fa-angle-right"></i> Study Abroad
                </a>
              </li>
              <li>
                <a href="#success-stories">
                  <i className="fa-solid fa-angle-right"></i> Success Stories
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="fa-solid fa-angle-right"></i> About Founder
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="fa-solid fa-angle-right"></i> Contact &amp; Location
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Courses</h4>
            <ul className="footer-links">
              <li>
                <a href="#courses" onClick={() => setActiveCourseFilter("ielts")}>
                  <i className="fa-solid fa-angle-right"></i> IELTS Academic Masterclass
                </a>
              </li>
              <li>
                <a href="#courses" onClick={() => setActiveCourseFilter("ielts")}>
                  <i className="fa-solid fa-angle-right"></i> IELTS General Training
                </a>
              </li>
              <li>
                <a href="#courses" onClick={() => setActiveCourseFilter("spoken")}>
                  <i className="fa-solid fa-angle-right"></i> Spoken English Mastery
                </a>
              </li>
              <li>
                <a href="#courses" onClick={() => setActiveCourseFilter("kids")}>
                  <i className="fa-solid fa-angle-right"></i> Kids English &amp; Phonics
                </a>
              </li>
              <li>
                <a href="#courses" onClick={() => setActiveCourseFilter("grammar")}>
                  <i className="fa-solid fa-angle-right"></i> Advanced Written &amp; Grammar
                </a>
              </li>
              <li>
                <a href="#mock-test">
                  <i className="fa-solid fa-angle-right"></i> Computer-Delivered Mock Test
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location Info */}
          <div className="footer-col">
            <h4 className="footer-heading">Tangail Campus</h4>
            <ul className="footer-contact-list">
              <li>
                <i className="fa-solid fa-location-dot highlight-red"></i>
                <span>
                  House: 3A# Khan Paradise, Suroj Road, Kumodini Collage Gate, Tangail,
                  Bangladesh - 1900
                </span>
              </li>
              <li>
                <i className="fa-solid fa-phone highlight-red"></i>
                <a href="tel:01790314278">01790-314278</a>
              </li>
              <li>
                <i className="fa-brands fa-whatsapp highlight-green"></i>
                <a
                  href="https://wa.me/8801790314278"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +880 1790-314278
                </a>
              </li>
              <li>
                <i className="fa-solid fa-envelope highlight-red"></i>
                <a href="mailto:ieltslab4@gmail.com">ieltslab4@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>
            &copy; 2026 IELTS LAB (Tangail). All rights reserved. Founded by Sohel
            Rana.
          </p>
          <div className="footer-bottom-links">
            <a href="#home">Privacy Policy</a>
            <span>•</span>
            <a href="#home">Terms of Admission</a>
            <span>•</span>
            <a href="#contact">Campus Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
