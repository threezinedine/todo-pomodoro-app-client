import React from "react"
import { 
    connect,
} from "react-redux"

import {
    StoreState,
} from "../../../stores"
import WrapperContext, {
    WrapperContextData,
} from "./WrapperContext"

import WrapperProps from "./WrapperProps"


class Wrapper extends React.Component<WrapperProps, WrapperContext> {
    render(): React.ReactNode {
        const { children, errors } = this.props

        return (
            <>
                <div>
                    { children }
                </div>
                <div>
                    { errors.join(", ") }
                </div>
            </>
        )
    }
}


const mapWrapper = (state: StoreState): WrapperContextData => {
    return {
        errors: state.ErrorReducer.errors,
        notifications: state.ErrorReducer.notifications,
    }
}


export default connect(mapWrapper)(Wrapper)
