import React from 'react';

const Volunteering = () => {
  const volunteeringExperiences = [
    {
      organization: 'Microsoft Student Ambassador',
      position: 'Student Ambassador',
      duration: 'Jan 2024 - Present',
      description: 'Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities, and develop technical and career skills for the future.',
      link: 'https://mvp.microsoft.com/studentambassadors/certificate/b7f953fe-d911-4795-8b72-99b8df260fa7',
    },
    {
      organization: 'ACS (Australian Computer Society)',
      position: 'Member',
      duration: 'Sep 2023 - Present',
      description: 'Being a member of Australian Computer Society (ACS) is so encouraging and full of opportunities to excel in networks and build a strong foundation in the IT industry.',
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
    // Add more volunteering experiences as needed
  ];

  return (
    <div>
      <h2>Volunteering</h2>
      <div>
        {volunteeringExperiences.map((experience, index) => (
          <div key={index}>
            <h3>{experience.organization}</h3>
            <p>{experience.position}</p>
            <p>{experience.duration}</p>
            <p>{experience.description}</p>
            {experience.link && (
              <p>
                More Info: <a href={experience.link} target="_blank" rel="noopener noreferrer">{experience.organization}</a>
              </p>
            )}
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteering;
