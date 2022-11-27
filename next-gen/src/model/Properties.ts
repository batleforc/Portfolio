export interface Properties {
  name: string;
  cvUrl: string;
  attributes: string[];
  media: Media[];
  about: string[];
  tech: Tech[];
  exp: Experience[];
  project: Project[];
}

export interface Media {
  label: string;
  icon: string;
  link: string;
}

export interface Tech {
  label: string;
  icon: TechIcon[];
  categorie: TechCategory[];
}

export interface TechIcon {
  icon: string;
  label: string;
}

export interface TechCategory {
  label: string;
  list: string[];
  horizontal: boolean;
}

export interface Experience {
  label: string;
  type: string;
  from: string;
  to: string;
  location: string;
  where: string;
  description: string;
  icon: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string[];
  shortDescription: string;
  tag: string[];
  status: string;
  techno: ProjectTechno[];
  link: ProjectLink[];
}

export interface ProjectTechno {
  label: string;
  content: string[];
}
export interface ProjectLink {
  label: string;
  link: string;
}
