import React from 'react'
import {
    createBrowserRouter,
} from 'react-router-dom'

import LoginPage from "./LoginPage"
import RegisterPage from './RegisterPage'
import HomePage from './HomePage'
import { 
    AuthenRouteWrapper,
} from './layouts'


const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <AuthenRouteWrapper
                onAuthComponent={<HomePage />}
                offAuthRoute="/login"
            />
        ),
    },
    {
        path: "/login",
        element: (<LoginPage />),
    }, 
    {
        path: "/register",
        element: (<RegisterPage />)
    }
])


export default router
