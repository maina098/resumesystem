import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate10.module.css';

const CVTemplate10 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.name}>{personalInfo.fullName.toUpperCase()}</h1>
          <div className={styles.contactInfo}>
            <span>{personalInfo.address}</span>
            <span>{personalInfo.phone}</span>
            <span>{personalInfo.email}</span>
          </div>
        </div>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>SUMMARY</h3>
          <p className={styles.summary}>{personalInfo.summary}</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>WORK EXPERIENCE</h3>
          <div className={styles.expList}>
            {experience.map((exp) => (
              <div key={exp.id} className={styles.expItem}>
                <h4 className={styles.expTitle}>{exp.title}</h4>
                <div className={styles.expMeta}>
                  <span className={styles.expCompany}>{exp.company}</span>
                  <span className={styles.expDate}> | {exp.startDate} - {exp.endDate}</span>
                </div>
                <ul className={styles.expDescription}>
                  {exp.description.split('\n').map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.twoColumn}>
          <div className={styles.column}>
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>EDUCATION</h3>
              {education.map((edu) => (
                <div key={edu.id} className={styles.eduItem}>
                  <h4 className={styles.eduDegree}>{edu.degree}</h4>
                  <p className={styles.eduSchool}>{edu.school}</p>
                  <p className={styles.eduDate}>Final CGPA: 3.8/4.0 | {edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </section>
          </div>

          <div className={styles.column}>
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>SKILLS</h3>
              <ul className={styles.skillsGrid}>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
});

CVTemplate10.displayName = 'CVTemplate10';

export default CVTemplate10;
