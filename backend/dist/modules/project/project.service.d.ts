import { Project } from "../../types/type";
export declare const projectService: {
    createProject: (payload: Project, features: string[], imageUrl: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        thumbnail: string | null;
        liveLink: string;
        repoLink: string;
        features: string[];
    }>;
    getProjectById: (id: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        thumbnail: string | null;
        liveLink: string;
        repoLink: string;
        features: string[];
    } | null>;
    allProject: ({ limit, page, }: {
        limit?: number;
        page: number;
    }) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        thumbnail: string | null;
        liveLink: string;
        repoLink: string;
        features: string[];
    }[]>;
    updateProject: (id: string, data: any, features: string[], imageUrl?: string | null) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        thumbnail: string | null;
        liveLink: string;
        repoLink: string;
        features: string[];
    } | null>;
    deleteProject: (id: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        thumbnail: string | null;
        liveLink: string;
        repoLink: string;
        features: string[];
    }>;
};
//# sourceMappingURL=project.service.d.ts.map