"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";

export default function ConsultancySection() {
  const { sendToWhatsApp, showToast } = useApp();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [target, setTarget] = useState("Band 7.5+");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !program) return;

    sendToWhatsApp({
      name,
      phone,
      email,
      course: `${program} (${target})`,
      note: message || "Free Consultation Booking",
    });

    setName("");
    setPhone("");
    setEmail("");
    setProgram("");
    setMessage("");

    showToast(
      "Booking request submitted! Our Tangail counselor will reach out shortly.",
      "success"
    );
  };

  return (
    <section
      className="consultancy-section section-padding bg-gradient-cta"
      id="free-consultancy"
    >
      <div className="container">
        <div className="consultancy-grid">
          <div className="consultancy-info text-white">
            <span className="sub-title sub-title-white">Take The First Step</span>
            <h2 className="section-title text-white">
              Book Your <span className="highlight-yellow">Free 1-on-1</span> Band
              Assessment &amp; Demo Class
            </h2>
            <p className="text-white-dim">
              Visit our Tangail center or schedule an online session. Our certified
              mentors will evaluate your current English level, identify your weak
              points, and design a customized roadmap to your target band score.
            </p>

            <div className="consultancy-perks">
              <div className="perk-item">
                <i className="fa-solid fa-check-circle"></i>
                <span>Free English Level Diagnostic Test (Speaking &amp; Grammar)</span>
              </div>
              <div className="perk-item">
                <i className="fa-solid fa-check-circle"></i>
                <span>Personalized Score Target &amp; Timeline Blueprint</span>
              </div>
              <div className="perk-item">
                <i className="fa-solid fa-check-circle"></i>
                <span>Free Sample Cambridge Study Materials &amp; Vocabulary Sheet</span>
              </div>
              <div className="perk-item">
                <i className="fa-solid fa-check-circle"></i>
                <span>100% Free Consultation with No Hidden Obligations</span>
              </div>
            </div>

            <div className="quick-call-box">
              <div className="call-icon">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div>
                <span>Call Us Directly For Immediate Booking:</span>
                <a href="tel:01790314278" className="call-number">
                  01790-314278
                </a>
              </div>
            </div>
          </div>

          {/* Main Booking Form */}
          <div className="consultancy-form-box">
            <div className="form-header">
              <h3>Free Consultation Form</h3>
              <p>Fill out the details below and we will contact you immediately</p>
            </div>

            <form
              id="main-consultancy-form"
              className="main-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="consult-name">
                  <i className="fa-solid fa-user"></i> Full Name *
                </label>
                <input
                  type="text"
                  id="consult-name"
                  placeholder="e.g. Tanvir Ahmed"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="consult-phone">
                    <i className="fa-solid fa-phone"></i> Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="consult-phone"
                    placeholder="01790314278"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="consult-email">
                    <i className="fa-solid fa-envelope"></i> Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="consult-email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="consult-program">
                    <i className="fa-solid fa-graduation-cap"></i> Interested Program *
                  </label>
                  <select
                    id="consult-program"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Program
                    </option>
                    <option value="IELTS Masterclass (Academic)">
                      IELTS Academic Masterclass
                    </option>
                    <option value="IELTS Masterclass (General)">
                      IELTS General Training
                    </option>
                    <option value="Spoken English Mastery">
                      Spoken English &amp; Fluency
                    </option>
                    <option value="Kids English Academy">
                      Kids English &amp; Phonics
                    </option>
                    <option value="IELTS Full Mock Test">
                      IELTS Mock Test Series
                    </option>
                    <option value="Abroad Study Guidance">
                      Study Abroad &amp; Visa Help
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="consult-target">
                    <i className="fa-solid fa-bullseye"></i> Target Band Score
                  </label>
                  <select
                    id="consult-target"
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                  >
                    <option value="Band 7.5+">Band 7.5 or Above</option>
                    <option value="Band 7.0">Band 7.0</option>
                    <option value="Band 6.5">Band 6.5</option>
                    <option value="Fluency Only">Basic Fluency / Spoken</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="consult-message">
                  <i className="fa-solid fa-comment-dots"></i> Message or Questions
                </label>
                <textarea
                  id="consult-message"
                  rows={3}
                  placeholder="Tell us about your background or convenient call time..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
                id="submit-consult-btn"
              >
                <i className="fa-solid fa-paper-plane"></i> Book My Free Consultancy
              </button>

              <p className="form-privacy-note">
                <i className="fa-solid fa-shield-halved"></i> Your information is safe
                with us. We reply via Phone or WhatsApp within 15 minutes.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
