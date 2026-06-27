import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate22.module.css';

const CVTemplate22 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  return (
    <div className={styles.page} ref={ref}>
      <header className={styles.header}>
        <h1 className={styles.name}>{personalInfo.fullName.toUpperCase()}</h1>
        <h2 className={styles.jobTitle}>{personalInfo.jobTitle}</h2>
      </header>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>CAREER SUMMARY</h3>
        <p className={styles.summary}>{personalInfo.summary}</p>
      </section>

      <div className={styles.columns}>
        <div className={styles.leftCol}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>CONTACT</h3>
            <div className={styles.contactItem}>{personalInfo.phone}</div>
            <div className={styles.contactItem}>{personalInfo.email}</div>
            <div className={styles.contactItem}>{personalInfo.website}</div>
            <div className={styles.contactItem}>{personalInfo.address}</div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>EDUCATION</h3>
            {education.map((edu) => (
              <div key={edu.id} className={styles.eduItem}>
                <h4 className={styles.eduDegree}>{edu.degree}</h4>
                <p className={styles.eduSchool}>{edu.school}</p>
                <p className={styles.eduDate}>{edu.startDate} - {edu.endDate}</p>
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
        </div>

        <div className={styles.rightCol}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>WORK EXPERIENCE</h3>
            <div className={styles.expList}>
              {experience.map((exp) => (
                <div key={exp.id} className={styles.expItem}>
                  <h4 className={styles.expTitle}>{exp.title}</h4>
                  <p className={styles.expCompany}>{exp.company}</p>
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

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>REFERENCE</h3>
            <div className={styles.references}>
              <div className={styles.refItem}>
                <strong>Harumi Kobayashi</strong>
                <span>Wardiere Inc. / CEO</span>
                <span>Phone: 123-456-7890</span>
              </div>
              <div className={styles.refItem}>
                <strong>Bailey Dupont</strong>
                <span>Wardiere Inc. / CEO</span>
                <span>Phone: 123-456-7890</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
});

CVTemplate22.displayName = 'CVTemplate22';

export default CVTemplate22;
