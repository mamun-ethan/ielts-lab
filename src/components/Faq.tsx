"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FaqItem[] = [
  {
    question: "Which IELTS course should I join (Academic or General)?",
    answer: (
      <p>
        If you are planning to study for an undergraduate or postgraduate degree
        abroad, you must take <strong>IELTS Academic</strong>. If you are migrating for
        work, PR (such as Canada Express Entry or Australia Skilled Migration), you
        need <strong>IELTS General Training</strong>. At IELTS LAB, we provide targeted
        training for both streams.
      </p>
    ),
  },
  {
    question: "Can I take Mock Tests without enrolling in a full course?",
    answer: (
      <p>
        Yes! We offer standalone Mock Test Packages (Single Mocks, 5-Pack, and
        10-Pack) which include full listening, reading, writing checks with detailed
        band descriptors, and 1-on-1 speaking interview sessions with certified
        trainers.
      </p>
    ),
  },
  {
    question: "What are the class timings and batch options?",
    answer: (
      <p>
        We have flexible morning batches (9:30 AM - 11:30 AM), afternoon batches (3:00
        PM - 5:00 PM), and special evening &amp; weekend batches (Friday/Saturday)
        tailored for university students and jobholders.
      </p>
    ),
  },
  {
    question: "I have very weak English grammar. Can I still score 7.0+?",
    answer: (
      <p>
        Absolutely. We provide dedicated foundation grammar and sentence
        construction workshops alongside the main course to solidify your basics
        before moving to advanced IELTS techniques.
      </p>
    ),
  },
  {
    question: "Do you assist with Study Abroad University applications?",
    answer: (
      <p>
        Yes! We offer complete end-to-end guidance including university selection,
        scholarship hunting, Statement of Purpose (SOP) editing, and visa interview
        preparation for UK, Canada, Australia, USA, and European destinations.
      </p>
    ),
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-padding bg-light">
      <div className="container">
        <div className="section-header text-center">
          <span className="sub-title">Got Questions?</span>
          <h2 className="section-title">
            Frequently Asked <span className="highlight-red">Questions</span>
          </h2>
          <p className="section-desc">
            Find quick answers to common queries regarding courses, batches, mock
            tests, and admissions.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                className={`faq-accordion-item ${isActive ? "active" : ""}`}
                key={idx}
              >
                <button
                  className="faq-question"
                  aria-expanded={isActive}
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.question}</span>
                  <i
                    className={`fa-solid ${
                      isActive ? "fa-minus" : "fa-plus"
                    } faq-toggle-icon`}
                  ></i>
                </button>
                <div
                  className="faq-answer"
                  style={{
                    maxHeight: isActive ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
