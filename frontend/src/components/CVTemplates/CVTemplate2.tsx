import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate2.module.css';

const CVTemplate2 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <div className={styles.sidebar}>
        <div className={styles.avatarPlaceholder}>
          {/* A photo would go here if we collected it */}
        </div>
        
        <section className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Contact</h3>
          <div className={styles.contactItem}>
            <strong>Phone</strong>
            <p>{personalInfo.phone}</p>
          </div>
          <div className={styles.contactItem}>
            <strong>Email</strong>
            <p>{personalInfo.email}</p>
          </div>
          <div className={styles.contactItem}>
            <strong>Address</strong>
            <p>{personalInfo.address}</p>
          </div>
        </section>

        <section className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Education</h3>
          {education.map((edu) => (
            <div key={edu.id} className={styles.sidebarItem}>
              <h4 className={styles.sidebarItemTitle}>{edu.degree}</h4>
              <p className={styles.sidebarItemSubtitle}>{edu.school}</p>
              <p className={styles.sidebarItemDate}>{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </section>

        <section className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Expertise</h3>
          <ul className={styles.skillsList}>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.name}>{personalInfo.fullName}</h1>
          <h2 className={styles.jobTitle}>{personalInfo.jobTitle}</h2>
          <p className={styles.summary}>{personalInfo.summary}</p>
        </header>

        <section className={styles.mainSection}>
          <h3 className={styles.mainTitle}>Experience</h3>
          {experience.map((exp) => (
            <div key={exp.id} className={styles.experienceItem}>
              <div className={styles.experienceDate}>
                {exp.startDate} - {exp.endDate}
              </div>
              <div className={styles.experienceContent}>
                <h4 className={styles.experienceTitle}>{exp.title}</h4>
                <p className={styles.experienceCompany}>{exp.company} | {exp.location}</p>
                <div className={styles.experienceDescription}>
                  {exp.description.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
});

CVTemplate2.displayName = 'CVTemplate2';

export default CVTemplate2;
