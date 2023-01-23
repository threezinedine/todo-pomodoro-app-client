import React from "react"


export default interface HeaderWrapperProps {
    children: React.ReactNode 
    navigate?: (route: string) => void
}
