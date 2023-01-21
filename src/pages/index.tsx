import React from 'react'
import {
    createBrowserRouter,
} from 'react-router-dom'

import LoginPage from "./LoginPage"
import RegisterPage from './RegisterPage'
import HomePage from './HomePage'
import { 
    AuthenRouteWrapper,
    Wrapper,
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
        element: (
            <Wrapper>
                <LoginPage />
            </Wrapper>
        ),
    }, 
    {
        path: "/register",
        element: (
            <Wrapper>
                <RegisterPage />
            </Wrapper>
        ),
    }
])


export default router
