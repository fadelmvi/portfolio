import profileData from "@/../content/data/profile.json";
import skillsData from "@/../content/data/skills.json";
import experienceData from "@/../content/data/experience.json";
import projectsData from "@/../content/data/projects.json";

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export function getBasePath(): string {
  return basePath;
}

export function getAssetPath(path: string): string {
  return `${basePath}${path}`;
}

export interface Profile {
  name: string;
  fullName: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  resumeUrl: string;
  available: boolean;
  social: {
    github: string;
    linkedin: string;
  };
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  featured: boolean;
  year: number;
  liveUrl: string | null;
  githubUrl: string | null;
  technologies: string[];
}

export function getProfile(): Profile {
  return profileData as Profile;
}

export function getSkills(): SkillsData {
  return skillsData as SkillsData;
}

export function getExperiences(): Experience[] {
  return experienceData.experiences as Experience[];
}

export function getProjects(): Project[] {
  return projectsData.projects as Project[];
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((p) => p.featured);
}
