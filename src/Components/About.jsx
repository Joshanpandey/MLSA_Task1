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
  "Hello there! 👋 I'm Joshan Pandey a first-year Master's Degree student in Business Information Systems at AIH, Sydney, Australia. Passionate about coding and project development, I thrive in the realms of Java and Python programming. As a problem solver at heart, I enjoy tackling challenges and translating innovative ideas into functional solutions. Eager to learn, create, and contribute to the tech world. Let's build something amazing together! 💻✨";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Java",
  "Python",
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
  "Embrace the beauty of coding as your canvas, and each line you write becomes a stroke of innovation. In the vast landscape of technology, your code has the power to shape, create, and inspire. Remember, every bug you conquer is a step closer to mastery, and every problem you solve is a victory in the journey of endless possibilities. Keep coding, stay curious, and let your passion for programming be the driving force behind your journey to greatness. The world needs your unique solutions, so code on with confidence and creativity!"
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
