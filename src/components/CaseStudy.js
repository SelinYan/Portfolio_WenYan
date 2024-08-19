import React from "react";

const CaseStudy = () => {
  return (
    <section id="case-study" className="section">
      <div className="container">
        {/* First Case Study Content */}
        <div className="section-title">
          <h3 className="dark-color text-uppercase">Case Study</h3>
          <p className="text-uppercase small">
            A UI/UX designer based in Finland
          </p>
        </div>

        <div className="case-study-content row">
          <div className="col-md-6 case-study-image">
            <div className="image-wrapper">
              <img
                src="static/img/catering.webp"
                alt="Momochi Case Study"
                style={{ maxHeight: 360, width: "100% ", objectFit: "cover" }}
              />
            </div>
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
                <strong>Methods:</strong>
                <br />
                <span className="theme-color">1. Surveys</span>: conducted via
                Google Forms with existing and potential customers.
                <br />
                <span className="theme-color">2. Participants</span>: age 25-35
                who frequently shop online.
              </li>
              <li>
                <strong>Key Findings:</strong>
                <br />
                <span className="theme-color">1. Mobile Shopping Habits</span>:
                all participants preferred mobile devices for online shopping,
                but none had purchased from Momochi due to a lack of mobile
                optimization.
                <br />
                <span className="theme-color">
                  2. Interest in Mobile Ordering
                </span>
                : every participant was interested in ordering via mobile and
                prioritized ease of navigation, clear product info, and simple
                payment methods (Credit/Debit Cards, Apple Pay, Google Pay).
                <br />
                <span className="theme-color">
                  3. Current Mobile Experience
                </span>
                : users found product info accessible but struggled with
                ordering due to missing features like a product list, direct
                chat support, and a streamlined checkout process.
              </li>
            </ul>
          </div>
          <div
            className="col-md-6 d-flex flex-column justify-content-between align-items-center"
            style={{ height: "100%" }}>
            <div className="image-wrapper">
              <img
                src="static/img/111.png"
                alt="Additional Case Study Image"
                style={{
                  maxHeight: 400,
                  width: "70%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="image-wrapper">
              <img
                src="static/img/110.png"
                alt="Additional Case Study Image"
                style={{
                  maxHeight: 400,
                  width: "70%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>

        {/* Third Case Study Content */}
        <div className="case-study-content row">
          <div className="col-md-6 case-study-image">
            <div className="image-wrapper">
              <img
                src="static/img/momochi_wall.jpg"
                alt="Momochi Case Study"
                style={{ maxHeight: 300, width: "100% ", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-md-6 case-study-text">
            <p className="description">
              <span className="theme-color">Measuring Success</span>
            </p>
            <ul>
              <li>
                <strong>Objective:</strong> Define metrics to gauge the
                redesign’s effectiveness.
              </li>
              <li>
                <strong>Success Metrics:</strong>
                <br />
                <span className="theme-color">1. Increased Mobile Orders</span>:
                track the volume of mobile orders post-redesign.
                <br />
                <span className="theme-color">2. User Satisfaction</span>:
                gather feedback through post-launch surveys.
                <br />
                <span className="theme-color">3. Navigation Efficiency</span>:
                monitor metrics like time-on-task and drop-off rates.
                <br />
                <span className="theme-color">4. Mobile Traffic Growth</span>:
                analyze increases in mobile user engagement and site access.
              </li>
            </ul>
          </div>
        </div>

        {/* Fourth Case Study Content */}
        <div className="case-study-content row">
          <div className="col-md-6 case-study-text">
            <p className="description">
              <span className="theme-color">Strategy</span>
            </p>
            <ul>
              <li>
                <strong>Objective:</strong> Develop a plan to address user needs
                and meet business goals.
              </li>
              <li>
                <strong>Key Strategies:</strong>
                <br />
                <span className="theme-color">1. Mobile-First Design</span>:
                ensure all redesign aspects prioritize mobile usability.
                <br />
                <span className="theme-color">2. Simplify Navigation</span>:
                design an intuitive navigation structure for small screens.
                <br />
                <span className="theme-color">
                  3. Enhance Product Information
                </span>
                : make product details easily accessible and visually appealing
                on mobile devices.
                <br />
                <span className="theme-color">4. Integrate Key Features</span>:
                add a product list and an improved checkout process.
              </li>
            </ul>
          </div>
          <div className="col-md-6 case-study-image">
            <div className="image-wrapper">
              <img
                src="static/img/phone.png"
                alt="Additional Case Study Image"
                style={{ maxHeight: 500, width: "100% ", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Fifth Case Study Content */}
        <div className="case-study-content row">
          <div className="col-md-6 case-study-image">
            <div className="image-wrapper">
              <img
                src="static/img/phone1.png"
                alt="Momochi Case Study"
                style={{
                  maxHeight: 460,
                  width: "70%",
                  objectFit: "cover",
                }}
              />
              {/* may need to change to wireframe image*/}
            </div>
          </div>
          <div className="col-md-6 case-study-text">
            <p className="description">
              <span className="theme-color">Solution</span>
            </p>
            <ul>
              <li>
                <strong>Objective:</strong> Implement design solutions based on
                research findings.
              </li>
              <li>
                <strong>Design Process:</strong>
                <br />
                <span className="theme-color">1. Wireframes</span>: created
                mobile-first wireframes focusing on simplicity.
                <br />
                <span className="theme-color">2. Prototypes</span>: developed
                interactive prototypes to visualize the new ordering process.
                <br />
                <span className="theme-color">3. User Flows</span>: crafted
                seamless flows from product selection to checkout.
                <br />
                <span className="theme-color">4. Tools</span>: Figma.
              </li>
              <li>
                <strong>Usability Testing:</strong>
                <br />
                <span className="theme-color">1. Participants</span>: same
                participants in user research.
                <br />
                <span className="theme-color">2. Outcomes</span>: Users reported
                an improved experience with better navigation, clearer product
                info, and a more intuitive checkout process.
              </li>
            </ul>
          </div>
        </div>

        {/* Sixth Case Study Content */}
        <div className="case-study-content row">
          <div className="col-md-6 case-study-text">
            <p className="description">
              <span className="theme-color">Impact</span>
            </p>
            <ul>
              <li>
                <strong>Objective:</strong> Assess the redesign’s effect on
                Momochi’s business.
              </li>
              <li>
                <strong>Results:</strong>
                <span className="theme-color">
                  <br />
                  1. Increased Engagement
                </span>
                : higher user engagement and an increase in interest in online
                orders.
                <br />
                <span className="theme-color">2. Enhanced User Experience</span>
                : positive feedback highlighted improved user satisfaction.
                <br />
                <span className="theme-color">3. Business Growth</span>: the
                redesigned mobile site would become a preferred platform,
                supporting overall business growth.
              </li>
            </ul>
          </div>
          <div className="col-md-6 case-study-image">
            <div className="image-wrapper">
              <img
                src="static/img/donut.webp"
                alt="Additional Case Study Image"
                style={{ maxHeight: 360, width: "100% ", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Seventh Case Study Content */}
        <div className="case-study-content row">
          <div className="col-md-6 case-study-image">
            <div className="image-wrapper">
              <img
                src="static/img/donut.png"
                alt="Momochi Case Study"
                style={{ maxHeight: 400, width: "100% ", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-md-6 case-study-text">
            <p className="description">
              <span className="theme-color">Reflection & Thank You</span>
            </p>
            <ul>
              <li>
                <strong>Learnings:</strong>
              </li>
              <li>
                <span className="theme-color">1. Mobile Optimization</span>:
                reinforced the importance of a mobile-first approach.
              </li>
              <li>
                <span className="theme-color">2. User-Centered Design</span>:
                focusing on user needs resulted in a design that aligned well
                with business goals.
              </li>
              <li>
                <span className="theme-color">3. Continuous Improvement</span>:
                Iterative testing and feedback were crucial for refining the
                design.
              </li>
              <br />
              <li>
                <span className="theme-color">Thank you</span> for reviewing
                this case study. Contributing to Momochi’s growth through a
                user-focused redesign has been a rewarding experience. For any
                questions or further discussion, please feel free to reach out.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
