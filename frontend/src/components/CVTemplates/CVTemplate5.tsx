import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate5.module.css';

const CVTemplate5 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <aside className={styles.sidebar}>
        <div className={styles.photoContainer}>
          <div className={styles.photoPlaceholder}></div>
        </div>
        
        <div className={styles.sidebarContent}>
          <div className={styles.contactItem}>
            <p>{personalInfo.phone}</p>
          </div>
          <div className={styles.contactItem}>
            <p>{personalInfo.email}</p>
          </div>
          <div className={styles.contactItem}>
            <p>{personalInfo.address}</p>
          </div>

          <h3 className={styles.sidebarTitle}>SKILLS</h3>
          <ul className={styles.skillsList}>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h3 className={styles.sidebarTitle}>EDUCATION</h3>
          {education.map((edu) => (
            <div key={edu.id} className={styles.educationItem}>
              <h4 className={styles.degree}>{edu.school}</h4>
              <p className={styles.school}>{edu.degree}</p>
              <p className={styles.eduDate}>{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
          
          <h3 className={styles.sidebarTitle}>LANGUAGE</h3>
          <ul className={styles.skillsList}>
            <li>English</li>
            <li>Spanish</li>
          </ul>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.name}>{personalInfo.fullName.toUpperCase()}</h1>
          <h2 className={styles.jobTitle}>{personalInfo.jobTitle.toUpperCase()}</h2>
          <p className={styles.summary}>{personalInfo.summary}</p>
        </header>

        <section className={styles.mainSection}>
          <h3 className={styles.mainTitle}>EXPERIENCE</h3>
          
          <div className={styles.experienceList}>
            {experience.map((exp) => (
              <div key={exp.id} className={styles.expItem}>
                <h4 className={styles.expTitle}>{exp.title}</h4>
                <p className={styles.expCompany}>{exp.company}</p>
                <p className={styles.expDate}>{exp.startDate} - {exp.endDate}</p>
                <ul className={styles.expDescription}>
                  {exp.description.split('\n').map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
});

CVTemplate5.displayName = 'CVTemplate5';

export default CVTemplate5;
