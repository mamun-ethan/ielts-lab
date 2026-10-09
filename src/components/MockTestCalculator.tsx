"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";

export default function MockTestCalculator() {
  const { openModal } = useApp();

  const [listening, setListening] = useState(7.5);
  const [reading, setReading] = useState(7.0);
  const [writing, setWriting] = useState(6.5);
  const [speaking, setSpeaking] = useState(7.5);

  // Exact IELTS rounding logic
  const avg = (listening + reading + writing + speaking) / 4;
  const decimalPart = avg % 1;
  const integerPart = Math.floor(avg);
  let finalBand = integerPart;

  if (decimalPart < 0.25) {
    finalBand = integerPart;
  } else if (decimalPart >= 0.25 && decimalPart < 0.75) {
    finalBand = integerPart + 0.5;
  } else {
    finalBand = integerPart + 1.0;
  }

  let statusHtml: React.ReactNode = "";
  let statusColor = "#34d399";

  if (finalBand >= 8.0) {
    statusHtml = (
      <>
        🌟 <strong>C2 Mastery</strong> - Eligible for Oxford, Cambridge &amp; Top Global Scholarships!
      </>
    );
    statusColor = "#fbbf24";
  } else if (finalBand >= 7.5) {
    statusHtml = (
      <>
        ✨ <strong>C1 Proficient</strong> - Direct entry into top UK, Canada, Australia &amp; USA universities.
      </>
    );
    statusColor = "#34d399";
  } else if (finalBand >= 6.5) {
    statusHtml = (
      <>
        🎯 <strong>B2 Competent</strong> - Meets minimum admission criteria for most global programs.
      </>
    );
    statusColor = "#60a5fa";
  } else {
    statusHtml = (
      <>
        📚 <strong>Foundation Needed</strong> - Let our Tangail mentors boost your score to 7.0+!
      </>
    );
    statusColor = "#f87171";
  }

  return (
    <section className="mock-test-section section-padding" id="mock-test">
      <div className="container">
        <div className="mock-test-grid">
          <div className="mock-content">
            <span className="sub-title">Experience the Real Exam Before Test Day</span>
            <h2 className="section-title">
              IELTS <span className="highlight-red">Mock Test Lab</span> &amp; Diagnostic
              System
            </h2>
            <p className="section-desc">
              Don&apos;t sit for the BDT 25,000+ official IELTS exam without testing your
              readiness! IELTS LAB Tangail provides authentic computerized and
              paper-based mock tests with real-time examiner grading.
            </p>

            <div className="mock-features-list">
              <div className="mock-item">
                <div className="mock-icon">
                  <i className="fa-solid fa-headphones"></i>
                </div>
                <div>
                  <h4>High-Definition Listening Audio Lab</h4>
                  <p>
                    Individual wireless headphones and authentic British/Australian accent
                    exam tracks.
                  </p>
                </div>
              </div>

              <div className="mock-item">
                <div className="mock-icon">
                  <i className="fa-solid fa-microphone-lines"></i>
                </div>
                <div>
                  <h4>Face-to-Face 1-on-1 Speaking Test</h4>
                  <p>
                    Recorded interview with detailed feedback on Fluency, Lexical
                    Resource, Grammar &amp; Pronunciation.
                  </p>
                </div>
              </div>

              <div className="mock-item">
                <div className="mock-icon">
                  <i className="fa-solid fa-chart-pie"></i>
                </div>
                <div>
                  <h4>Band Score Analytics &amp; Improvement Blueprint</h4>
                  <p>
                    Detailed performance report pointing out your exact errors with
                    remedial homework.
                  </p>
                </div>
              </div>
            </div>

            <div className="mock-cta">
              <button
                onClick={() => openModal("IELTS Mock Test")}
                className="btn btn-primary btn-lg open-consultancy-modal"
              >
                <i className="fa-solid fa-file-pen"></i> Book Mock Test Slot
              </button>
              <span className="mock-note">
                <i className="fa-solid fa-circle-info"></i> Results delivered within 48 hours
              </span>
            </div>
          </div>

          {/* Interactive Band Score Calculator Card */}
          <div className="calculator-card">
            <div className="calc-header">
              <div className="calc-badge">
                <i className="fa-solid fa-calculator"></i> Interactive Tool
              </div>
              <h3>IELTS Band Score Calculator</h3>
              <p>Estimate your overall band score based on your section scores</p>
            </div>

            <div className="calc-body">
              <div className="calc-slider-group">
                <div className="slider-label-row">
                  <span>
                    <i className="fa-solid fa-headphones"></i> Listening Band
                  </span>
                  <span className="slider-value" id="val-listening">
                    {listening.toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="4.0"
                  max="9.0"
                  step="0.5"
                  value={listening}
                  onChange={(e) => setListening(parseFloat(e.target.value))}
                  id="slider-listening"
                  className="calc-range"
                />
              </div>

              <div className="calc-slider-group">
                <div className="slider-label-row">
                  <span>
                    <i className="fa-solid fa-book-open"></i> Reading Band
                  </span>
                  <span className="slider-value" id="val-reading">
                    {reading.toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="4.0"
                  max="9.0"
                  step="0.5"
                  value={reading}
                  onChange={(e) => setReading(parseFloat(e.target.value))}
                  id="slider-reading"
                  className="calc-range"
                />
              </div>

              <div className="calc-slider-group">
                <div className="slider-label-row">
                  <span>
                    <i className="fa-solid fa-pen-nib"></i> Writing Band
                  </span>
                  <span className="slider-value" id="val-writing">
                    {writing.toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="4.0"
                  max="9.0"
                  step="0.5"
                  value={writing}
                  onChange={(e) => setWriting(parseFloat(e.target.value))}
                  id="slider-writing"
                  className="calc-range"
                />
              </div>

              <div className="calc-slider-group">
                <div className="slider-label-row">
                  <span>
                    <i className="fa-solid fa-comments"></i> Speaking Band
                  </span>
                  <span className="slider-value" id="val-speaking">
                    {speaking.toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="4.0"
                  max="9.0"
                  step="0.5"
                  value={speaking}
                  onChange={(e) => setSpeaking(parseFloat(e.target.value))}
                  id="slider-speaking"
                  className="calc-range"
                />
              </div>

              {/* Result Display */}
              <div className="calc-result-box">
                <div className="result-left">
                  <span className="result-sub">Calculated Overall Band</span>
                  <div className="result-number" id="overall-score">
                    {finalBand.toFixed(1)}
                  </div>
                </div>
                <div className="result-right">
                  <span
                    className="result-status"
                    id="result-status"
                    style={{ color: statusColor }}
                  >
                    {statusHtml}
                  </span>
                  <button
                    onClick={() => openModal("IELTS Masterclass")}
                    className="btn btn-sm btn-consultancy open-consultancy-modal"
                  >
                    Get Roadmap
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
