// import React from 'react';
// import './LandingPage.scss';

// const LandingPage = () => {
//   const scrollToSection = (event, sectionId) => {
//     event.preventDefault();
//     document.getElementById(sectionId).scrollIntoView({
//       behavior: 'smooth',
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // You can add your form submission logic here (e.g., API call, validation)
//     alert("Form submitted!"); // For demonstration purposes
//   };

//   return (
//     <div className="landing-page">
//       <section id="about" className="about-section">
//         <div className="container text-center">
//           <div className="about-section__content">
//             <h2 className="about-section__subtitle">About Me</h2>
//             <p className="about-section__text">
//               I am a dedicated and multifaceted professional with a strong foundation in Computer Science and Big Data Systems...
//             </p>
//             <a href="Yvonne's Resume.pdf" className="btn-rounded btn btn-outline-primary mt-4" download>
//               Download CV
//             </a>
//           </div>
//         </div>
//       </section>

//       <section id="skills" className="skills-section">
//         <div className="container text-center">
//           <div className="skills-section__content">
//             <h2 className="skills-section__subtitle">Skills</h2>
//             <div className="skills-section__container">
//               {[
//                 'HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'C', 'SQL', 
//                 'R', 'XML', 'Kotlin', 'Software Development', 'Application Development', 
//                 'Application Design', 'Data Analysis', 'E-Commerce', 
//                 'Android Programming', 'Azure DevOps', 'UX/UI Design', 'Prototyping', 
//                 'Big Data System Management'
//               ].map(skill => (
//                 <button className="skills-section__button" key={skill}>{skill}</button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="projects" className="projects-section">
//         <div className="container text-center">
//           <div className="projects-section__content">
//             <h2 className="projects-section__subtitle">Projects</h2>
//             <div className="projects-section__container">
//               {['YPMA', 'MOT', 'IAW', 'AG-EROSION', 'ESA', 'HYBRID MODEL-BRS', 'NutriLi', 'RANGI', 'WEATHER', 'TUTORLOO', 'LOTTERY'].map((project, index) => (
//                 <a href={`project${(index % 2) + 1}.html`} className="projects-section__button" key={project}>
//                   <img src="path/to/your/image.jpg" alt={`Project ${project}`} className="projects-section__image" />
//                   <span className="projects-section__button-name">{project}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="contact" className="contact-section">
//         <div className="container text-center">
//           <div className="contact-section__content">
//             <h2 className="contact-section__subtitle">Contact</h2>
//             <div className="contact-section__container">
//               <form id="contactForm" className="contact-section__form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="fname">First Name:</label>
//                   <input type="text" id="fname" name="fname" required />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="lname">Last Name:</label>
//                   <input type="text" id="lname" name="lname" required />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="subject">Subject:</label>
//                   <input type="text" id="txtsubject" name="subject" required />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Email:</label>
//                   <input type="email" id="email" name="email" required />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="message">Message:</label>
//                   <textarea id="message" name="message" rows="5" required></textarea>
//                 </div>
//                 <button type="submit" className="contact-section__submit-button">Submit</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;
import React from 'react';
import './LandingPage.scss';

const LandingPage = () => {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!"); // For demonstration purposes
  };

  const projects = [
    { name: 'YPMA', url: 'project1.html' },
    { name: 'MOT', url: 'project2.html' },
    { name: 'IAW', url: 'project3.html' },
    { name: 'AG-EROSION', url: 'project4.html' },
    { name: 'ESA', url: 'project5.html' },
    { name: 'HYBRID MODEL-BRS', url: 'project6.html' },
    { name: 'NutriLi', url: 'project7.html' },
    { name: 'RANGI', url: 'project8.html' },
    { name: 'WEATHER', url: 'project9.html' },
    { name: 'TUTORLOO', url: 'project10.html' },
    { name: 'LOTTERY', url: 'project11.html' },
  ];

  return (
    <div className="landing-page">
      <section id="about" className="about-section">
        <div className="container text-center">
          <div className="about-section__content">
            <h2 className="about-section__subtitle">About Me</h2>
            <p className="about-section__text">
              I am a dedicated and multifaceted professional with a strong foundation in Computer Science and Big Data Systems...
            </p>
            <a href="Yvonne's Resume.pdf" className="btn-rounded btn btn-outline-primary mt-4" download>
              Download CV
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="container text-center">
          <div className="skills-section__content">
            <h2 className="skills-section__subtitle">Skills</h2>
            <div className="skills-section__container">
              {[
                'HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'C', 'SQL', 
                'R', 'XML', 'Kotlin', 'Software Development', 'Application Development', 
                'Application Design', 'Data Analysis', 'E-Commerce', 
                'Android Programming', 'Azure DevOps', 'UX/UI Design', 'Prototyping', 
                'Big Data System Management'
              ].map(skill => (
                <button className="skills-section__button" key={skill}>{skill}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="container text-center">
          <div className="projects-section__content">
            <h2 className="projects-section__subtitle">Projects</h2>
            <div className="projects-section__container">
              {projects.map((project) => (
                <a 
                  href={project.url} 
                  className="projects-section__link" 
                  key={project.name} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container text-center">
          <div className="contact-section__content">
            <h2 className="contact-section__subtitle">Contact</h2>
            <div className="contact-section__container">
              <form id="contactForm" className="contact-section__form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fname">First Name:</label>
                  <input type="text" id="fname" name="fname" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last Name:</label>
                  <input type="text" id="lname" name="lname" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  <input type="text" id="txtsubject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="contact-section__submit-button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
