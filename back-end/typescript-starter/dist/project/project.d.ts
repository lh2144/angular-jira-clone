export declare const Project: {
    id: string;
    name: string;
    url: string;
    description: string;
    category: string;
    createdAt: string;
    updatedAt: string;
    users: {
        id: string;
        name: string;
        avatarUrl: string;
        projectId: string;
    }[];
    issues: {
        id: string;
        title: string;
        description: string;
        type: string;
        status: string;
        priority: string;
        listPosition: number;
        createdAt: string;
        updatedAt: string;
        reporterId: string;
        userIds: string[];
    }[];
};
