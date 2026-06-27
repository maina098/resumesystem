import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate17.module.css';

const CVTemplate17 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <header className={styles.header}>
        <div className={styles.photoContainer}>
          <div className={styles.photoPlaceholder}></div>
        </div>
        <div className={styles.headerText}>
          <h1 className={styles.name}>{personalInfo.fullName.toUpperCase()}</h1>
          <h2 className={styles.jobTitle}>{personalInfo.jobTitle}</h2>
        </div>
      </header>

      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <section className={styles.sidebarSection}>
            <p className={styles.contactItem}>{personalInfo.phone}</p>
            <p className={styles.contactItem}>{personalInfo.email}</p>
            <p className={styles.contactItem}>{personalInfo.address}</p>
            <p className={styles.contactItem}>{personalInfo.website}</p>
          </section>

          <section className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>EDUCATION</h3>
            {education.map((edu) => (
              <div key={edu.id} className={styles.eduItem}>
                <h4 className={styles.eduDegree}>{edu.degree}</h4>
                <p className={styles.eduDate}>{edu.startDate} - {edu.endDate}</p>
                <p className={styles.eduSchool}>{edu.school}</p>
              </div>
            ))}
          </section>

          <section className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>SKILLS</h3>
            <ul className={styles.skillsList}>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>LANGUAGE</h3>
            <ul className={styles.skillsList}>
              <li>English</li>
              <li>French</li>
            </ul>
          </section>
        </aside>

        <main className={styles.mainArea}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>About Me</h3>
            <p className={styles.summary}>{personalInfo.summary}</p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>WORK EXPERIENCE</h3>
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
        </main>
      </div>
    </div>
  );
});

CVTemplate17.displayName = 'CVTemplate17';

export default CVTemplate17;
