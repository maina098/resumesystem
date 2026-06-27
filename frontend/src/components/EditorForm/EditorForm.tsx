import React from 'react';
import { useCV } from '@/context/CVContext';
import styles from './EditorForm.module.css';

const EditorForm = () => {
  const { 
    cvData, 
    updatePersonalInfo, 
    updateExperience, 
    addExperience, 
    removeExperience,
    updateEducation,
    addEducation,
    removeEducation,
    updateSkills 
  } = useCV();

  const handleSkillsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const skillsArray = e.target.value.split(',').map(s => s.trim()).filter(s => s);
    updateSkills(skillsArray);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.sectionTitle}>Personal Details</h2>
      <div className={styles.grid}>
        <div className={styles.inputGroup}>
          <label>Full Name</label>
          <input 
            type="text" 
            value={cvData.personalInfo.fullName} 
            onChange={e => updatePersonalInfo({ fullName: e.target.value })} 
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Job Title</label>
          <input 
            type="text" 
            value={cvData.personalInfo.jobTitle} 
            onChange={e => updatePersonalInfo({ jobTitle: e.target.value })} 
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Email</label>
          <input 
            type="email" 
            value={cvData.personalInfo.email} 
            onChange={e => updatePersonalInfo({ email: e.target.value })} 
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Phone</label>
          <input 
            type="text" 
            value={cvData.personalInfo.phone} 
            onChange={e => updatePersonalInfo({ phone: e.target.value })} 
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Address</label>
          <input 
            type="text" 
            value={cvData.personalInfo.address} 
            onChange={e => updatePersonalInfo({ address: e.target.value })} 
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Website / LinkedIn</label>
          <input 
            type="text" 
            value={cvData.personalInfo.website} 
            onChange={e => updatePersonalInfo({ website: e.target.value })} 
          />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label>Professional Summary</label>
        <textarea 
          rows={4}
          value={cvData.personalInfo.summary} 
          onChange={e => updatePersonalInfo({ summary: e.target.value })} 
        />
      </div>

      <hr className={styles.divider} />

      <h2 className={styles.sectionTitle}>Experience</h2>
      {cvData.experience.map((exp, index) => (
        <div key={exp.id} className={styles.itemCard}>
          <div className={styles.itemHeader}>
            <h3>Experience {index + 1}</h3>
            <button onClick={() => removeExperience(index)} className={styles.deleteBtn}>Remove</button>
          </div>
          <div className={styles.grid}>
            <div className={styles.inputGroup}>
              <label>Job Title</label>
              <input 
                type="text" 
                value={exp.title} 
                onChange={e => updateExperience(index, { title: e.target.value })} 
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Company</label>
              <input 
                type="text" 
                value={exp.company} 
                onChange={e => updateExperience(index, { company: e.target.value })} 
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Location</label>
              <input 
                type="text" 
                value={exp.location} 
                onChange={e => updateExperience(index, { location: e.target.value })} 
              />
            </div>
            <div className={styles.grid2}>
              <div className={styles.inputGroup}>
                <label>Start Date</label>
                <input 
                  type="text" 
                  value={exp.startDate} 
                  onChange={e => updateExperience(index, { startDate: e.target.value })} 
                />
              </div>
              <div className={styles.inputGroup}>
                <label>End Date</label>
                <input 
                  type="text" 
                  value={exp.endDate} 
                  onChange={e => updateExperience(index, { endDate: e.target.value })} 
                />
              </div>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>Description</label>
            <textarea 
              rows={4}
              value={exp.description} 
              onChange={e => updateExperience(index, { description: e.target.value })} 
            />
          </div>
        </div>
      ))}
      <button onClick={addExperience} className={styles.addBtn}>+ Add Experience</button>

      <hr className={styles.divider} />

      <h2 className={styles.sectionTitle}>Education</h2>
      {cvData.education.map((edu, index) => (
        <div key={edu.id} className={styles.itemCard}>
          <div className={styles.itemHeader}>
            <h3>Education {index + 1}</h3>
            <button onClick={() => removeEducation(index)} className={styles.deleteBtn}>Remove</button>
          </div>
          <div className={styles.grid}>
            <div className={styles.inputGroup}>
              <label>Degree</label>
              <input 
                type="text" 
                value={edu.degree} 
                onChange={e => updateEducation(index, { degree: e.target.value })} 
              />
            </div>
            <div className={styles.inputGroup}>
              <label>School</label>
              <input 
                type="text" 
                value={edu.school} 
                onChange={e => updateEducation(index, { school: e.target.value })} 
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Location</label>
              <input 
                type="text" 
                value={edu.location} 
                onChange={e => updateEducation(index, { location: e.target.value })} 
              />
            </div>
            <div className={styles.grid2}>
              <div className={styles.inputGroup}>
                <label>Start Date</label>
                <input 
                  type="text" 
                  value={edu.startDate} 
                  onChange={e => updateEducation(index, { startDate: e.target.value })} 
                />
              </div>
              <div className={styles.inputGroup}>
                <label>End Date</label>
                <input 
                  type="text" 
                  value={edu.endDate} 
                  onChange={e => updateEducation(index, { endDate: e.target.value })} 
                />
              </div>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>Description (Optional)</label>
            <textarea 
              rows={2}
              value={edu.description} 
              onChange={e => updateEducation(index, { description: e.target.value })} 
            />
          </div>
        </div>
      ))}
      <button onClick={addEducation} className={styles.addBtn}>+ Add Education</button>

      <hr className={styles.divider} />

      <h2 className={styles.sectionTitle}>Skills</h2>
      <div className={styles.inputGroup}>
        <label>Skills (comma separated)</label>
        <textarea 
          rows={3}
          value={cvData.skills.join(', ')} 
          onChange={handleSkillsChange}
          placeholder="e.g. Project Management, Public Relations, Teamwork"
        />
      </div>
    </div>
  );
};

export default EditorForm;
