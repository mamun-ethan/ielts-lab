import React from "react";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <div className="top-bar-left">
          <span className="info-item">
            <i className="fa-solid fa-location-dot"></i>
            <span>Kumodini College Gate, Tangail</span>
          </span>
          <span className="info-item">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:01790314278">01790-314278</a>
          </span>
          <span className="info-item desktop-only">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:ieltslab4@gmail.com">ieltslab4@gmail.com</a>
          </span>
        </div>
        <div className="top-bar-right">
          <span className="top-badge">
            <i className="fa-solid fa-graduation-cap"></i> New Batch Admissions Open!
          </span>
          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=61577687096983"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook Page"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.facebook.com/messages/t/61577687096983/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook Messenger"
            >
              <i className="fa-brands fa-facebook-messenger"></i>
            </a>
            <a
              href="https://wa.me/8801790314278"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Chat"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
