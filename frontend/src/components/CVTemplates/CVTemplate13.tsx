import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate13.module.css';

const CVTemplate13 = forwardRef<HTMLDivElement, {}>((props, ref) => {
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
          <h3 className={styles.sidebarTitle}>Expertise</h3>
          <ul className={styles.skillsList}>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Language</h3>
          <ul className={styles.skillsList}>
            <li>English</li>
            <li>Spanish</li>
            <li>Arabic</li>
          </ul>
        </section>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.name}>{personalInfo.fullName}</h1>
          <h2 className={styles.jobTitle}>{personalInfo.jobTitle}</h2>
        </header>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Experience</h3>
          <div className={styles.expList}>
            {experience.map((exp) => (
              <div key={exp.id} className={styles.expItem}>
                <div className={styles.expDate}>{exp.startDate} - {exp.endDate}</div>
                <div className={styles.expDetails}>
                  <h4 className={styles.expTitle}>{exp.title}</h4>
                  <p className={styles.expCompany}>{exp.company}</p>
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

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Education</h3>
          <div className={styles.expList}>
            {education.map((edu) => (
              <div key={edu.id} className={styles.expItem}>
                <div className={styles.expDate}>{edu.startDate} - {edu.endDate}</div>
                <div className={styles.expDetails}>
                  <h4 className={styles.expTitle}>{edu.degree}</h4>
                  <p className={styles.expCompany}>{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
});

CVTemplate13.displayName = 'CVTemplate13';

export default CVTemplate13;
