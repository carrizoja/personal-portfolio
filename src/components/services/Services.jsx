import React from "react";
import "./services.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Services = () => {
  return (
    <section id="services">
      <h5>Jobs that I can do</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Start Ux Ui */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <IoMdCheckmarkCircleOutline className="service__list-icon" />
              <p>Landing Pages</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="service__list-icon" />
              <p>Web Application / Business Software</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="service__list-icon" />
              <p>eCommerce</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="service__list-icon" />
              <p>Blog Website Design</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="service__list-icon" />
              <p>Web Site Maintenence</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="service__list-icon" />
              <p>Domain / Hosting Management</p>
            </li>
          </ul>
        </article>
        {/*  End of UX UI */}

        {/* Start Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>UX UI</h3>
          </div>

          <ul className="service__list">
            <li>
              <IoMdCheckmarkCircleOutline className="service__list-icon" />
              <p>Wireframe and Prototyping</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="service__list-icon" />
              <p>User Research and Analysis</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="service__list-icon" />
              <p>Design Thinking</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="service__list-icon" />
              <p>Cart Sorting</p>
            </li>
            
          </ul>
        </article>
        {/*  Web Development */}

        {/* Start Technnical Support */}
        <article className="service">
          <div className="service__head">
            <h3>Technnical Support</h3>
          </div>

          <ul className="service__list">
            <li>
              <IoMdCheckmarkCircleOutline className="service__list-icon" />
              <p>Software and OS installation</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="service__list-icon" />
              <p>Networking</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="service__list-icon" />
              <p>Cybersecurity</p>
            </li>
           
          </ul>
        </article>
        {/*  End Technnical Support */}
      </div>
    </section>
  );
};

export default Services;
