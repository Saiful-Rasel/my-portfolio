import { Request, Response } from "express";
export declare const updateProject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const projectController: {
    createProject: (req: Request, res: Response) => Promise<void>;
    getProjectById: (req: Request, res: Response) => Promise<void>;
    allProject: (req: Request, res: Response) => Promise<void>;
    updateProject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteProject: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=project.controller.d.ts.map