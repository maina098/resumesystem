import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate21.module.css';

const CVTemplate21 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <header className={styles.header}>
        <h1 className={styles.name}>{personalInfo.fullName.toUpperCase()}</h1>
      </header>

      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div className={styles.contactBox}>
            <p className={styles.contactItem}>{personalInfo.phone}</p>
            <p className={styles.contactItem}>{personalInfo.email}</p>
            <p className={styles.contactItem}>{personalInfo.website}</p>
            <p className={styles.contactItem}>{personalInfo.address}</p>
          </div>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>EDUCATION</h3>
            {education.map((edu) => (
              <div key={edu.id} className={styles.itemBox}>
                <h4 className={styles.itemTitle}>{edu.school.toUpperCase()}</h4>
                <p className={styles.itemSubtitle}>{edu.degree}</p>
                <p className={styles.itemDate}>{edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>SKILLS</h3>
            <div className={styles.itemBox}>
              <ul className={styles.skillsList}>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
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
                <div key={exp.id} className={styles.expBox}>
                  <h4 className={styles.expTitle}>{exp.title.toUpperCase()}</h4>
                  <p className={styles.expCompany}>{exp.company} | {exp.startDate} - {exp.endDate}</p>
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

CVTemplate21.displayName = 'CVTemplate21';

export default CVTemplate21;
