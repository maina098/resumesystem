import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate15.module.css';

const CVTemplate15 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <header className={styles.header}>
        <h1 className={styles.name}>{personalInfo.fullName}</h1>
        <h2 className={styles.jobTitle}>{personalInfo.jobTitle}</h2>
      </header>

      <div className={styles.contactBar}>
        <span>{personalInfo.email}</span>
        <span>{personalInfo.phone}</span>
        <span>{personalInfo.address}</span>
      </div>

      <div className={styles.content}>
        <p className={styles.summary}>{personalInfo.summary}</p>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Experience</h3>
          <div className={styles.expList}>
            {experience.map((exp) => (
              <div key={exp.id} className={styles.expItem}>
                <div className={styles.expHeader}>
                  <h4 className={styles.expTitle}>{exp.title}</h4>
                  <span className={styles.expDate}>{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className={styles.expCompany}>{exp.company}</p>
                <ul className={styles.expDescription}>
                  {exp.description.split('\n').map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Education</h3>
          <div className={styles.eduList}>
            {education.map((edu) => (
              <div key={edu.id} className={styles.eduItem}>
                <div className={styles.expHeader}>
                  <h4 className={styles.eduDegree}>{edu.degree}</h4>
                  <span className={styles.expDate}>{edu.startDate} - {edu.endDate}</span>
                </div>
                <p className={styles.eduSchool}>{edu.school}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Skills</h3>
          <div className={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.skillTag}>{skill}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
});

CVTemplate15.displayName = 'CVTemplate15';

export default CVTemplate15;
