import React from "react";
import TimelineItem from "./TimelineItem";
import logo from "../../assets/images/logo.png";
import sattvik_mess_log from "../../assets/images/sattvik-mess-logo1.png";
import Testimonial from "./Testimonal";
export default function About({ isActive }) {
  const style1 = {
    animation: "appear 1s ease-in-out",
    display: "block",
    transform: "translateY(0) scaleY(1)",
  };
  const style2 = { display: "none" };
  return (
    <section style={isActive === 1 ? style1 : style2}>
      <div class="about-item-separator">
        <div class="main-title">
          <h2>
            <div className="sattvik-event">
              <img
                className="sattvikoham-logo"
                // style={{ width: "100px", height: "130px", borderRadius: "50%" }}
                src={logo}
                alt=""
              />
              <div>
                Sattvi<span className="koham-span">koham</span>
              </div>
            </div>
          </h2>
        </div>
        <div className="about-content">
          <p style={{ textAlign: "center" }}>
            SATTVIKOHAM is an event organized by the mess committee of our
            college. The event is designed to promote the importance of a
            healthy and wholesome lifestyle and to encourage participants to
            adopt a SATTVIK diet and lifestyle. The event features a range of
            competitions and activities, including a marathon, coding
            competition, poster-making competition, guest talk, and a yoga
            session.It is a unique and inspiring event that promotes the
            benefits of a healthy and balanced lifestyle. With its range of
            competitions, activities, and talks, it provides a platform for
            participants to learn, grow, and connect with others who share
            similar interests and values.
          </p>
        </div>
      </div>

      <div class="about-item-separator">
        <div class="main-title">
          <h2>
            <div className="sattvik-event">
              <img
                style={{ width: "100px", height: "100px" }}
                src={sattvik_mess_log}
                alt=""
              />
              <div>
                Sattvik<span>Mess</span>
              </div>
            </div>
          </h2>
        </div>
        <div className="about-content">
          <p style={{ textAlign: "center" }}>
            Sattvik Mess is the only mess in our college committed to serving
            healthy, delicious and pure vegetarian food to the students. The
            most amazing fact about this mess is that it was founded by the
            college students and is being managed and regulated by a team
            consisting of college students. The mess's purpose is to promote the
            health & well-being of students, along with a commitment to reduce
            food waste and promote sustainability, while also providing a
            platform for education and awareness about the benefits of
            vegetarianism and Sattvik lifestyle.
          </p>
        </div>
        <div class="about-container">
          <div class="right-about">
            <div class="about-item">
              <div class="abt-text">
                <p class="large-text">500+</p>
                <p class="small-text">
                  Students <br /> Enrolled
                </p>
              </div>
            </div>
            <div class="about-item">
              <div class="abt-text">
                <p class="large-text">30+</p>
                <p class="small-text">
                  Employees <br /> Serving
                </p>
              </div>
            </div>

            <div class="about-item">
              <div class="abt-text">
                <p class="large-text">11+</p>
                <p class="small-text">
                  years of <br /> serving
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-title">
        <h2>Testimonial</h2>
      </div>
      <p style={{ textAlign: "center" }}>
        See what our Alumnus have to say about sattvik way of living.
      </p>
      <Testimonial></Testimonial>
    </section>
  );
}
