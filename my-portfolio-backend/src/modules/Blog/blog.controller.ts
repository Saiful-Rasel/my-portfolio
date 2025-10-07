import { UpdateBlogInput } from "../../types/type";
import { uploadImage } from "../../utils/uploadImage";
import { blogService } from "./blog.service";
import { Request, Response } from "express";

const createBlog = async (req: Request, res: Response) => {
  try {
    const fileBuffer = req.file?.buffer;
    let image = "";

    if (req.file) {
      image = await uploadImage(req.file.buffer);
    }
    let tags: string[] = [];
    if (req.body.tags) {
      tags = req.body.tags
        .split(" ")
        .map((tag: any) => tag.trim())
        .filter(Boolean);
    }

    const blog = await blogService.createBlog(req.body, tags, fileBuffer);

    res.status(201).json({ success: true, blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Blog creation failed" });
  }
};

const getBlogById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const singleBlog = await blogService.getBlogById(id);
    res.status(201).json({ success: true, singleBlog });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "single blog found failed" });
  }
};
const allBlog = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const allBlog = await blogService.allBlog({ page, limit });
    res.status(201).json({ success: true, allBlog });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "single blog found failed" });
  }
};

const updateBlog = async (req: Request, res: Response) => {
  try {
    let { title, content, slug, published, description } = req.body || {};
    let tagsArr: string[] = [];
    const fileBuffer = req.file?.buffer || Buffer.from("");
    if (req.body?.tags) {
      tagsArr = req.body.tags
        .split(" ")
        .map((tag: any) => tag.trim())
        .filter(Boolean);
    }
    const input: UpdateBlogInput = {
      title: title,
      content: content,
      slug: slug,
      published: published,

      description: description,
      tags: tagsArr,
      ...(req.file && { image: req.file.buffer }),
    };
    const blogUpdate = await blogService.updateBlog(
      req.params.id as string,
      input
    );
    res.status(201).json({ success: true, blogUpdate });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "single blog updated failed" });
  }
};

const deleteBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteBlog = blogService.deleteBlog(id as string);
    res.status(201).json({ success: true });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "deleted single Blog faild" });
  }
};
export const blogController = {
  createBlog,
  getBlogById,
  allBlog,
  updateBlog,
  deleteBlog,
};
