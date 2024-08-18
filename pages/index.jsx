import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import Testiminails from "@/src/components/Testiminails";
import CaseStudy from "@/src/components/CaseStudy";
import { wen } from "@/src/layouts/utils";
import { Fragment, useEffect, useState } from "react";

import Services from "@/src/components/Services";
import TypingAnimation from "@/src/components/TypingAnimation";
import Footer from "@/src/layouts/Footer";
import dynamic from "next/dynamic";

const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const Index1 = () => {
  useEffect(() => {
    wen.scrollToActiveNav();
  }, []);
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <a className="logo-text" href="#home">
              Wen
            </a>
          </div>
          <button className="toggler-menu" onClick={() => setToggle(!toggle)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <header
        className={`header-left ${toggle ? "menu-open menu-open-desk" : ""}`}
        id="navbar-collapse-toggle">
        <div className="navbar-brand">
          <a className="logo-text" href="#home">
            Wen
          </a>
        </div>
        <ul className="nav nav-ul">
          <li>
            <a className="nav-link" href="#home">
              <i className="fas fa-house-damage" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about">
              <i className="far fa-address-card" />
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#services">
              <i className="fas fa-concierge-bell" />
              <span>Services</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#work">
              <i className="fas fa-briefcase" />
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contactme">
              <i className="fas fa-id-card-alt" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </header>

      <main className="main-left">
        {/* Home Banner */}
        <section
          id="home"
          className="home-banner-01 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(static/img/home-banner.jpg)" }}>
          <div className="container">
            <div className="row full-screen align-items-center p-100px-tb">
              <div className="col-md-6">
                <div className="ht-text">
                  <h6>Hello World</h6>
                  <h1>Wen Yan</h1>
                  <h2>
                    I Am Passionate <TypingAnimation />
                  </h2>
                  <p>
                    As a dedicated UI/UX designer, I aim to elevate user
                    experiences and satisfaction by crafting intuitive and
                    impactful digital designs.
                  </p>
                  <div className="btn-bar go-to">
                    <a className="m-btn m-btn-theme" href="#work">
                      my work
                    </a>
                    <a className="m-btn m-btn-t-theme" href="#contactme">
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img
                  src="/profile1.jpg"
                  alt="Profile"
                  className="profile-img"
                  style={{ maxHeight: 500, width: "100% ", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
          <div className="go-to go-to-next">
            <a href="#about">
              <span />
            </a>
          </div>
        </section>
        {/* End Home Banner */}
        {/* End Home Banner */}
        {/* about me */}
        <About />
        {/* end about me */}
        {/* fun */}
        <Skills />
        {/* End fun */}
        {/* resume */}
        <Services />
        {/* End resume */}
        {/* Work */}
        <Work />
        {/* End work */}
        {/* Case Study */}
        <CaseStudy />
        {/* End Case Study */}
        {/* Testiminails */}
        <Testiminails />
        {/* End Testiminails */}
        {/* End Blog */}
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
};
export default Index1;
