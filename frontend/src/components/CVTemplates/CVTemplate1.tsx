import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate1.module.css';

const CVTemplate1 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <header className={styles.header}>
        <h1 className={styles.name}>{personalInfo.fullName.toUpperCase()}</h1>
        <h2 className={styles.jobTitle}>{personalInfo.jobTitle.toUpperCase()}</h2>
      </header>

      <div className={styles.content}>
        <div className={styles.mainColumn}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>PROFILE SUMMARY</h3>
            <p className={styles.summary}>{personalInfo.summary}</p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>WORK EXPERIENCE</h3>
            {experience.map((exp) => (
              <div key={exp.id} className={styles.item}>
                <div className={styles.itemHeader}>
                  <div>
                    <h4 className={styles.itemTitle}>{exp.title}</h4>
                    <p className={styles.itemSubtitle}>{exp.company} | {exp.location}</p>
                  </div>
                  <p className={styles.itemDate}>{exp.startDate} - {exp.endDate}</p>
                </div>
                <div className={styles.itemDescription}>
                  {exp.description.split('\n').map((line, i) => (
                    <p key={i}>• {line}</p>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className={styles.sideColumn}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>CONTACT</h3>
            <div className={styles.contactInfo}>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.email}</p>
              <p>{personalInfo.address}</p>
              <p>{personalInfo.website}</p>
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>EDUCATION</h3>
            {education.map((edu) => (
              <div key={edu.id} className={styles.item}>
                <p className={styles.itemDate}>{edu.startDate} - {edu.endDate}</p>
                <h4 className={styles.itemTitle}>{edu.school}</h4>
                <p className={styles.itemSubtitle}>{edu.degree}</p>
                {edu.description && <p className={styles.itemDescriptionSmall}>{edu.description}</p>}
              </div>
            ))}
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>SKILLS</h3>
            <ul className={styles.skillsList}>
              {skills.map((skill, index) => (
                <li key={index}>• {skill}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
});

CVTemplate1.displayName = 'CVTemplate1';

export default CVTemplate1;
