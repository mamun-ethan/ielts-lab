import React from "react";

export default function Features() {
  return (
    <section className="features-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="sub-title">Why Tangail Chooses Us</span>
          <h2 className="section-title">
            The IELTS <span className="highlight-red">LAB</span> Advantage
          </h2>
          <p className="section-desc">
            We combine pedagogical excellence with individualized attention to ensure
            every student hits their score target.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon icon-red">
              <i className="fa-solid fa-chalkboard-user"></i>
            </div>
            <h3>Certified IELTS Mentors</h3>
            <p>
              Learn directly from high-band scoring trainers certified by British Council
              and IDP with proven track records.
            </p>
            <ul className="feature-list">
              <li>
                <i className="fa-solid fa-check"></i> Founder-led curriculum by Sohel Rana
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Practical exam hacks &amp; scoring secrets
              </li>
            </ul>
          </div>

          <div className="feature-card highlighted-card">
            <div className="card-badge">Most Popular</div>
            <div className="feature-icon icon-blue">
              <i className="fa-solid fa-headset"></i>
            </div>
            <h3>Dedicated Speaking &amp; Audio Lab</h3>
            <p>
              Overcome hesitation with daily 1-on-1 live speaking interviews, feedback
              rubrics, and modern listening booths.
            </p>
            <ul className="feature-list">
              <li>
                <i className="fa-solid fa-check"></i> Exact exam room simulation
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Instant pronunciation correction
              </li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon icon-green">
              <i className="fa-solid fa-file-signature"></i>
            </div>
            <h3>Authentic Cambridge Mocks</h3>
            <p>
              Weekly full-length diagnostic mock tests using original Cambridge materials
              with in-depth evaluation reports.
            </p>
            <ul className="feature-list">
              <li>
                <i className="fa-solid fa-check"></i> Paper &amp; Computer-based mocks
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Band score progress tracker
              </li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon icon-purple">
              <i className="fa-solid fa-users-rectangle"></i>
            </div>
            <h3>Small Batch &amp; Personal Care</h3>
            <p>
              We restrict class size to ensure personal guidance for every student,
              specially focused on weak areas.
            </p>
            <ul className="feature-list">
              <li>
                <i className="fa-solid fa-check"></i> Max 15 students per batch
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Extra doubt-clearing clinics
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
