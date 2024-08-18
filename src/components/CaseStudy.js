import React from "react";

const CaseStudy = () => {
  return (
    <section id="case-study" className="section">
      <div className="container">
        {/* First Case Study Content */}
        <div className="case-study-content row">
          <div className="col-md-6 case-study-image">
            <img src="static/img/catering.webp" alt="Momochi Case Study" />
          </div>
          <div className="col-md-6 case-study-text">
            <h3 className="dark-color text-uppercase">
              Momochi UI/UX redesign
            </h3>
            <p className="description">
              <span className="theme-color">Overview</span>
            </p>
            <ul>
              <li>
                <strong>Brand:</strong> Momochi
              </li>
              <li>
                <strong>Industry:</strong> Japanese Desserts
              </li>
              <li>
                <strong>Location:</strong> Helsinki, Finland
              </li>
              <li>
                <strong>Objective:</strong> While placing an order for a party,
                I saw firsthand how Momochi's website could be improved. My goal
                was to dig into these user experience issues through research
                and redesign the site to make online ordering easier and more
                enjoyable, ultimately boosting the business.
              </li>
            </ul>
          </div>
        </div>

        {/* Second Case Study Content */}
        <div className="case-study-content row">
          <div className="col-md-6 case-study-text">
            <p className="description">
              <span className="theme-color">Research</span>
            </p>
            <ul>
              <li>
                <strong>Objective:</strong> Explore the behaviors, needs, and
                pain points of Momochi’s website users to guide the redesign.
              </li>
              <li>
                <strong>Tools Used:</strong> Google Forms
              </li>
              <li>
                <strong>Methods:</strong> <br />
                1. Surveys: Conducted via Google Forms with existing and
                potential customers. <br />
                2. Participants: age 25-35 who frequently shop online.
              </li>
              <li>
                <strong>Key Findings:</strong>
                <br />
                1. Mobile Shopping Habits. All participants preferred mobile
                devices for online shopping, but none had purchased from Momochi
                due to a lack of mobile optimization.
                <br />
                2. Interest in Mobile Ordering. Every participant was interested
                in ordering via mobile and prioritized ease of navigation, clear
                product info, and simple payment methods (Credit/Debit Cards,
                Apple Pay, Google Pay).
                <br />
                3. Current Mobile Experience. Users found product info
                accessible but struggled with ordering due to missing features
                like a product list, direct chat support, and a streamlined
                checkout process.
              </li>
            </ul>
          </div>
          <div className="col-md-6 case-study-image">
            <img
              src="static/img/research.png"
              alt="Additional Case Study Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
