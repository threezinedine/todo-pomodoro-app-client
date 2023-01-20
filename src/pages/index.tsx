import React from 'react'
import {
    createBrowserRouter,
} from 'react-router-dom'

import LoginPage from "./LoginPage"
import RegisterPage from './RegisterPage'
import HomePage from './HomePage'


const router = createBrowserRouter([
    {
        path: '/',
        element: (<HomePage />),
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
