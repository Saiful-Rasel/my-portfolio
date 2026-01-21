import { Request, Response } from "express";
import { uploadImage } from "../../utils/uploadImage";
import { projectService } from "./project.service";

const createProject = async (req: Request, res: Response) => {
  try {
    let imageUrl: string | null = null;

    if (req.file) {
      imageUrl = await uploadImage(req.file?.buffer);
    }

    let features: string[] = [];
    if (req.body.features) {
      features = req.body.features
        .split(" ")
        .map((feature: any) => feature.trim())
        .filter(Boolean);
    }

    const createProject = await projectService.createProject(
      req.body,
      features,
      imageUrl ?? ""
    );

    res.status(201).json({ success: true, createProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Blog creation failed" });
  }
};

const getProjectById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const singleProject = await projectService.getProjectById(id);
    res.status(201).json({ success: true, singleProject });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "single blog found failed" });
  }
};
const allProject = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const allProject = await projectService.allProject({ page, limit });
    res.status(201).json({ success: true, allProject });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "all project found failed" });
  }
};



export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; 

    let imageUrl: string | null = null;


    if (req.file) {
      imageUrl = await uploadImage(req.file.buffer);
    }

    // Parse features (space or comma-separated)
    let features: string[] = [];
    if (req.body.features) {
      features = req.body.features
        .split(/[,\s]+/) // handles both commas and spaces
        .map((feature: string) => feature.trim())
        .filter(Boolean);
    }

    const updatedProject = await projectService.updateProject(
      id as string,
      req.body,
      features,
      imageUrl
    );

    if (!updatedProject) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      updatedProject,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Project update failed" });
  }
};


const deleteProject = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteProject = projectService.deleteProject(id as string);
    res.status(201).json({ success: true });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "deleted single project faild" });
  }
};
export const projectController = {
  createProject,
    getProjectById,
    allProject,
    updateProject,
    deleteProject
};
