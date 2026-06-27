import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate14.module.css';

const CVTemplate14 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <header className={styles.header}>
        <h1 className={styles.name}>{personalInfo.fullName.toUpperCase()}</h1>
        <h2 className={styles.jobTitle}>{personalInfo.jobTitle.toUpperCase()}</h2>
      </header>

      <div className={styles.content}>
        <div className={styles.sidebar}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>CONTACT</h3>
            <p className={styles.infoText}>{personalInfo.phone}</p>
            <p className={styles.infoText}>{personalInfo.email}</p>
            <p className={styles.infoText}>{personalInfo.address}</p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>SKILLS</h3>
            <ul className={styles.skillsList}>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>EDUCATION</h3>
            {education.map((edu) => (
              <div key={edu.id} className={styles.eduItem}>
                <p className={styles.eduDate}>{edu.startDate} - {edu.endDate}</p>
                <h4 className={styles.eduDegree}>{edu.degree}</h4>
                <p className={styles.eduSchool}>{edu.school}</p>
              </div>
            ))}
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>LANGUAGES</h3>
            <ul className={styles.skillsList}>
              <li>English - Native</li>
              <li>German - Fluent</li>
            </ul>
          </section>
        </div>

        <div className={styles.mainArea}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>PROFILE</h3>
            <p className={styles.summary}>{personalInfo.summary}</p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>WORK EXPERIENCE</h3>
            <div className={styles.expList}>
              {experience.map((exp) => (
                <div key={exp.id} className={styles.expItem}>
                  <h4 className={styles.expCompany}>{exp.company}</h4>
                  <h5 className={styles.expTitle}>{exp.title}</h5>
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
        </div>
      </div>
    </div>
  );
});

CVTemplate14.displayName = 'CVTemplate14';

export default CVTemplate14;
