import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              We believe that food is not just nourishment, but an experience — a celebration of taste, culture, and connection.
              At the heart of our kitchen lies a passion for fresh ingredients, handcrafted flavors, and a deep respect for every plate we serve.
              Whether you're here for a quick bite or a slow meal with loved ones, we’re committed to making it memorable — one dish at a time.
            </p>

            {/* Scroll to Menu Section */}
            <ScrollLink
              to="menu"       // ID of the section to scroll to
              spy={true}
              smooth={true}
              duration={500}
              className="menu-link"
            >
              Explore Menu <HiOutlineArrowRight />
            </ScrollLink>
          </div>

          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
