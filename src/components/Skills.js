import { useEffect } from "react";
import { wen } from "../layouts/utils";

const Skills = () => {
  useEffect(() => {
    wen.activeSkillProgress();
  }, []);
  return (
    <section className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Skills</h3>
              <p className="text-uppercase small">
                A Full Stack Developer based in Finland
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-6 m-15px-tb">
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">Frontend</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={88}
                  aria-valuemin={0}
                  aria-valuemax={100}>
                  <span>88%</span>
                </div>
              </div>
            </div>
            {/* end skill */}
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">Backend</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={82}
                  aria-valuemin={0}
                  aria-valuemax={100}>
                  <span>82%</span>
                </div>
              </div>
            </div>
            {/* end skill */}
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">Data & Database</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}>
                  <span>80%</span>
                </div>
              </div>
            </div>
            {/* /skill */}
            {/* end skill */}
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">UI/UX & CI/CD</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={88}
                  aria-valuemin={0}
                  aria-valuemax={100}>
                  <span>88%</span>
                </div>
              </div>
            </div>
            {/* end skill */}
          </div>
          <div className="col-lg-5 m-15px-tb">
            <div className="row">
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon">
                    <i className="fas fa-compact-disc" />
                  </div>
                  <div className="media-body">
                    <h5>React, JS, HTML, CSS</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon">
                    <i className="fas fa-trophy" />
                  </div>
                  <div className="media-body">
                    <h5>Node.js, Firebase</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon">
                    <i className="fas fa-mug-hot" />
                  </div>
                  <div className="media-body">
                    <h5>MySQL, PostgreSQL</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon">
                    <i className="fas fa-flag" />
                  </div>
                  <div className="media-body">
                    <h5>Figma, MUI, AWS</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
