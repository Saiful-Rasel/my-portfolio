import { prisma } from "../../config/db";
import { Project } from "../../types/type";

const createProject = async (
  payload: Project,
  features: string[],
  imageUrl: string
) => {
  const blog = await prisma.project.create({
    data: {
      title: payload.title,
      description: payload.description,
      thumbnail: imageUrl,
      liveLink: payload.liveLink,
      repoLink: payload.repoLink,
      features: features,
    },
  });
  return blog;
};

const getProjectById = async (id: string) => {
  const project = await prisma.project.findUnique({
    where: { id },
  });
  return project;
};

const allProject = async ({
  limit = 1,
  page = 10,
}: {
  limit?: number;
  page: number;
}) => {
  const skip = (page - 1) * limit;
  const project = await prisma.project.findMany({
    skip,
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });
  return project;
};



const updateProject = async (
  id: string,
  data: any,
  features: string[],
  imageUrl?: string | null
) => {
  const existingProject = await prisma.project.findUnique({ where: { id } });
  if (!existingProject) return null;

  const updatedProject = await prisma.project.update({
    where: { id },
    data: {
      title: data.title ?? existingProject.title,
      description: data.description ?? existingProject.description,
      liveLink: data.liveLink ?? existingProject.liveLink,
      repoLink: data.repoLink ?? existingProject.repoLink,
      features: features.length > 0 ? features : existingProject.features,
      thumbnail: imageUrl ?? existingProject.thumbnail,
    },
  });

  return updatedProject;
};


const deleteProject = async (id: string) => {
  return await prisma.project.delete({ where: { id } });
};

export const projectService = {
  createProject,
  getProjectById,
  allProject,
  updateProject,
  deleteProject,
};
