import React from "react";
import image from "../images/closeupcomputer.jpg";
import Education from "./Education";
import Volunteering from "./Volunteering";
import Certifications from "./Certifications";

const imageAltText = "A perfect closeup desktop setup";

const educationList = [
  {
    institution: 'Australian Institute of Higher Education',
    degree: "Master's degree, Business Information Systems",
    duration: 'Sep 2023 - Sep 2025',
    description: "Pursuing a Master's degree in Business Information Systems majoring in Cybersecurity.",
  },
  {
    institution: 'Mechi Multiple Campus',
    degree: 'Bachelor of Business Administration - BBA, Banking, Corporate, Finance, and Securities Law',
    duration: '2014 - 2018',
    description: 'Skills: Banking Law · Computer Literacy · Derivative Markets · Analytical Skills · Managerial Finance · Presentations · Presentation Skills.',
  },
  // Add more education details as needed
];

const volunteeringExperiences = [
  {
    organization: 'Microsoft Student Ambassador',
    position: 'Student Ambassador',
    duration: 'Jan 2024 - Present',
    description: 'Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities, and develop technical and career skills for the future.',
    link: 'https://mvp.microsoft.com/studentambassadors/certificate/b7f953fe-d911-4795-8b72-99b8df260fa7',
  },
  {
    organization: 'Casual Hands',
    position: 'Vivid Volunteer 2023',
    duration: 'May 2023 - Jun 2023',
    description: 'Creating unforgettable experiences for visitors from all around the World, gaining valuable experience and making new friends, giving back to the Australian community and making a difference.',
  },
  {
    organization: 'United Nations Volunteers',
    position: 'Support Outreach of “My Vote Matters” Campaign (Province No. 1)',
    duration: 'Oct 2022 - Nov 2022',
    description: 'UNDP and UNV Nepal have launched an online campaign “My Vote Matters" with the support of youths from across the country. The campaign aims of initiating a national movement to increase the number of aware youth voters in Nepal for the upcoming HoR and PA elections. The online campaign will also support Election Commission Nepal (ECN) in the dissemination of their voter education materials to counter misinformation and disinformation during the election period.',
  },
  {
    organization: 'Hult Prize Foundation',
    position: 'Campus Administrator',
    duration: 'Oct 2017 - Dec 2017',
    description: 'Description of your responsibilities and contributions during your time as a Campus Administrator at Hult Prize Foundation.',
  },
];

const certifications = [
  {
    name: 'Google Cybersecurity Specialization',
    organization: 'Coursera',
    issued: 'Oct 2023',
    skills:'IDS,MySQL,Linux,SEIM,Python',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/HVEWCG68TSEC',
    // Add more properties as needed
  },{
    name: 'Introduction to Cybersecurity',
    organization: 'TAFE NSW',
    issued: 'Aug 2023',
    skills:'Cyber Security Risk,Social Engineering,Cybersecurity Tools',
    link: 'https://training.tafensw.edu.au/mod/customcert/view.php?id=3998&downloadown=1',
  }
];

const hobbiesList = [
  'Reading Books',
  'Watching Movies',
  'Listening to Podcasts',
  'Enjoying Audio Novels',
  'Making Friends as a Hobby',
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
          {/* Education Section */}
          <Education educationList={educationList} />

          {/* Volunteering Section */}
          <Volunteering volunteeringList={volunteeringExperiences} />

          {/* Certifications Section */}
          <Certifications certificationsList={certifications} />

          {/* Hobbies Section */}
          <div className="box">
            <h3>Hobbies</h3>
            <ul>
              {hobbiesList.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
