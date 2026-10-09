import React from "react";

const reviews = [
  {
    stars: 5,
    text: '"The best IELTS coaching center in Tangail without any doubt. The teachers give continuous feedback on writing tasks and arrange speaking test sessions like the real exam."',
    initials: "FA",
    name: "Farhan Ahmed",
    batch: "IELTS Academic Batch • Band 7.5",
  },
  {
    stars: 5,
    text: '"I enrolled my 9-year-old son in the Kids English batch. His pronunciation, vocabulary, and eagerness to speak English at school improved drastically within 2 months!"',
    initials: "RB",
    name: "Rehana Begum",
    batch: "Parent of Kids Spoken Student",
  },
  {
    stars: 5,
    text: '"I was terrified of speaking English in public. The Spoken English fluency drills and debate sessions at IELTS LAB removed all my shyness. Excellent environment."',
    initials: "SK",
    name: "Sabbir Khan",
    batch: "Spoken English Batch",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="sub-title">Student Feedback</span>
          <h2 className="section-title">
            What Our Students <span className="highlight-red">Say About Us</span>
          </h2>
          <p className="section-desc">
            Real stories from students who transformed their English fluency and
            achieved their study abroad goals.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div className="review-card" key={idx}>
              <div className="review-stars">
                {Array.from({ length: rev.stars }).map((_, sIdx) => (
                  <i className="fa-solid fa-star" key={sIdx}></i>
                ))}
              </div>
              <p className="review-text">{rev.text}</p>
              <div className="reviewer-meta">
                <div className="reviewer-avatar">{rev.initials}</div>
                <div>
                  <h5>{rev.name}</h5>
                  <span>{rev.batch}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
