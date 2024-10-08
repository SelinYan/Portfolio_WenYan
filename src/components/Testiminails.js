import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";

const Testiminails = () => {
  return (
    <section className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">Testimonials</h3>
              <p className="text-uppercase small">
                A UI/UX designer based in Finland
              </p>
            </div>
          </div>
        </div>
        <Swiper {...sliderProps.testimonial}>
          {/* testimonials */}
          <SwiperSlide className="testimonial-col-01">
            <div className="media">
              <div className="img">
                <img src="static/img/team-1.jpg" alt="image" />
              </div>
              <div className="media-body p-25px-l">
                <p>
                  The redesign by Wen transformed our mobile site and increased
                  our user engagement. The improved user experience delivered a
                  fantastic result. Highly recommended!
                </p>
                <div className="tc-info">
                  <h6 className="font-alt dark-color font-w-600">Kelly</h6>
                  <span>Entrepreneur</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* / */}
          {/* testimonials */}
          <SwiperSlide className="testimonial-col-01">
            <div className="media">
              <div className="img">
                <img src="static/img/team-2.jpg" alt="image" />
              </div>
              <div className="media-body p-25px-l">
                <p>
                  Working with Wen was a pleasure. She was great at planning and
                  carrying out the design and development. It was awesome to
                  team up with someone so skilled and dedicated.
                </p>
                <div className="tc-info">
                  <h6 className="font-alt dark-color font-w-600">Inna</h6>
                  <span>Development Student</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* / */}
          {/* testimonials */}
          {/* <SwiperSlide className="testimonial-col-01">
            <div className="media">
              <div className="img">
                <img src="static/img/team-3.jpg" alt="image" />
              </div>
              <div className="media-body p-25px-l">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <div className="tc-info">
                  <h6 className="font-alt dark-color font-w-600">
                    Nancy Bayers
                  </h6>
                  <span>Co-founder</span>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          {/* / */}
          {/* testimonials */}
          {/* <SwiperSlide className="testimonial-col-01">
            <div className="media">
              <div className="img">
                <img src="static/img/team-4.jpg" alt="image" />
              </div>
              <div className="media-body p-25px-l">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <div className="tc-info">
                  <h6 className="font-alt dark-color font-w-600">
                    Nancy Bayers
                  </h6>
                  <span>Co-founder</span>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          {/* / */}
          <div className="owl-dots"></div>
        </Swiper>
      </div>
    </section>
  );
};
export default Testiminails;
