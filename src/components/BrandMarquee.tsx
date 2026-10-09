import React from "react";

const brands = [
  { icon: "fa-solid fa-building-columns", name: "British Council IELTS" },
  { icon: "fa-solid fa-globe", name: "IDP IELTS Australia" },
  { icon: "fa-solid fa-book-bookmark", name: "Cambridge Assessment English" },
  { icon: "fa-solid fa-award", name: "Pearson PTE Academic" },
  { icon: "fa-solid fa-feather-pointed", name: "Oxford University Press" },
  { icon: "fa-solid fa-graduation-cap", name: "Duolingo English Test" },
  { icon: "fa-solid fa-passport", name: "UK VI / SDS Canada Support" },
  { icon: "fa-solid fa-earth-americas", name: "USA / Australia Placement" },
];

export default function BrandMarquee() {
  return (
    <section className="brand-marquee-section">
      <div className="marquee-title-wrap">
        <span className="marquee-label">
          Recognized &amp; Trusted Examination Standards
        </span>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* Set 1 */}
          {brands.map((b, idx) => (
            <div className="marquee-item" key={`b1-${idx}`}>
              <div className="brand-chip">
                <i className={b.icon}></i> {b.name}
              </div>
            </div>
          ))}
          {/* Set 2 (Duplicate for infinite seamless scroll) */}
          {brands.map((b, idx) => (
            <div className="marquee-item" key={`b2-${idx}`}>
              <div className="brand-chip">
                <i className={b.icon}></i> {b.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
