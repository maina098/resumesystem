import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate12.module.css';

const CVTemplate12 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.name}>{personalInfo.fullName}</h1>
          <h2 className={styles.jobTitle}>{personalInfo.jobTitle}</h2>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.contactItem}>{personalInfo.phone}</div>
          <div className={styles.contactItem}>{personalInfo.email}</div>
          <div className={styles.contactItem}>{personalInfo.address}</div>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>EDUCATION</h3>
            {education.map((edu) => (
              <div key={edu.id} className={styles.item}>
                <h4 className={styles.itemTitle}>{edu.degree}</h4>
                <p className={styles.itemSubtitle}>{edu.school}</p>
                <p className={styles.itemDate}>{edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
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
            <h3 className={styles.sectionTitle}>LANGUAGE</h3>
            <ul className={styles.skillsList}>
              <li>English</li>
              <li>Spanish</li>
              <li>French</li>
            </ul>
          </section>
        </div>

        <div className={styles.rightColumn}>
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
        </div>
      </div>
    </div>
  );
});

CVTemplate12.displayName = 'CVTemplate12';

export default CVTemplate12;
