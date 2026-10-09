"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";

export default function Hero() {
  const { openModal, sendToWhatsApp, showToast } = useApp();
  const [heroName, setHeroName] = useState("");
  const [heroPhone, setHeroPhone] = useState("");
  const [heroCourse, setHeroCourse] = useState("");

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroName || !heroPhone || !heroCourse) return;

    sendToWhatsApp({
      name: heroName,
      phone: heroPhone,
      course: heroCourse,
      note: "Submitted via Website Hero Quick Form",
    });

    setHeroName("");
    setHeroPhone("");
    setHeroCourse("");
    showToast(
      "Thank you! We received your admission request. Redirecting to WhatsApp for instant confirmation...",
      "success"
    );
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span>Tangail&apos;s #1 IELTS &amp; Spoken English Institute</span>
          </div>
          <h1 className="hero-title">
            Achieve Your Dream <span className="highlight-red">IELTS Band 7.5+</span>{" "}
            With Expert Mentorship
          </h1>
          <p className="hero-desc">
            Unlock global academic &amp; career opportunities with Tangail’s most
            trusted language lab. We offer <strong>Academic &amp; General IELTS Training</strong>,{" "}
            <strong>Spoken English</strong>, <strong>Kids English</strong>, full-length{" "}
            <strong>Mock Tests</strong>, and 1-on-1 personalized feedback founded by{" "}
            <strong>Sohel Rana</strong>.
          </p>

          <div className="hero-cta-group">
            <button
              onClick={() => openModal()}
              className="btn btn-primary btn-lg open-consultancy-modal"
            >
              <i className="fa-solid fa-calendar-check"></i> Book Free Assessment
            </button>
            <a href="#courses" className="btn btn-outline btn-lg">
              <i className="fa-solid fa-book-open"></i> Explore Courses
            </a>
          </div>

          {/* Hero Highlights / Trust Points */}
          <div className="hero-trust-grid">
            <div className="trust-item">
              <div className="trust-icon">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <div className="trust-text">
                <strong>Certified Trainers</strong>
                <span>British Council &amp; IDP Aligned</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <div className="trust-text">
                <strong>Modern Audio Lab</strong>
                <span>Real Exam Simulator</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <i className="fa-solid fa-user-shield"></i>
              </div>
              <div className="trust-text">
                <strong>1-on-1 Speaking</strong>
                <span>Personalized Diagnostic</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Media / Card Widget */}
        <div className="hero-media-wrapper">
          <div className="hero-banner-card">
            <div className="banner-image-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-banner.png"
                alt="IELTS LAB Tangail Banner"
                className="hero-banner-img"
              />
              <div className="floating-badge badge-score">
                <span className="badge-num">7.5+</span>
                <span className="badge-lbl">Target Band Score</span>
              </div>
              <div className="floating-badge badge-students">
                <i className="fa-solid fa-users"></i>
                <div>
                  <strong>800+</strong>
                  <span>Successful Students</span>
                </div>
              </div>
            </div>

            {/* Quick Assessment Mini-Form inside hero */}
            <div className="hero-quick-card">
              <div className="quick-card-header">
                <h4>
                  <i className="fa-solid fa-bolt highlight-red"></i> Quick Admission Inquiry
                </h4>
                <p>Get a call back in 15 minutes from our senior counselor</p>
              </div>
              <form id="hero-quick-form" className="quick-form" onSubmit={handleHeroSubmit}>
                <div className="input-group-row">
                  <input
                    type="text"
                    id="hero-name"
                    placeholder="Your Name"
                    value={heroName}
                    onChange={(e) => setHeroName(e.target.value)}
                    required
                  />
                  <input
                    type="tel"
                    id="hero-phone"
                    placeholder="Phone Number (e.g. 017...)"
                    value={heroPhone}
                    onChange={(e) => setHeroPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group-row">
                  <select
                    id="hero-course"
                    value={heroCourse}
                    onChange={(e) => setHeroCourse(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Your Target Course
                    </option>
                    <option value="IELTS Masterclass">
                      IELTS Masterclass (Academic / GT)
                    </option>
                    <option value="Spoken English">
                      Spoken English &amp; Fluency
                    </option>
                    <option value="Kids English">
                      Kids English &amp; Phonics
                    </option>
                    <option value="IELTS Mock Test">
                      IELTS Full Mock Test Series
                    </option>
                    <option value="Abroad Study Consultancy">
                      Study Abroad Guidance
                    </option>
                  </select>
                  <button type="submit" className="btn btn-primary btn-block">
                    <span>Submit</span> <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
