export interface UpdateBlogInput {
  title: string;
  content: string;
  slug: string;
  published: boolean;
  image?  : Buffer;
  description: string;
  tags: string[];
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface CreateBlogInput {
  title: string;
  content: string;
  slug: string;
  authorId: string;
  description: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  liveLink: string;
  repoLink: string;
  features: string[];
}


