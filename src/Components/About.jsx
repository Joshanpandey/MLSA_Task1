/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/background.jpg";

const imageAltText = "abstract background with beautiful color";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hello there! 👋 I'm Joshan Pandey a Final-year Master's Degree student in Business Information Systems at AIH, Sydney, Australia. Passionate about coding and project development, I thrive in the realms Working in Web Development Field. As a problem solver at heart, I enjoy tackling challenges and translating innovative ideas into functional solutions. Eager to learn, create, and contribute to the tech world. Let's build something amazing together! 💻✨";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "HTML,CSS,JavaScript",
  "Java",
  "Linux Line-Command",
  "MySQL",
  "Problem solving",
  
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Programming is the art of telling another human being what one wants the computer to do. ― Donald Ervin Knuth"
  ;

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
