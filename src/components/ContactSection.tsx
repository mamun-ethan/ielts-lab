import React from "react";

export default function ContactSection() {
  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="section-header text-center">
          <span className="sub-title">Get In Touch</span>
          <h2 className="section-title">
            Visit Our <span className="highlight-red">Tangail Campus</span>
          </h2>
          <p className="section-desc">
            Have questions or want to tour our multimedia lab? We are always here to
            welcome you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-cards">
            <div className="contact-card">
              <div className="contact-icon icon-red">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-card-body">
                <h4>Academy Address</h4>
                <p>
                  House: 3A# Khan Paradise, Suroj Road, Kumodini Collage Gate, Tangail,
                  Bangladesh, 1900
                </p>
                <a
                  href="https://maps.google.com/?q=Kumodini+College+Gate+Tangail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Open in Google Maps{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon icon-blue">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-card-body">
                <h4>Direct Contact &amp; Hotlines</h4>
                <p>
                  Mobile:{" "}
                  <a href="tel:01790314278">
                    <strong>01790-314278</strong>
                  </a>
                </p>
                <p>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/8801790314278"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>+880 1790-314278</strong>
                  </a>
                </p>
                <span className="status-indicator">
                  <span className="dot"></span> Available 9:00 AM - 9:00 PM
                </span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon icon-green">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-card-body">
                <h4>Email &amp; Online Support</h4>
                <p>
                  Official Email:{" "}
                  <a href="mailto:ieltslab4@gmail.com">ieltslab4@gmail.com</a>
                </p>
                <p>
                  Facebook Page:{" "}
                  <a
                    href="https://www.facebook.com/profile.php?id=61577687096983"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IELTS LAB Official
                  </a>
                </p>
                <p>
                  Messenger:{" "}
                  <a
                    href="https://www.facebook.com/messages/t/61577687096983/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on Messenger
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon icon-purple">
                <i className="fa-solid fa-door-open"></i>
              </div>
              <div className="contact-card-body">
                <h4>Office Hours</h4>
                <p>Saturday – Thursday: 9:00 AM – 8:30 PM</p>
                <p>Friday: 9:00 AM – 7:00 PM (Mock Test Sessions)</p>
                <span className="badge-open">Open 7 Days a Week</span>
              </div>
            </div>
          </div>

          {/* Location Interactive Card / Map Embed Preview */}
          <div className="map-card-wrapper">
            <div className="map-header">
              <div>
                <h3>
                  <i className="fa-solid fa-map-location-dot highlight-red"></i>{" "}
                  Tangail Campus Location
                </h3>
                <p>Located right at Kumodini College Gate for easy commute</p>
              </div>
              <a
                href="https://wa.me/8801790314278?text=Hello%20IELTS%20LAB,%20I%20want%20to%20visit%20your%20campus"
                className="btn btn-sm btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
              </a>
            </div>

            <div className="map-frame-box">
              <iframe
                src="https://maps.google.com/maps?q=Kumudini+Govt.+College,+Tangail,+Bangladesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IELTS LAB Tangail Map Location"
              ></iframe>
            </div>

            <div className="map-footer-bar">
              <div className="landmark-tag">
                <i className="fa-solid fa-building"></i> Landmark: Kumodini College Main
                Gate / Khan Paradise 3A#
              </div>
              <a href="tel:01790314278" className="btn btn-sm btn-primary">
                <i className="fa-solid fa-phone"></i> Call For Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
