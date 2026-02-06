import { lazy } from "react";
import { createBrowserRouter, createHashRouter, Navigate } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { GenderPage, HomePage, ProductPage } from './shop/pages'
import { LoginPage, RegisterPage } from './auth/pages'
import { DashBoardPage } from "./admin/pages/dashboard/DashBoardPage";
import { AdminProductPage, AdminProductsPage } from "./admin/pages";
import { AdminRoute, NotAuthenticatedRoute } from "./components/routes/ProtectedRoutes";

const AdminLayout = lazy(() => import("./admin/layouts/AdminLayout"));
const AuthLayout = lazy(() => import("./auth/layouts/AuthLayout"));

export const appRouter = createHashRouter([

    // Main Routes
    {
        path: '/',
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'product/:idSlug',
                element: <ProductPage />
            },
            {
                path: 'gender/:gender',
                element: <GenderPage />
            }
        ]
    },
    // Auth Routes
    {
        path: '/auth',
        element:
            <NotAuthenticatedRoute>
                <AuthLayout />
            </NotAuthenticatedRoute>,
        children: [
            {
                index: true,
                element: <Navigate to="login" />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }

        ]
    },
    // Admin Routes
    {
        path: '/admin',
        element:
            <AdminRoute>
                <AdminLayout />
            </AdminRoute>,
        children: [
            {
                index: true,
                element: <DashBoardPage />
            },
            {
                path: 'products',
                element: <AdminProductsPage />
            },
            {
                path: 'products/:id',
                element: <AdminProductPage />
            },
        ]
    },
    {
        path: "*",
        element: <Navigate to="/" />
    }
]) 