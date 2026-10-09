"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";

export default function ConsultancyModal() {
  const { isModalOpen, modalCourse, closeModal, sendToWhatsApp, showToast } =
    useApp();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(modalCourse);
  const [time, setTime] = useState("Morning Batch");

  useEffect(() => {
    if (modalCourse) {
      setCourse(modalCourse);
    }
  }, [modalCourse]);

  if (!isModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    closeModal();
    sendToWhatsApp({
      name,
      phone,
      course: `${course} - Preferred Time: ${time}`,
      note: "Free Demo Class Booking",
    });

    setName("");
    setPhone("");
    showToast(
      "Free Demo Class booked successfully! Contacting you on WhatsApp...",
      "success"
    );
  };

  return (
    <div
      className={`modal-overlay ${isModalOpen ? "active" : ""}`}
      id="consultancy-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="modal-dialog">
        <button
          className="modal-close"
          id="modal-close-btn"
          onClick={closeModal}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="modal-header">
          <div className="modal-badge">
            <i className="fa-solid fa-gift"></i> 100% Free Session
          </div>
          <h3>Book Free Assessment &amp; Demo Class</h3>
          <p>Take the first step toward your IELTS 7.5+ band target in Tangail</p>
        </div>
        <form
          id="modal-consultancy-form"
          className="modal-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="modal-name">Your Full Name *</label>
            <input
              type="text"
              id="modal-name"
              placeholder="e.g. Shakil Ahmed"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="modal-phone">Phone / WhatsApp Number *</label>
            <input
              type="tel"
              id="modal-phone"
              placeholder="01790314278"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="modal-course">Course of Interest *</label>
            <select
              id="modal-course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            >
              <option value="IELTS Masterclass (Academic)">
                IELTS Masterclass (Academic)
              </option>
              <option value="IELTS Masterclass (General)">
                IELTS Masterclass (General)
              </option>
              <option value="Spoken English Mastery">Spoken English Mastery</option>
              <option value="Kids English & Phonics">Kids English &amp; Phonics</option>
              <option value="IELTS Mock Test Series">IELTS Mock Test Series</option>
              <option value="Study Abroad Consultancy">
                Study Abroad Consultancy
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="modal-time">Preferred Batch Time</label>
            <select
              id="modal-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="Morning Batch">Morning Batch (9:30 AM)</option>
              <option value="Afternoon Batch">Afternoon Batch (3:00 PM)</option>
              <option value="Evening Batch">Evening Batch (6:00 PM)</option>
              <option value="Weekend Batch (Fri/Sat)">
                Weekend Batch (Fri/Sat)
              </option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-block btn-lg">
            <i className="fa-solid fa-check-circle"></i> Confirm Free Booking
          </button>
        </form>
      </div>
    </div>
  );
}
