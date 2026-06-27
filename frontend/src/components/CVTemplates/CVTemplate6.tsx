import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate6.module.css';

const CVTemplate6 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <header className={styles.header}>
        <h1 className={styles.name}>{personalInfo.fullName.toUpperCase()}</h1>
        <h2 className={styles.jobTitle}>{personalInfo.jobTitle}</h2>
      </header>

      <div className={styles.contactBar}>
        <p>{personalInfo.website} | {personalInfo.phone} | {personalInfo.address}</p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>SUMMARY</h3>
          <p className={styles.summary}>{personalInfo.summary}</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>WORK EXPERIENCE</h3>
          {experience.map((exp) => (
            <div key={exp.id} className={styles.expItem}>
              <div className={styles.expHeader}>
                <h4 className={styles.expTitle}>{exp.title}, {exp.company}</h4>
                <span className={styles.expDate}>{exp.startDate} - {exp.endDate}</span>
              </div>
              <ul className={styles.expDescription}>
                {exp.description.split('\n').map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>EDUCATION</h3>
          {education.map((edu) => (
            <div key={edu.id} className={styles.expItem}>
              <div className={styles.expHeader}>
                <h4 className={styles.expTitle}>{edu.degree}</h4>
                <span className={styles.expDate}>{edu.startDate} - {edu.endDate}</span>
              </div>
              <p className={styles.expSchool}>{edu.school}</p>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>KEY SKILLS</h3>
          <ul className={styles.skillsList}>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
});

CVTemplate6.displayName = 'CVTemplate6';

export default CVTemplate6;
