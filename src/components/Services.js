const Services = () => {
  return (
    <section id="services" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Services</h3>
              <p className="text-uppercase small">
                A Full Stack Developer based in Finland
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
                <h5>Unique design</h5>
                <p>
                  Crafting bespoke designs that reflect your brand's identity
                  and vision in a modern way.
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
                <h5>Different Layout</h5>
                <p>
                  Offering diverse layout options tailored to your specific
                  needs and preferences.
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
                <h5>Make it Simple</h5>
                <p>
                  Creating intuitive and user-friendly interfaces that simplify
                  navigation for seamless experiences.
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
                <h5>Responsiveness</h5>
                <p>
                  Ensuring your site looks stunning and functions perfectly on
                  mobile, tablet, or desktop.
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
                <h5>Testing for Perfection</h5>
                <p>
                  Rigorously testing to deliver flawless and reliable
                  performance, free from bugs and issues.
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
                <h5>Advanced Options</h5>
                <p>
                  Delivering cutting-edge features to elevate user engagement
                  and provide an interactive experience.
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
