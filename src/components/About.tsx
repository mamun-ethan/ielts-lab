import React from "react";

export default function About() {
  return (
    <section className="about-section section-padding bg-light" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-media">
            <div className="about-image-stack">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-banner.png"
                alt="IELTS LAB Tangail Facilities"
                className="about-main-img"
              />
              <div className="experience-card">
                <div className="exp-icon">
                  <i className="fa-solid fa-award"></i>
                </div>
                <div className="exp-info">
                  <strong>#1 IELTS Lab</strong>
                  <span>In Tangail District</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="sub-title">About IELTS LAB Tangail</span>
            <h2 className="section-title">
              Making English Learning &amp; High Band Scores{" "}
              <span className="highlight-red">Easy &amp; Accessible</span>
            </h2>

            <p className="about-p">
              Founded by <strong>Sohel Rana</strong> with the motto{" "}
              <em>&quot;IELTS lab Makes life Easy&quot;</em>, our academy was built to
              eliminate the need for Tangail students to commute to Dhaka for
              high-quality language training.
            </p>
            <p className="about-p">
              Located conveniently at{" "}
              <strong>Kumodini College Gate (Khan Paradise, Suroj Road)</strong>, we
              offer an air-conditioned modern multimedia lab, authentic British Council
              &amp; IDP aligned mock exam infrastructure, and warm, personalized
              mentorship.
            </p>

            <div className="about-pillars">
              <div className="pillar-box">
                <i className="fa-solid fa-bullseye highlight-red"></i>
                <div>
                  <h4>Our Mission</h4>
                  <p>
                    To empower every student, jobholder, and child in Tangail with
                    fearless English fluency and guaranteed IELTS bands.
                  </p>
                </div>
              </div>
              <div className="pillar-box">
                <i className="fa-solid fa-compass highlight-blue"></i>
                <div>
                  <h4>Our Vision</h4>
                  <p>
                    To be the premier gateway for higher education abroad, visa
                    mentorship, and international career readiness in the region.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-action">
              <a href="#contact" className="btn btn-primary">
                <i className="fa-solid fa-location-dot"></i> Visit Our Tangail Campus
              </a>
              <a href="tel:01790314278" className="btn btn-outline">
                <i className="fa-solid fa-phone"></i> Call: 01790-314278
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
