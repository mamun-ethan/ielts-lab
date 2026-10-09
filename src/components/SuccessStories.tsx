import React from "react";

interface Story {
  name: string;
  target: string;
  band: string;
  isGold?: boolean;
  quote: string;
  scores: { L: string; R: string; W: string; S: string };
}

const stories: Story[] = [
  {
    name: "Md. Tanvir Hossain",
    target: "Admitted: Univ. of Manchester, UK",
    band: "Band 8.0",
    isGold: true,
    quote:
      '"Before joining IELTS LAB, my speaking score was stuck at 6.0. Sohel Sir\'s 1-on-1 speaking diagnostics and strategy sessions helped me jump to an overall 8.0!"',
    scores: { L: "8.5", R: "8.5", W: "7.0", S: "7.5" },
  },
  {
    name: "Nusrat Jahan Sneha",
    target: "Admitted: Univ. of Windsor, Canada",
    band: "Band 7.5",
    quote:
      '"The listening lab and weekly Cambridge mock tests gave me the exact confidence I needed. The environment is friendly, peaceful, and super focused."',
    scores: { L: "8.0", R: "7.5", W: "7.0", S: "7.5" },
  },
  {
    name: "Mehedi Hasan Rony",
    target: "Admitted: Deakin University, Australia",
    band: "Band 7.5",
    quote:
      '"I took both Spoken English and IELTS course at IELTS LAB Tangail. The writing correction methods are unmatched. Highly recommended to everyone in Tangail!"',
    scores: { L: "8.0", R: "7.0", W: "7.5", S: "7.5" },
  },
  {
    name: "Sadia Rahman",
    target: "Admitted: Monash University, Australia",
    band: "Band 8.5",
    isGold: true,
    quote:
      '"Scoring 8.5 in Listening and 9.0 in Reading felt impossible until I learned the time-management tactics from IELTS LAB. Thank you team!"',
    scores: { L: "8.5", R: "9.0", W: "7.5", S: "8.0" },
  },
  {
    name: "Arafat Islam",
    target: "General Training: Canada PR Applicant",
    band: "Band 7.5 (CLB 9)",
    quote:
      '"Needed CLB 9 for Canada Express Entry. IELTS LAB\'s weekend executive batch made it possible without compromising my office hours."',
    scores: { L: "8.5", R: "7.5", W: "7.0", S: "7.5" },
  },
];

export default function SuccessStories() {
  return (
    <section className="success-stories-section section-padding" id="success-stories">
      <div className="container">
        <div className="section-header text-center">
          <span className="sub-title">Tangail&apos;s Pride</span>
          <h2 className="section-title">
            Our High-Scoring <span className="highlight-red">Success Stories</span>
          </h2>
          <p className="section-desc">
            Over 800+ students from Tangail and surrounding districts achieved their
            target band score with IELTS LAB.
          </p>
        </div>
      </div>

      {/* Infinite Continuous Moving Story Cards */}
      <div className="story-marquee-wrapper">
        <div className="story-marquee-track">
          {/* First set */}
          {stories.map((story, idx) => (
            <div className="story-card" key={`s1-${idx}`}>
              <div className="story-header">
                <div className="student-avatar">
                  <i className="fa-solid fa-user-graduate"></i>
                </div>
                <div>
                  <h4 className="student-name">{story.name}</h4>
                  <p className="student-target">{story.target}</p>
                </div>
                <div className={`band-tag ${story.isGold ? "band-gold" : ""}`}>
                  {story.band}
                </div>
              </div>
              <p className="student-quote">{story.quote}</p>
              <div className="score-breakdown">
                <span>L: {story.scores.L}</span>
                <span>R: {story.scores.R}</span>
                <span>W: {story.scores.W}</span>
                <span>S: {story.scores.S}</span>
              </div>
            </div>
          ))}

          {/* Duplicate set for infinite loop */}
          {stories.map((story, idx) => (
            <div className="story-card" key={`s2-${idx}`}>
              <div className="story-header">
                <div className="student-avatar">
                  <i className="fa-solid fa-user-graduate"></i>
                </div>
                <div>
                  <h4 className="student-name">{story.name}</h4>
                  <p className="student-target">{story.target}</p>
                </div>
                <div className={`band-tag ${story.isGold ? "band-gold" : ""}`}>
                  {story.band}
                </div>
              </div>
              <p className="student-quote">{story.quote}</p>
              <div className="score-breakdown">
                <span>L: {story.scores.L}</span>
                <span>R: {story.scores.R}</span>
                <span>W: {story.scores.W}</span>
                <span>S: {story.scores.S}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
