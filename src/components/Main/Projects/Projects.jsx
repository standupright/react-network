import React from 'react';
import ProjectsStyles from './Projects.module.css'
import Project from './Project/Project'

const Projects = () => {
  return (
    <section className={ProjectsStyles.projects}>
      <ul className={ProjectsStyles.projects__list}>
        <li className={ProjectsStyles.projects__item}>
          <Project link="https://s.tmimgcdn.com/scr/47100/47126-med.jpg" technologies="HTML, CSS, JS" />
        </li>
        <li className={ProjectsStyles.projects__item}>
          <Project link="https://downloadfreepsd.com/wp-content/uploads/Company-Portfolio-Website-Template-Free-PSD-500x500.png" technologies="HTML, CSS, ReactJS" />
        </li>
        <li className={ProjectsStyles.projects__item}>
          <Project link="https://s.tmimgcdn.com/scr/800x500/34300/sablon-turnkey-20-na-temu-biznes-ta-poslugi-no34383_34383-original.jpg" technologies="HTML, CSS, VueJS" />
        </li>
        <li className={ProjectsStyles.projects__item}>
          <Project link="https://s.tmimgcdn.com/scr/800x500/28000/drupal-sablon-no28077-na-temu-dizajn-studia_28077-original.jpg" technologies="HTML, CSS, SvetleJS" />
        </li>
        
      </ul>
    </section>
  );
}

export default Projects;