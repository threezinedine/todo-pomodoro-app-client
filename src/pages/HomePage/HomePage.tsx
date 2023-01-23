import React from "react"
import axios from "axios"
import {
    connect,
} from "react-redux"
import { 
    Navigate,
} from "react-router-dom"

import HomePageProps from "./HomePageProps"
import HomePageFullContext, {
    HomePageDataContext,
} from "./HomePageContext"
import { 
    TaskComponent, TaskComponentData,
} from "../../components"
import { 
    TOKEN_KEY,
} from "../../constants"
import {
    StoreAction,
    StoreState,
} from "../../stores"
import {
    addErrorAction,
    removeErrorAction,
} from "../../stores/error"


class HomePage extends React.Component<HomePageProps, HomePageFullContext> {
    state = {
        isNavigate: false,
        tasks: [],
        loginState: true,
        dispatch: (action: StoreAction): void => {
            console.log(action)
        },
    }

    navigateTo = (): void => {
        this.setState({
            isNavigate: true,
        }) 
    }

    componentDidMount(): void {
        const token = localStorage.getItem(TOKEN_KEY)
        const { dispatch } = this.props

        axios({
            method: 'GET',
            url: 'http://localhost:8000/tasks/current',
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                console.log(response)
                this.setState({
                    tasks: response.data
                })
            })
            .catch(() => {
                dispatch(addErrorAction("Cannot fetch data"))

                setTimeout(() => {
                    dispatch(removeErrorAction())
                }, 1000)
            })
    }

    render(): React.ReactNode {
        const { tasks, isNavigate } = this.state

        return (
            <>
                <div>
                    {
                        tasks.map((task: TaskComponentData, index: number):React.ReactNode => (
                            <TaskComponent 
                                key={index}
                                {...task}
                                onClick={(): void => {
                                    this.navigateTo()
                                }}
                            /> 
                        ))
                    }
                </div>
                { isNavigate && (<Navigate to="/pomodoro" replace={true} />) }
            </>
        )
    }
}


const mapHomePage = (state: StoreState): HomePageDataContext => {
    return {
        loginState: state.LoginReducer.loginState
    }
}


export default connect(mapHomePage)(HomePage)
