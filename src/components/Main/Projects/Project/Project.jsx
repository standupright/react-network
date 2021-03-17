import React from 'react';
import ProjectStyles from './Project.module.css'

const Project = (props) => {
  const { link, technologies } = props;
  return (
    <section className={ProjectStyles.project}>
      <img className={ProjectStyles.project__img} width="300" height="300" src={link} alt="Внешний вид проекта" />
      <p className={ProjectStyles.project__description}>Используемые технологии: {technologies}</p>
    </section>
  )
}

export default Project;