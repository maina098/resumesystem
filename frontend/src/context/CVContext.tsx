'use client';

import React, { createContext, useContext, useState } from 'react';
import { CVData } from '@/types/cv';

interface CVContextType {
  cvData: CVData;
  updatePersonalInfo: (data: Partial<CVData['personalInfo']>) => void;
  updateExperience: (index: number, data: Partial<CVData['experience'][0]>) => void;
  addExperience: () => void;
  removeExperience: (index: number) => void;
  updateEducation: (index: number, data: Partial<CVData['education'][0]>) => void;
  addEducation: () => void;
  removeEducation: (index: number) => void;
  updateSkills: (skills: string[]) => void;
}

const defaultCVData: CVData = {
  personalInfo: {
    fullName: 'Olivia Wilson',
    jobTitle: 'Marketing Manager',
    email: 'hello@reallygreatsite.com',
    phone: '+123-456-7890',
    address: '123 Anywhere St., Any City',
    website: 'www.reallygreatsite.com',
    summary: 'Experienced and results-driven Marketing Manager with a proven track record in developing and executing successful marketing strategies. I am seeking a challenging role where I can contribute my skills in strategic planning, team leadership, and creative problem-solving to achieve business objectives.',
  },
  experience: [
    {
      id: '1',
      title: 'Marketing Manager & Specialist',
      company: 'Borcelle Studio',
      location: 'Any City',
      startDate: '2020',
      endDate: 'PRESENT',
      description: 'Led the development and implementation of comprehensive marketing strategies that resulted in a 20% increase in brand visibility within the first year.\nSuccessfully launched and managed multiple cross-channel campaigns, including digital marketing, social media, and traditional advertising, resulting in improved customer acquisition and retention rates.',
    },
    {
      id: '2',
      title: 'Marketing Manager & Specialist',
      company: 'Fauget Studio',
      location: 'Any City',
      startDate: '2015',
      endDate: '2020',
      description: 'Conducted market research to identify emerging trends and consumer preferences, providing valuable insights for product development and positioning.\nOversaw the creation of engaging content for various platforms, collaborating with internal teams and external agencies to ensure brand consistency and relevance.',
    }
  ],
  education: [
    {
      id: '1',
      degree: 'Master of Business Management',
      school: 'Borcelle University',
      location: 'Any City',
      startDate: '2019',
      endDate: '2020',
      description: '',
    },
    {
      id: '2',
      degree: 'Bachelor of Business Management',
      school: 'Borcelle University',
      location: 'Any City',
      startDate: '2015',
      endDate: '2019',
      description: 'GPA: 3.8/4.0',
    }
  ],
  skills: [
    'Project Management',
    'Public Relations',
    'Teamwork',
    'Time Management',
    'Leadership',
    'Effective Communication',
    'Critical Thinking'
  ]
};

const CVContext = createContext<CVContextType | undefined>(undefined);

export const CVProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cvData, setCvData] = useState<CVData>(defaultCVData);

  const updatePersonalInfo = (data: Partial<CVData['personalInfo']>) => {
    setCvData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...data },
    }));
  };

  const updateExperience = (index: number, data: Partial<CVData['experience'][0]>) => {
    setCvData((prev) => {
      const newExp = [...prev.experience];
      newExp[index] = { ...newExp[index], ...data };
      return { ...prev, experience: newExp };
    });
  };

  const addExperience = () => {
    setCvData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        { id: Date.now().toString(), title: '', company: '', location: '', startDate: '', endDate: '', description: '' }
      ]
    }));
  };

  const removeExperience = (index: number) => {
    setCvData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const updateEducation = (index: number, data: Partial<CVData['education'][0]>) => {
    setCvData((prev) => {
      const newEdu = [...prev.education];
      newEdu[index] = { ...newEdu[index], ...data };
      return { ...prev, education: newEdu };
    });
  };

  const addEducation = () => {
    setCvData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { id: Date.now().toString(), degree: '', school: '', location: '', startDate: '', endDate: '', description: '' }
      ]
    }));
  };

  const removeEducation = (index: number) => {
    setCvData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const updateSkills = (skills: string[]) => {
    setCvData((prev) => ({
      ...prev,
      skills,
    }));
  };

  return (
    <CVContext.Provider value={{
      cvData,
      updatePersonalInfo,
      updateExperience,
      addExperience,
      removeExperience,
      updateEducation,
      addEducation,
      removeEducation,
      updateSkills
    }}>
      {children}
    </CVContext.Provider>
  );
};

export const useCV = () => {
  const context = useContext(CVContext);
  if (context === undefined) {
    throw new Error('useCV must be used within a CVProvider');
  }
  return context;
};
