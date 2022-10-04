import React from "react";
import "./about.css";
import computer from "../../assets/macbook.jpg";
import { RiAwardFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { HiOutlineFolder } from "react-icons/hi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={computer} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {/* Experience */}
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worlwide</small>
            </article>
            <article className="about__card">
              <HiOutlineFolder className="about__icon" />
              <h5>Projects</h5>
              <small>10+ finished</small>
            </article>
          </div>

          <p>
            I am a Systems Engineer and Full Stack Developer. Currently, I am
            focused on both the Front End and Back End fields due to the
            versatility and coexistence of both approaches. My main objective is
            to work as a Full Stack Developer.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
