
export interface Course {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export interface BusinessIdea {
  title: string;
  description: string;
  ai_tools: string[];
}
