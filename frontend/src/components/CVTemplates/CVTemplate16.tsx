import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate16.module.css';

const CVTemplate16 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <aside className={styles.sidebar}>
        <div className={styles.photoContainer}>
          <div className={styles.photoPlaceholder}></div>
        </div>

        <div className={styles.contactSection}>
          <div className={styles.contactItem}>{personalInfo.phone}</div>
          <div className={styles.contactItem}>{personalInfo.email}</div>
          <div className={styles.contactItem}>{personalInfo.address}</div>
        </div>

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
          <h3 className={styles.sidebarTitle}>Expertise</h3>
          <ul className={styles.skillsList}>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.name}>{personalInfo.fullName.toUpperCase()}</h1>
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
                <div className={styles.expDetails}>
                  <h4 className={styles.expCompany}>{exp.company}</h4>
                  <h5 className={styles.expTitle}>{exp.title}</h5>
                  <ul className={styles.expDescription}>
                    {exp.description.split('\n').map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
});

CVTemplate16.displayName = 'CVTemplate16';

export default CVTemplate16;
