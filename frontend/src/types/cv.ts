export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface CVData {
  personalInfo: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    address: string;
    website: string;
    summary: string;
  };
  experience: Experience[];
  education: Education[];
  skills: string[];
}
