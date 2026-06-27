import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate9.module.css';

const CVTemplate9 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>About Me</h3>
          <p className={styles.summary}>{personalInfo.summary}</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Work Experience</h3>
          {experience.map((exp) => (
            <div key={exp.id} className={styles.expItem}>
              <div className={styles.expDate}>{exp.startDate} - {exp.endDate}</div>
              <h4 className={styles.expCompany}>{exp.company}</h4>
              <h5 className={styles.expTitle}>{exp.title}</h5>
              <ul className={styles.expDescription}>
                {exp.description.split('\n').map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>

      <aside className={styles.sidebar}>
        <div className={styles.photoContainer}>
          <div className={styles.photoPlaceholder}></div>
        </div>

        <div className={styles.headerInfo}>
          <h1 className={styles.name}>{personalInfo.fullName.toUpperCase()}</h1>
          <h2 className={styles.jobTitle}>{personalInfo.jobTitle}</h2>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <span>{personalInfo.phone}</span>
          </div>
          <div className={styles.contactItem}>
            <span>{personalInfo.email}</span>
          </div>
          <div className={styles.contactItem}>
            <span>{personalInfo.address}</span>
          </div>
        </div>

        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Education</h3>
          {education.map((edu) => (
            <div key={edu.id} className={styles.eduItem}>
              <h4 className={styles.eduDegree}>{edu.degree}</h4>
              <p className={styles.eduSchool}>{edu.school}</p>
              <p className={styles.eduDate}>{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </div>

        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Skills</h3>
          <ul className={styles.skillsList}>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
});

CVTemplate9.displayName = 'CVTemplate9';

export default CVTemplate9;
