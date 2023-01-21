import React from "react"

import AuthenRouteWrapperContext from "./AuthenRouteWrapperContext"


export default interface AuthenRouteWrapperProps extends AuthenRouteWrapperContext {
    onAuthComponent: React.ReactNode
    offAuthRoute: string
}
