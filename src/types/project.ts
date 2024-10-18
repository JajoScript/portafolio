interface Project {
  title: string;
  description: string;
  links: {
    github: string;
    deploy: string;
  }
  image: string;
  tags: string[];
  isPublic: boolean;
}

export type { Project }

