import { prisma } from "../../config/db";
import { CreateBlogInput, UpdateBlogInput } from "../../types/type";
import { generateSlug } from "../../utils/slug";
import { uploadImage } from "../../utils/uploadImage";

const createBlog = async (
  payload: CreateBlogInput,
  tags: string[],
  fileBuffer: Buffer | undefined
) => {
  let image: string | null = null;

  if (fileBuffer) {
    image = await uploadImage(fileBuffer);
  }

  const blog = await prisma.blog.create({
    data: {
      title: payload.title,
      content: payload.content,
      slug: generateSlug(payload.title),
      image: image,
      authorId: payload.authorId,
      description: payload.description,
      tags: tags || [],
    },
  });
  return blog;
};

const getBlogById = async (id: string) => {
  const blog = await prisma.blog.findUnique({
    where: { id },
  });
  return blog;
};

const allBlog = async ({
  limit = 1,
  page = 10,
}: {
  limit?: number;
  page: number;
}) => {
  const skip = (page - 1) * limit;
  const total = await prisma.blog.count();
  const blog = await prisma.blog.findMany({
    skip,
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: {
        select: { id: true, name: true },
      },
    },
  });
  return {
    blog,
    total,
  };
};

const updateBlog = async (id: string, input: UpdateBlogInput) => {
  const updateData: any = { ...input };

  if (input.image) {
    updateData.image = await uploadImage(input.image);
  }
  if (input.title) {
    updateData.slug = generateSlug(input.title);
  }
  const updatedBlog = await prisma.blog.update({
    where: { id },
    data: updateData,
  });

  return updatedBlog;
};

const deleteBlog = async (id: string) => {
  const blog = await prisma.blog.findUnique({ where: { id } });
  if (!blog) {
    return null;
  }

  return await prisma.blog.delete({ where: { id } });
};

export const blogService = {
  createBlog,
  getBlogById,
  allBlog,
  updateBlog,
  deleteBlog,
};
