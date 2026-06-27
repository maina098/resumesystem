import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate11.module.css';

const CVTemplate11 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <aside className={styles.sidebar}>
        <div className={styles.photoContainer}>
          <div className={styles.photoPlaceholder}></div>
        </div>

        <section className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Contact</h3>
          <div className={styles.contactItem}>
            <span>{personalInfo.email}</span>
          </div>
          <div className={styles.contactItem}>
            <span>{personalInfo.phone}</span>
          </div>
          <div className={styles.contactItem}>
            <span>{personalInfo.address}</span>
          </div>
          <div className={styles.contactItem}>
            <span>{personalInfo.website}</span>
          </div>
        </section>

        <section className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Education</h3>
          {education.map((edu) => (
            <div key={edu.id} className={styles.eduItem}>
              <h4 className={styles.eduDegree}>{edu.degree}</h4>
              <p className={styles.eduSchool}>{edu.school}</p>
              <p className={styles.eduDate}>{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </section>

        <section className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Skill</h3>
          <ul className={styles.skillsList}>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.name}>{personalInfo.fullName}</h1>
          <h2 className={styles.jobTitle}>{personalInfo.jobTitle}</h2>
        </header>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Profile</h3>
          <p className={styles.summary}>{personalInfo.summary}</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Work Experience</h3>
          <div className={styles.expList}>
            {experience.map((exp) => (
              <div key={exp.id} className={styles.expItem}>
                <div className={styles.expDate}>{exp.startDate} - {exp.endDate}</div>
                <h4 className={styles.expTitle}>{exp.title}</h4>
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
      </main>
    </div>
  );
});

CVTemplate11.displayName = 'CVTemplate11';

export default CVTemplate11;
