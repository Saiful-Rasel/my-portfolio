export type Blog = {
  id: string;
  authorId: string;
  title: string;
  content: string;
  description: string | null;
  image: string;
  slug: string;
  tags: string[];
  published: boolean;
  createdAt: string; 
  updatedAt: string; 
  author:{id:string,name:string}
};
export type Props = {
  user: {
    name: string;
    email: string;
  
  };
};

export interface CreateBlogInput {
  title: string;
  content: string;
  slug: string;
  authorId: string;
  description: string;
  tags: string[];
}


export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  liveLink: string;
  repoLink: string;
  features: string[];
  createdAt: string; 
  updatedAt: string; 
};
