export interface User {
    id: string;
    email: string;
    fullName: string;
    password: string,
    address: string,
    isActive: boolean;
    roles: string[];
}
