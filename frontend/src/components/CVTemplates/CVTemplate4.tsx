import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate4.module.css';

const CVTemplate4 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <header className={styles.header}>
        <h1 className={styles.name}>{personalInfo.fullName.toUpperCase()}</h1>
        <p className={styles.contactInfo}>
          {personalInfo.phone} • {personalInfo.email} • {personalInfo.address}
        </p>
      </header>

      <div className={styles.dividerThick}></div>
      <h2 className={styles.jobTitle}>{personalInfo.jobTitle.toUpperCase()}</h2>
      <div className={styles.dividerThin}></div>

      <section className={styles.section}>
        <p className={styles.summary}>{personalInfo.summary}</p>
      </section>

      <div className={styles.dividerThin}></div>

      <section className={styles.sectionCenter}>
        <h3 className={styles.sectionTitleCenter}>STRENGTHS AND EXPERTISE</h3>
        <ul className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <div className={styles.dividerThin}></div>

      <section className={styles.section}>
        <h3 className={styles.sectionTitleCenter}>PROFESSIONAL EXPERIENCE</h3>
        
        <div className={styles.experienceList}>
          {experience.map((exp) => (
            <div key={exp.id} className={styles.expItem}>
              <div className={styles.expHeader}>
                <h4 className={styles.expCompany}>{exp.company}</h4>
                <span className={styles.expDate}>{exp.startDate} - {exp.endDate}</span>
              </div>
              <h5 className={styles.expTitle}>{exp.title}</h5>
              
              <div className={styles.expAccomplishments}>
                <strong>Accomplishments:</strong>
                <ul>
                  {exp.description.split('\n').map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.dividerThin}></div>

      <section className={styles.section}>
        <h3 className={styles.sectionTitleCenter}>EDUCATION</h3>
        
        <div className={styles.experienceList}>
          {education.map((edu) => (
            <div key={edu.id} className={styles.expItem}>
              <div className={styles.expHeader}>
                <h4 className={styles.expCompany}>{edu.school}</h4>
                <span className={styles.expDate}>{edu.startDate} - {edu.endDate}</span>
              </div>
              <h5 className={styles.expTitle}>{edu.degree}</h5>
              {edu.description && <p className={styles.eduGpa}>{edu.description}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
});

CVTemplate4.displayName = 'CVTemplate4';

export default CVTemplate4;
