const About = () => {
  return (
    <section id="about" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">ABOUT ME</h3>
              <p className="text-uppercase small">
                A UI/UX designer based in Finland
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 m-15px-tb">
            <div className="about-me-img box-shadow">
              <img src="/profile2.png" alt="image" />
              <div className="nav social-icon">
                {/* <a href="#">
                  <i className="fab fa-facebook-f" />
                </a> */}
                <a href="https://github.com/SelinYan">
                  <i className="fab fa-github" />
                </a>
                <a href="https://www.instagram.com/selinyan2016/">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/in/wen-yan-finland/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 m-15px-tb">
            <div className="about-me">
              <h6>
                I focus on blending{" "}
                <span className="theme-color">research-driven</span> insights
                with <span className="theme-color">creative design</span> to
                solve real user problems.
              </h6>
              <p>
                My approach: I start with deep user research—conducting
                interviews, surveys, and usability tests to uncover valuable
                insights. These findings guide my design process, where I craft
                wireframes, prototypes, and user flows that are both intuitive
                and visually engaging.
              </p>
              <p>Tools: Figma, Miro, Google.</p>
              <div className="row about-list">
                <div className="col-md-6">
                  <div className="media">
                    <label>E-mail</label>
                    <p>selinyan2016@gmail.com</p>
                  </div>
                  <div className="media">
                    <label>Phone</label>
                    <p>044-975-4273</p>
                  </div>
                  <div className="media">
                    <label>LinkedIn</label>
                    <p>www.linkedin.com/in/wen-yan-finland</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="media">
                    <label>Residence</label>
                    <p>Finland</p>
                  </div>
                  <div className="media">
                    <label>Address</label>
                    <p>Vantaa, Uusimaa</p>
                  </div>
                  <div className="media">
                    <label>Freelance</label>
                    <p>Available</p>
                  </div>
                </div>
              </div>
              <div className="btn-bar">
                <a
                  className="m-btn m-btn-theme"
                  href="/cv_Wen_Yan.pdf"
                  download>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
