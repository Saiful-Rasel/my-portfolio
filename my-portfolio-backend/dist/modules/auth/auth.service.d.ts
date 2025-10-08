import { LoginPayload } from "../../types/type";
export declare const authService: {
    loginAdmin: (payload: LoginPayload) => Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string;
            name: string;
            role: import(".prisma/client").$Enums.Role;
            isVerified: boolean;
            auth: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map