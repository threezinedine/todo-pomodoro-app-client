import React from "react"

import WrapperContext from "./WrapperContext"


export default interface WrapperProps extends WrapperContext {
    children: React.ReactNode
}
