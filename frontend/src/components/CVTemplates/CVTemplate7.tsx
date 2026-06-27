import React, { forwardRef } from 'react';
import { useCV } from '@/context/CVContext';
import styles from './CVTemplate7.module.css';

const CVTemplate7 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { cvData } = useCV();
  const { personalInfo, experience, education, skills } = cvData;

  // Split name for styling
  const nameParts = personalInfo.fullName.split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  return (
    <div className={styles.page} ref={ref}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <span className={styles.resumeLabel}>[ RESUME ]</span>
          <span className={styles.jobTitleTop}>{personalInfo.jobTitle.toUpperCase()}</span>
        </div>
        
        <div className={styles.nameBlock}>
          <h1 className={styles.name}>
            <span className={styles.firstName}>{firstName.toUpperCase()}</span>
            <br />
            <span className={styles.lastName}>{lastName.toUpperCase()}</span>
          </h1>
          <div className={styles.photoPlaceholder}></div>
        </div>

        <div className={styles.contactBar}>
          <div className={styles.contactItem}>
            <strong>PHONE</strong>
            <span>{personalInfo.phone}</span>
          </div>
          <div className={styles.contactItem}>
            <strong>WEBSITE</strong>
            <span>{personalInfo.website}</span>
          </div>
          <div className={styles.contactItem}>
            <strong>EMAIL</strong>
            <span>{personalInfo.email}</span>
          </div>
        </div>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>PROFILE SUMMARY</h3>
          <p className={styles.summary}>{personalInfo.summary.toUpperCase()}</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>SKILLS</h3>
          <ul className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <li key={index}>{skill.toUpperCase()}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>WORK EXPERIENCE</h3>
          <div className={styles.expList}>
            {experience.map((exp) => (
              <div key={exp.id} className={styles.expItem}>
                <div className={styles.expHeader}>
                  <h4 className={styles.expTitle}>{exp.title.toUpperCase()}</h4>
                </div>
                <div className={styles.expCompanyBlock}>
                  <span className={styles.expCompany}>{exp.company.toUpperCase()}</span>
                  <span className={styles.expDate}> | {exp.startDate} - {exp.endDate}</span>
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
          <h3 className={styles.sectionTitle}>EDUCATION</h3>
          <div className={styles.eduList}>
            {education.map((edu) => (
              <div key={edu.id} className={styles.eduItem}>
                <h4 className={styles.eduDegree}>{edu.degree.toUpperCase()}</h4>
                <p className={styles.eduSchool}>{edu.school.toUpperCase()} | {edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
});

CVTemplate7.displayName = 'CVTemplate7';

export default CVTemplate7;
