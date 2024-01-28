/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/closeupcomputer.jpg";

const imageAltText = "A perfect desktop setup";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Blog Website",
    description:
      "This is my blog website where I write about my expericences and how i feel everyday.",
    url: "https://substack.com/@joshanpandey?utm_source=user-menu",
  },
  {
    title: "Microsoft Learn Student Ambassador 2024",
    description:
      "I am thrilled to announce i have successfully selected as the MLSA 2024.",
    url: "https://mvp.microsoft.com/studentambassadors/certificate/b7f953fe-d911-4795-8b72-99b8df260fa7",
  },
  {
    title: "My first Portfolio project",
    description:
      " I have deployed my first Personal portfolio website. The github repository to it is here",
    url: "https://github.com/Joshanpandey/MLSA_Task1",
  },
  {
    title: "My top 10 Books for 2024",
    description:
      "This is my top 10 recommendation reads for 2024 with concise summaries for each.Lets make this year a different",
    url: "https://substack.com/profile/101023878-joshan-pandey/note/c-48282606?utm_source=substack&utm_content=first-note-modal",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
