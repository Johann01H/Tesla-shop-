/* eslint-disable @typescript-eslint/no-unused-vars */
import type { User } from "@/interfaces/user.interface";
import { create } from "zustand";
import { loginAction } from "../actions/login.action";
import { checkAuthAction } from "../actions/check-auth.action";
import { registerAction } from "../actions/register.action";


type AuthStatus = "Authenticated" | "not-authenticated" | "checking";

type AuthState = {

    //Properties
    user: User | null,
    token: string | null,
    AuthStatus: AuthStatus,
    isAdmin: () => boolean
    // Getters

    // Actions
    login: (email: string, password: string) => Promise<boolean>;
    register: (email: string, fullName: string, password: string) => Promise<boolean>
    logOut: () => void;
    checkOutStatus: () => Promise<boolean>

}


export const useAuthStore = create<AuthState>()((set, get) => ({
    // Implementación del store
    user: null,
    token: null,
    AuthStatus: "checking",

    login: async (email: string, password: string) => {

        console.log({ email, password })

        try {

            const data = await loginAction(email, password);
            localStorage.setItem('token', data.token);
            set({ user: data.user, token: data.token, AuthStatus: 'Authenticated' })
            return true;

        } catch (error) {

            localStorage.removeItem('token');
            set({ user: null, token: null, AuthStatus: 'not-authenticated' })
            return false

        }

    },

    register: async (email, fullName, password) => {

        try {

            const data = await registerAction(email, fullName, password)
            localStorage.setItem('token', data.token);
            set({ user: data.user, token: data.token, AuthStatus: 'Authenticated' })
            return true;

        } catch (error) {

            localStorage.removeItem('token');
            set({ user: null, token: null, AuthStatus: 'not-authenticated' })
            return false;

        }


    },



    logOut: () => {
        localStorage.removeItem('token');
        set({ user: null, token: null, AuthStatus: 'not-authenticated' })
    },

    checkOutStatus: async () => {
        try {
            const { user, token } = await checkAuthAction();
            set({
                user: user,
                token: token,
                AuthStatus: 'Authenticated'
            });
            return true
        } catch (error) {
            set({
                user: undefined,
                token: undefined,
                AuthStatus: 'not-authenticated'
            })
            return false
        }
    },

    isAdmin: () => {
        const roles = get().user?.roles || [];
        return roles.includes('admin');
    }

})) 