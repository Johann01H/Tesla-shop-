import { tesloApi } from "@/api/teslo.api"
import type { AuthResponse } from "../interfaces/auth.response"

export const registerAction = async (email: string, fullName: string, password: string): Promise<AuthResponse> => {

    try {

        const { data } = await tesloApi.post('/auth/register', {
            email,
            fullName,
            password
        })

        console.log({ data })

        return data;

    } catch (error) {

        console.log(error)
        throw error

    }
} 