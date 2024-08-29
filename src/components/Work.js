import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const Work = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-content", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">LATEST WORKS</h3>
              <p className="text-uppercase small">
                A UI/UX designer based in Finland
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="portfolio-content lightbox-gallery">
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/momochi_ui.png" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Momochi Mobile UI/UX Redesign</h5>
                <span>Self-led Project</span>
              </div>
              <a
                className="link-overlay"
                href="https://www.figma.com/design/W0f1LuA9vT3X4FRmsNGOgP/MOMOCHI-project?node-id=9-42&t=UVKXM5wHWvtPHpJs-1"
              />
            </div>
            <div className="portfolio-caption">
              <h5>Momochi Mobile UI/UX Redesign </h5>
              <span className="theme-color">Self-led Project</span>
              <p></p>
              <p>
                Enhancing user experience through research-driven UI/UX design
                to fuel local business growth.
              </p>
              <p>
                I led this self-initiated project, conducting user research to
                address pain points and enhance the local business's user
                experience. The brand was thrilled with the result. Explore the
                detailed case study below for more insights.
              </p>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/giphy3.gif" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Interactive Prototyping with Figma</h5>
                <span>Self-led Project</span>
              </div>
              <a
                className="link-overlay"
                href="https://www.figma.com/proto/W0f1LuA9vT3X4FRmsNGOgP/MOMOCHI-project?node-id=0-1&t=NrR0sSIoIEBrdvll-1"
              />
            </div>
            <div className="portfolio-caption">
              <h5>Interactive Prototyping with Figma</h5>
              <span className="theme-color">Self-led Project</span>
              <p></p>
              <p>Showcasing user-centered design and interaction.</p>
              <p>
                This project highlights my prototyping skills, showcasing user
                interactions and flows crafted in Figma. Built on the foundation
                of user research from the redesign project, this prototype
                demonstrates the practical application of my user-centered
                design process.
              </p>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/giphy.gif" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Kid’s Toy E-Commerce Store with WordPress</h5>
                <span>Self-led Project</span>
              </div>
              <a
                className="link-overlay"
                href="https://c3uagfaa.c3.suncomet.fi/wp/home/"
              />
            </div>
            <div className="portfolio-caption">
              <h5>Kid’s Toy E-Commerce Store with WordPress </h5>
              <span className="theme-color">Self-led Project</span>
              <p></p>
              <p>Bright and accessible UI/UX design for online shopping.</p>
              <p>
                For this e-commerce project, I designed and developed a
                user-friendly online store using WordPress and WooCommerce. With
                a focus on bright colors, clear layout, and intuitive
                navigation, I created a fully functional website that’s ready
                for customers to use with their own products.
              </p>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/giphy2.gif" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Digital Advent Calendar Builder with React.js</h5>
                <span>Team project</span>
              </div>
              <a
                className="link-overlay"
                href="https://digital-calendar-wen.netlify.app/"
              />
            </div>
            <div className="portfolio-caption">
              <h5>Digital Advent Calendar Builder with React.js</h5>
              <span className="theme-color">Team project</span>
              <p></p>
              <p>Collaborative project featuring full-stack development.</p>
              <p>
                In this small team project, I contributed as both UI/UX designer
                and partial full-stack developer, building a customizable
                digital advent calendar builder with React, Redux, CSS, Material
                UI and Firebase. The tool enables users to create personalized
                calendars, merging functionality with a delightful user
                experience.
              </p>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/giphy1.gif" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Zoo App with React & CSS</h5>
                <span>School Coding Project</span>
              </div>
              <a
                className="link-overlay"
                href="https://selinyan.github.io/zooApp/"
              />
            </div>
            <div className="portfolio-caption">
              <h5>Zoo App with React & CSS</h5>
              <span className="theme-color">School Coding Project</span>
              <p></p>
              <p>
                React development for a simple and engaging user experience.
              </p>
              <p>
                This school project showcases my front-end development skills
                through a React app that allows users to search for animals and
                mark their favorites. It’s a straightforward application that
                demonstrates my ability to create engaging and functional user
                interfaces.
              </p>
            </div>
          </div>{" "}
          {/* grid item */}
          {/* <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/work3.png" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Typing Game</h5>
                <span>AWS Elastic Beanstalk</span>
              </div>
              <a
                className="link-overlay"
                href="http://typinggame-env.eba-6pn6uv82.eu-central-1.elasticbeanstalk.com/"
              />
            </div>
          </div>{" "} */}
          {/* grid item */}
          {/* <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/portfolio-4.jpg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Countries App</h5>
                <span>Personal Project</span>
              </div>
              <a className="link-overlay" href="#" />
            </div>
          </div>{" "} */}
          {/* grid item */}
          {/* <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/portfolio-2.jpg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Chat Chat App</h5>
                <span>Team Project</span>
              </div>
              <a className="link-overlay" href="#" />
            </div>
          </div>{" "} */}
          {/* grid item */}
          {/* <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/portfolio-3.jpg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>UI Design</h5>
                <span>coming soon</span>
              </div>
              <a className="link-overlay" href="#" />
            </div>
          </div>{" "} */}
          {/* grid item */}
          {/* <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/portfolio-5.jpg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Our Photography</h5>
                <span>Design</span>
              </div>
              <a className="link-overlay" href="#" />
            </div>
          </div>{" "} */}
          {/* grid item */}
        </div>{" "}
        {/* portfolio-content */}
      </div>
    </section>
  );
};
export default Work;
