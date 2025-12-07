import type { User } from "@/interfaces/user.interface";

// login, register, status
export interface AuthResponse {
    user: User
    token: string;
}
