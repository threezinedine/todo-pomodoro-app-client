import React from "react"
import axios from "axios"
import {
    connect,
} from "react-redux"

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


class HomePage extends React.Component<HomePageProps, HomePageFullContext> {
    state = {
        tasks: [],
        loginState: true,
        dispatch: (action: StoreAction) => {
            console.log(action)
        },
    }

    componentDidMount() {
        const token = localStorage.getItem(TOKEN_KEY)

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
            .catch(err => {
                console.log(err)
            })
    }

    render(): React.ReactNode {
        const { tasks } = this.state

        return (
            <div>
                {
                    tasks.map((task: TaskComponentData, index: number):React.ReactNode => (
                        <TaskComponent 
                            key={index}
                            {...task}
                            onClick={() => {
                                console.log("Here")
                            }}
                        /> 
                    ))
                }
            </div>
        )
    }
}


const mapHomePage = (state: StoreState): HomePageDataContext => {
    return {
        loginState: state.LoginReducer.loginState
    }
}


export default connect(mapHomePage)(HomePage)
