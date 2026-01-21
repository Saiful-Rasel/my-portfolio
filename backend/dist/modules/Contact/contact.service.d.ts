export declare const contactService: {
    createMessage: (payload: {
        name: string;
        email: string;
        subject?: string;
        message: string;
    }) => Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        subject: string | null;
        message: string;
        reply: string | null;
        repliedAt: Date | null;
    }>;
    getAllMessages: () => Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        subject: string | null;
        message: string;
        reply: string | null;
        repliedAt: Date | null;
    }[]>;
    replyToMessage: (id: string, reply: string) => Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        subject: string | null;
        message: string;
        reply: string | null;
        repliedAt: Date | null;
    }>;
};
//# sourceMappingURL=contact.service.d.ts.map