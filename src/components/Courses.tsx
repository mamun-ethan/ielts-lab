"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

interface Course {
  id: string;
  category: string;
  tagClass: string;
  tagText: string;
  rating: string;
  title: string;
  summary: string;
  meta: Array<{ icon: string; label: string; value: string }>;
  pills: string[];
  priceBadge: string;
  priceSub: string;
  courseName: string;
}

const coursesData: Course[] = [
  {
    id: "ielts-course",
    category: "ielts",
    tagClass: "tag-ielts",
    tagText: "IELTS Academic & GT",
    rating: "4.9 (420+ Reviews)",
    title: "IELTS Complete Band 7.5+ Masterclass",
    summary:
      "Comprehensive training covering all 4 modules: Listening, Reading, Writing (Task 1 & 2), and Speaking with Cambridge diagnostic tests.",
    meta: [
      { icon: "fa-regular fa-clock", label: "Duration:", value: "3 Months (36+ Classes)" },
      { icon: "fa-solid fa-laptop-file", label: "Mocks:", value: "10 Full-Length Mock Tests" },
      { icon: "fa-solid fa-user-check", label: "Evaluation:", value: "Unlimited 1-on-1 Speaking" },
    ],
    pills: ["Listening Hacks", "Speed Reading", "Essay Templates", "Speaking Fluency"],
    priceBadge: "Admissions Open",
    priceSub: "Morning / Evening Batches",
    courseName: "IELTS Masterclass",
  },
  {
    id: "spoken-course",
    category: "spoken",
    tagClass: "tag-spoken",
    tagText: "Spoken English",
    rating: "4.8 (290+ Reviews)",
    title: "Executive & Conversational Spoken English",
    summary:
      "Build natural speaking fluency, eliminate stage fright, master correct pronunciation, and express your ideas confidently in any environment.",
    meta: [
      { icon: "fa-regular fa-clock", label: "Duration:", value: "2.5 Months (28+ Classes)" },
      { icon: "fa-solid fa-microphone", label: "Practice:", value: "Daily Speaking Circle" },
      { icon: "fa-solid fa-briefcase", label: "Focus:", value: "Interview & Presentation Skills" },
    ],
    pills: ["Fluency Drills", "Phonetics", "Public Speaking", "Corporate Pitch"],
    priceBadge: "Popular Choice",
    priceSub: "Weekend & Weekday",
    courseName: "Spoken English",
  },
  {
    id: "kids-course",
    category: "kids",
    tagClass: "tag-kids",
    tagText: "Kids English",
    rating: "5.0 (180+ Reviews)",
    title: "Kids English & Phonics Fun Academy",
    summary:
      "Specially designed interactive program for children (Ages 6–14) to learn English naturally through audio-visual games, storytelling, and phonetics.",
    meta: [
      { icon: "fa-regular fa-clock", label: "Duration:", value: "3 Months (24 Activity Classes)" },
      { icon: "fa-solid fa-gamepad", label: "Format:", value: "Playful Multimedia Learning" },
      { icon: "fa-solid fa-shapes", label: "Outcome:", value: "Flawless Accent & Vocabulary" },
    ],
    pills: ["Jolly Phonics", "Picture Talks", "Story Club", "Confidence Lab"],
    priceBadge: "Fun & Engaging",
    priceSub: "Special Friday/Saturday Batches",
    courseName: "Kids English",
  },
  {
    id: "grammar-course",
    category: "grammar",
    tagClass: "tag-grammar",
    tagText: "Written & Grammar",
    rating: "4.9 (150+ Reviews)",
    title: "Advanced Written English & Practical Grammar",
    summary:
      "Transform your writing from broken sentences to error-free, sophisticated academic and professional standard English.",
    meta: [
      { icon: "fa-regular fa-clock", label: "Duration:", value: "2 Months (20 Classes)" },
      { icon: "fa-solid fa-pen", label: "Worksheets:", value: "50+ Real Essay Checks" },
      { icon: "fa-solid fa-spell-check", label: "Focus:", value: "Tenses, Syntax & Cohesion" },
    ],
    pills: ["Sentence Variety", "Academic Words", "Report Writing", "SOP Drafting"],
    priceBadge: "Essential Base",
    priceSub: "All Skill Levels",
    courseName: "Written & Grammar",
  },
];

export default function Courses() {
  const { activeCourseFilter, setActiveCourseFilter, openModal } = useApp();

  const filteredCourses =
    activeCourseFilter === "all"
      ? coursesData
      : coursesData.filter((c) => c.category === activeCourseFilter);

  return (
    <section className="courses-section section-padding bg-light" id="courses">
      <div className="container">
        <div className="section-header text-center">
          <span className="sub-title">Tailored For Your Success</span>
          <h2 className="section-title">
            Our Signature <span className="highlight-red">Programs</span>
          </h2>
          <p className="section-desc">
            Choose from our intensive IELTS masterclasses, spoken English fluency
            courses, or specialized kids academy.
          </p>
        </div>

        {/* Course Filter Tabs */}
        <div className="course-tabs">
          <button
            className={`tab-btn ${activeCourseFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveCourseFilter("all")}
          >
            All Courses
          </button>
          <button
            className={`tab-btn ${activeCourseFilter === "ielts" ? "active" : ""}`}
            onClick={() => setActiveCourseFilter("ielts")}
          >
            IELTS Training
          </button>
          <button
            className={`tab-btn ${activeCourseFilter === "spoken" ? "active" : ""}`}
            onClick={() => setActiveCourseFilter("spoken")}
          >
            Spoken English
          </button>
          <button
            className={`tab-btn ${activeCourseFilter === "kids" ? "active" : ""}`}
            onClick={() => setActiveCourseFilter("kids")}
          >
            Kids English
          </button>
          <button
            className={`tab-btn ${activeCourseFilter === "grammar" ? "active" : ""}`}
            onClick={() => setActiveCourseFilter("grammar")}
          >
            Written &amp; Grammar
          </button>
        </div>

        <div className="courses-grid" id="courses-grid">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="course-card"
              data-category={course.category}
              style={{ display: "flex", animation: "fadeIn 0.4s ease" }}
            >
              <div className="course-banner-top">
                <span className={`course-tag ${course.tagClass}`}>
                  {course.tagText}
                </span>
                <span className="course-rating">
                  <i className="fa-solid fa-star"></i> {course.rating}
                </span>
              </div>
              <div className="course-body">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-summary">{course.summary}</p>

                <div className="course-meta-list">
                  {course.meta.map((m, idx) => (
                    <div className="meta-item" key={idx}>
                      <i className={m.icon}></i> <strong>{m.label}</strong> {m.value}
                    </div>
                  ))}
                </div>

                <div className="course-curriculum-highlights">
                  {course.pills.map((pill, idx) => (
                    <span className="pill" key={idx}>
                      {pill}
                    </span>
                  ))}
                </div>

                <div className="course-footer">
                  <div className="course-pricing">
                    <span className="price-badge">{course.priceBadge}</span>
                    <span className="price-sub">{course.priceSub}</span>
                  </div>
                  <button
                    onClick={() => openModal(course.courseName)}
                    className="btn btn-primary open-consultancy-modal"
                  >
                    Enroll Now <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
