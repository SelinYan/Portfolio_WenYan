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
                src="static/img/phone1.png"
                alt="Momochi UX Redesign Mockup"
                style={{ maxHeight: 300, width: "100% ", objectFit: "cover" }}
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
                was to dig into these user experience issues through research,
                define users' goals and needs, and build design solutions based
                on evidence, ultimately boosting the business.
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
                <strong>Objective:</strong> Explore the online shopping habits,
                needs, motivation and pain points of current and potential
                Momochi users to guide the redesign.
              </li>
              <li>
                <strong>Tools Used:</strong> Instagram, Google Forms, Microsoft
                Word, Teams. Will also conduct a follow-up survey after the
                first iteration of the design.
              </li>
              <li>
                <strong>Methods: </strong>
                <br />
                <span className="theme-color">1. Define Target User</span>:
                Identify participants who are current or potential Momochi
                users, aged 25-44, who shop online and follow Momochi on
                Instagram. <br />
                <span className="theme-color">
                  2. Start with a brief using Microsoft Word
                </span>
                : Identify research goal, research questions, and research
                methods. <br />
                <span className="theme-color">3. Surveys</span>: Conducted
                surveys via Google Forms.
                <br />
                <span className="theme-color">4. Interviews</span>: Conducted
                user interviews with video calls via Teams.
              </li>
              <li>
                <strong>Key Findings:</strong>
                <br />
                <span className="theme-color">1. Mobile Shopping Habits</span>:
                All participants preferred mobile devices for online shopping,
                but none had purchased from Momochi's website due to a lack of
                mobile optimization and online ordering or catering service.
                After analyzing the user research and creating detailed User
                Personas, I found that these issues were particularly
                pronounced, highlighting the importance of a seamless mobile
                experience for our target users.
                <br />
                <span className="theme-color">
                  2. Interest in Mobile Ordering
                </span>
                : Participant were interested in ordering from Momochi via
                mobile and prioritized ease of navigation, clear product
                information, flexible payment methods, and AI real-time
                assistance.
                <br />
                <span className="theme-color">
                  3. Current Mobile Experience
                </span>
                : Users found product info accessible but struggled with
                ordering due to missing features like a product list, allergenic
                ingredients for each product, popularity and rankings, catering
                options, a streamlined checkout process as well as direct chat
                support.
              </li>
            </ul>
          </div>
          <div
            className="col-md-6 d-flex flex-column justify-content-between align-items-center"
            style={{ height: "100%" }}>
            <div className="image-wrapper">
              <img
                src="static/img/User Persona.png"
                alt="Momochi Case Study"
                style={{ maxHeight: 300, width: "100% ", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Third Case Study Content */}
        <div className="case-study-content row">
          <div className="col-md-6 case-study-image">
            <div className="image-wrapper">
              <img
                src="static/img/user flow.png"
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
                Track the volume of mobile orders post-redesign.
                <br />
                <span className="theme-color">2. User Satisfaction</span>:
                Gather feedback through post-launch surveys.
                <br />
                <span className="theme-color">3. Navigation Efficiency</span>:
                Monitor metrics like time-on-task and drop-off rates.
                <br />
                <span className="theme-color">4. Mobile Traffic Growth</span>:
                Analyze increases in mobile user engagement and site access.
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
                Ensure all redesign aspects prioritize mobile usability.
                <br />
                <span className="theme-color">2. Simplify Navigation</span>:
                Design an intuitive navigation structure for small screens.
                <br />
                <span className="theme-color">
                  3. Enhance Product Information
                </span>
                : Make product details easily accessible and visually appealing
                on mobile devices.
                <br />
                <span className="theme-color">4. Integrate Key Features</span>:
                Add a product list and an improved checkout process.
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
                <span className="theme-color">1. Wireframes</span>: Created
                mobile-first wireframes focusing on simplicity.
                <br />
                <span className="theme-color">2. Prototypes</span>: Developed
                interactive prototypes to visualize the new ordering process.
                <br />
                <span className="theme-color">3. User Flows</span>: Crafted
                seamless flows from product selection to checkout.
                <br />
                <span className="theme-color">4. Tools</span>: Figma.
              </li>
              <li>
                <strong>Usability Testing:</strong>
                <br />
                <span className="theme-color">1. Participants</span>: Same
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
                : Higher user engagement and an increase in interest in online
                orders.
                <br />
                <span className="theme-color">2. Enhanced User Experience</span>
                : Positive feedback highlighted improved user satisfaction.
                <br />
                <span className="theme-color">3. Business Growth</span>: The
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
                Reinforced the importance of a mobile-first approach.
              </li>
              <li>
                <span className="theme-color">2. User-Centered Design</span>:
                Focusing on user needs resulted in a design that aligned well
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
