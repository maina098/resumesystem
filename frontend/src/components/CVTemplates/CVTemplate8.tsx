import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate8.module.css';

const CVTemplate8 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <div className={styles.innerBorder}>
        <header className={styles.header}>
          <h1 className={styles.name}>{personalInfo.fullName}</h1>
          <h2 className={styles.jobTitle}>{personalInfo.jobTitle.toUpperCase()}</h2>
        </header>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>PROFESSIONAL SUMMARY</h3>
          <p className={styles.summary}>{personalInfo.summary}</p>
        </section>

        <div className={styles.contactBar}>
          <div className={styles.contactItem}>
            <strong>Phone:</strong> {personalInfo.phone}
          </div>
          <div className={styles.contactItem}>
            <strong>Email:</strong> {personalInfo.email}
          </div>
          <div className={styles.contactItem}>
            <strong>Address:</strong> {personalInfo.address}
          </div>
        </div>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>EDUCATION</h3>
          {education.map((edu) => (
            <div key={edu.id} className={styles.item}>
              <h4 className={styles.itemTitle}>{edu.degree} | {edu.startDate} - {edu.endDate}</h4>
              <p className={styles.itemSubtitle}>{edu.school}</p>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>RESEARCH EXPERIENCE</h3>
          {experience.map((exp) => (
            <div key={exp.id} className={styles.item}>
              <h4 className={styles.itemTitle}>{exp.title} | {exp.startDate} - {exp.endDate}</h4>
              <p className={styles.itemSubtitle}>{exp.company}</p>
              <ul className={styles.itemList}>
                {exp.description.split('\n').map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>SKILLS</h3>
          <p className={styles.skillsParagraph}>
            {skills.join(', ')}
          </p>
        </section>
      </div>
    </div>
  );
});

CVTemplate8.displayName = 'CVTemplate8';

export default CVTemplate8;
