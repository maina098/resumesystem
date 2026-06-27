import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate18.module.css';

const CVTemplate18 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTop}>
          <div className={styles.photoContainer}>
            <div className={styles.photoPlaceholder}></div>
          </div>
        </div>
        
        <div className={styles.sidebarContent}>
          <section className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>About Me</h3>
            <p className={styles.summary}>{personalInfo.summary}</p>
          </section>

          <section className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Contact</h3>
            <div className={styles.contactItem}>{personalInfo.phone}</div>
            <div className={styles.contactItem}>{personalInfo.email}</div>
            <div className={styles.contactItem}>{personalInfo.address}</div>
          </section>

          <section className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Language</h3>
            <ul className={styles.skillsList}>
              <li>English</li>
              <li>German (Basic)</li>
              <li>Spain (Basic)</li>
            </ul>
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
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.name}>{personalInfo.fullName.toUpperCase()}</h1>
          <h2 className={styles.jobTitle}>{personalInfo.jobTitle}</h2>
        </header>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>💼</span>
            <h3 className={styles.sectionTitle}>Experience</h3>
          </div>
          <div className={styles.expList}>
            {experience.map((exp) => (
              <div key={exp.id} className={styles.expItem}>
                <h4 className={styles.expCompany}>{exp.company}</h4>
                <div className={styles.expMeta}>
                  <span className={styles.expTitle}>{exp.title}</span>
                  <span className={styles.expDate}>{exp.startDate} - {exp.endDate}</span>
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

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>🎓</span>
            <h3 className={styles.sectionTitle}>Education</h3>
          </div>
          <div className={styles.eduList}>
            {education.map((edu) => (
              <div key={edu.id} className={styles.eduItem}>
                <h4 className={styles.eduSchool}>{edu.school}</h4>
                <div className={styles.expMeta}>
                  <span className={styles.eduDegree}>{edu.degree}</span>
                  <span className={styles.expDate}>{edu.startDate} - {edu.endDate}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
});

CVTemplate18.displayName = 'CVTemplate18';

export default CVTemplate18;
