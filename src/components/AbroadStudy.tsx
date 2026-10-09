"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

export default function AbroadStudy() {
  const { openModal } = useApp();

  return (
    <section
      className="abroad-study-section section-padding bg-dark text-white"
      id="abroad-study"
    >
      <div className="container">
        <div className="section-header text-center">
          <span className="sub-title sub-title-light">Global Pathways</span>
          <h2 className="section-title text-white">
            Study Abroad &amp; <span className="highlight-red">Visa Consultancy</span>
          </h2>
          <p className="section-desc text-white-dim">
            From preparing your IELTS score to receiving your visa stamp, we navigate
            your entire international education journey with zero hassle.
          </p>
        </div>

        <div className="destinations-grid">
          <div className="dest-card">
            <div className="dest-flag">
              <i className="fa-solid fa-landmark-flag"></i>
            </div>
            <h3>Study in UK</h3>
            <p>
              1-year Master&apos;s degrees, 2-year post-study work visa (PSW), options
              without IELTS with MOI support.
            </p>
            <div className="dest-badge">High Visa Success</div>
          </div>

          <div className="dest-card">
            <div className="dest-flag">
              <i className="fa-solid fa-maple-leaf"></i>
            </div>
            <h3>Study in Canada</h3>
            <p>
              SDS fast-track visa processing, affordable community colleges &amp;
              world-ranked universities, PR pathways.
            </p>
            <div className="dest-badge">SDS Stream</div>
          </div>

          <div className="dest-card">
            <div className="dest-flag">
              <i className="fa-solid fa-earth-oceania"></i>
            </div>
            <h3>Study in Australia</h3>
            <p>
              Top Go8 universities, generous scholarship options, high-demand post-study
              regional visas.
            </p>
            <div className="dest-badge">Scholarships Available</div>
          </div>

          <div className="dest-card">
            <div className="dest-flag">
              <i className="fa-solid fa-flag-usa"></i>
            </div>
            <h3>Study in USA</h3>
            <p>
              STEM designated programs with 3-year OPT, full/partial tuition waivers, top
              global ranking institutions.
            </p>
            <div className="dest-badge">STEM Extension</div>
          </div>

          <div className="dest-card">
            <div className="dest-flag">
              <i className="fa-solid fa-earth-europe"></i>
            </div>
            <h3>Study in Europe</h3>
            <p>
              Tuition-free &amp; low-cost universities in Germany, Sweden, Finland, Hungary,
              and Italy with Schengen access.
            </p>
            <div className="dest-badge">Low Tuition</div>
          </div>

          <div className="dest-card">
            <div className="dest-flag">
              <i className="fa-solid fa-plane-up"></i>
            </div>
            <h3>Malaysia &amp; Asia</h3>
            <p>
              Affordable international degrees, UK/Australian twin programs, fast
              approval processing.
            </p>
            <div className="dest-badge">Budget Friendly</div>
          </div>
        </div>

        <div className="abroad-cta-box">
          <div className="cta-text">
            <h3>Need Guidance on University Selection &amp; Scholarships?</h3>
            <p>Talk to our experienced abroad education advisors right here in Tangail.</p>
          </div>
          <button
            onClick={() => openModal("Study Abroad Consultancy")}
            className="btn btn-primary btn-lg open-consultancy-modal"
          >
            <i className="fa-solid fa-passport"></i> Book Free Visa Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
