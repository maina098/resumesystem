import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate3.module.css';

const CVTemplate3 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <aside className={styles.sidebar}>
        <div className={styles.photoContainer}>
          <div className={styles.photoPlaceholder}></div>
        </div>
        
        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>CONTACT</h3>
          <div className={styles.contactDetails}>
            <p className={styles.contactItem}><strong>T:</strong> {personalInfo.phone}</p>
            <p className={styles.contactItem}><strong>E:</strong> {personalInfo.email}</p>
            <p className={styles.contactItem}><strong>A:</strong> {personalInfo.address}</p>
            <p className={styles.contactItem}><strong>W:</strong> {personalInfo.website}</p>
          </div>
        </div>

        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>SKILLS</h3>
          <ul className={styles.skillsList}>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>EDUCATION</h3>
          {education.map((edu) => (
            <div key={edu.id} className={styles.educationItem}>
              <h4 className={styles.degree}>{edu.degree}</h4>
              <p className={styles.school}>{edu.school}</p>
              <p className={styles.eduDate}>GPA: 3.8/4.0</p>
            </div>
          ))}
        </div>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.name}>{personalInfo.fullName.toUpperCase()}</h1>
          <h2 className={styles.jobTitle}>{personalInfo.jobTitle.toUpperCase()}</h2>
        </header>

        <section className={styles.mainSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.iconPlaceholder}></span>
            <h3 className={styles.mainTitle}>PROFILE</h3>
          </div>
          <p className={styles.summary}>{personalInfo.summary}</p>
        </section>

        <section className={styles.mainSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.iconPlaceholder}></span>
            <h3 className={styles.mainTitle}>WORK EXPERIENCE</h3>
          </div>
          <div className={styles.experienceList}>
            {experience.map((exp) => (
              <div key={exp.id} className={styles.expItem}>
                <div className={styles.expHeader}>
                  <h4 className={styles.expCompany}>{exp.company}</h4>
                  <span className={styles.expDate}>{exp.startDate} - {exp.endDate}</span>
                </div>
                <h5 className={styles.expTitle}>{exp.title}</h5>
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

CVTemplate3.displayName = 'CVTemplate3';

export default CVTemplate3;
