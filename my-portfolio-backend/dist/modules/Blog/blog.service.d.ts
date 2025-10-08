import { CreateBlogInput, UpdateBlogInput } from "../../types/type";
export declare const blogService: {
    createBlog: (payload: CreateBlogInput, tags: string[], fileBuffer: Buffer | undefined) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        content: string;
        slug: string;
        image: string | null;
        tags: string[];
        published: boolean;
        authorId: string | null;
    }>;
    getBlogById: (id: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        content: string;
        slug: string;
        image: string | null;
        tags: string[];
        published: boolean;
        authorId: string | null;
    } | null>;
    allBlog: ({ limit, page, }: {
        limit?: number;
        page: number;
    }) => Promise<{
        blog: ({
            author: {
                id: string;
                name: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            content: string;
            slug: string;
            image: string | null;
            tags: string[];
            published: boolean;
            authorId: string | null;
        })[];
        total: number;
    }>;
    updateBlog: (id: string, input: UpdateBlogInput) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        content: string;
        slug: string;
        image: string | null;
        tags: string[];
        published: boolean;
        authorId: string | null;
    }>;
    deleteBlog: (id: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        content: string;
        slug: string;
        image: string | null;
        tags: string[];
        published: boolean;
        authorId: string | null;
    }>;
};
//# sourceMappingURL=blog.service.d.ts.map