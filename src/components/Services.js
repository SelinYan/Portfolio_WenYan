const Services = () => {
  return (
    <section id="services" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Services</h3>
              <p className="text-uppercase small">
                A UI/UX designer based in Finland
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-desktop" />
              </div>
              <div className="feature-content">
                <h5>User Research & Analysis</h5>
                <p>
                  Conducting interviews, surveys, and usability tests to gather
                  insights, information architecturing and user journey mapping.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-pricetags" />
              </div>
              <div className="feature-content">
                <h5>User-Centered Design</h5>
                <p>
                  Crafting designs that prioritize user needs and preferences.
                  Utilizing user research and data to inform design decisions.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-chat" />
              </div>
              <div className="feature-content">
                <h5>Wireframing & Prototyping</h5>
                <p>
                  Implementing detailed wireframes and interactive prototypes to
                  visualize and test design concepts before development.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-mobile" />
              </div>
              <div className="feature-content">
                <h5>Responsiveness & Accessibility</h5>
                <p>
                  Designing interfaces that adapt smoothly to any device,
                  ensuring consistent user experiences. Keep accessibility in
                  mind.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-target" />
              </div>
              <div className="feature-content">
                <h5>Testing & Iteration</h5>
                <p>
                  Regularly testing designs with real users, refining them based
                  on feedback, and incorporating trendy features for optimal
                  results.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-tools-2" />
              </div>
              <div className="feature-content">
                <h5>Coding Knowledge</h5>
                <p>
                  Coding fundamentals enhance my communication and collaboration
                  with developers for problem-solving and project execution.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
        </div>
      </div>
    </section>
  );
};
export default Services;
