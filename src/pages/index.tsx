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
    HeaderWrapper,
} from './layouts'


const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Wrapper>
                <HeaderWrapper>
                    <AuthenRouteWrapper
                        onAuthComponent={<HomePage />}
                        offAuthRoute="/login"
                    />
                </HeaderWrapper>
            </Wrapper>
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
