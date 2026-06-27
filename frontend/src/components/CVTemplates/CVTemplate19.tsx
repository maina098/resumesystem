import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate19.module.css';

const CVTemplate19 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.name}>{personalInfo.fullName.toUpperCase()}</h1>
          <h2 className={styles.jobTitle}>{personalInfo.jobTitle.toUpperCase()}</h2>
        </div>
      </header>

      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <div className={styles.photoContainer}>
            <div className={styles.photoPlaceholder}></div>
          </div>

          <section className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>CONTACT</h3>
            <div className={styles.contactItem}>{personalInfo.phone}</div>
            <div className={styles.contactItem}>{personalInfo.email}</div>
            <div className={styles.contactItem}>{personalInfo.address}</div>
          </section>

          <section className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>SOFT SKILLS</h3>
            <ul className={styles.skillsList}>
              <li>Teamwork</li>
              <li>Communication</li>
              <li>Problem Solving</li>
              <li>Time Management</li>
            </ul>
          </section>

          <section className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>TECH SKILLS</h3>
            <ul className={styles.skillsList}>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>LANGUAGES</h3>
            <ul className={styles.skillsList}>
              <li>English</li>
              <li>French</li>
            </ul>
          </section>
        </aside>

        <main className={styles.mainArea}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>PROFILE</h3>
            <p className={styles.summary}>{personalInfo.summary}</p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>EDUCATION</h3>
            <div className={styles.eduList}>
              {education.map((edu) => (
                <div key={edu.id} className={styles.eduItem}>
                  <h4 className={styles.eduDegree}>{edu.degree}</h4>
                  <p className={styles.eduSchool}>{edu.school} | {edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>PROJECTS / EXPERIENCE</h3>
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

CVTemplate19.displayName = 'CVTemplate19';

export default CVTemplate19;
