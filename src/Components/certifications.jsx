import React from 'react';

const Certifications = () => {
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

  return (
    <div>
      <h2>Certifications</h2>
      <div>
        {certifications.map((certification, index) => (
          <div key={index}>
            <h3>{certification.name}</h3>
            <p>Issued by: {certification.organization}</p>
            <p>Skills: {certification.skills.join(', ')}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
