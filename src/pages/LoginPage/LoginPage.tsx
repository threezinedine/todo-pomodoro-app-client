import React from "react"
import { 
    Navigate,
} from "react-router-dom"
import { 
    connect,
} from "react-redux"
import axios from 'axios'

import { 
    CustomForm,
} from "../../components"
import { 
    changeLoginState,
} from "../../stores/login"
import { 
    StoreState,
} from "../../stores"
import LoginPageContext, {
    LoginPageDataContext,
} from "./LoginPageContext"
import LoginPageProps from "./LoginPageProps"
import {
    addErrorAction,
} from "../../stores/error"
import {
    removeErrorAction,
} from "../../stores/error/actions"


class LoginPage extends React.Component<LoginPageProps, LoginPageContext> {
    render(): React.ReactNode {
        const { message, loginState, dispatch } = this.props

        return (
            <>
                <CustomForm 
                    fields={[
                        {
                            name: "username",
                            label: "Username",
                            errors: [
                                {
                                    message: "The username should have at least 4 characters.",
                                    validator: (value): boolean => value.length <= 4,
                                }, 
                                {
                                    message: "The username should have maximum 50 characters.",
                                    validator: (value): boolean => value.length > 50,
                                },
                                {
                                    message: "The username cannot contain the specical characters.",
                                    validator: (value): boolean => /[!@#$%^&*(),.?":{}|<>]/.test(value)
                                },
                            ]
                        },
                        {
                            name: "password",
                            label: "Password",
                            errors: [
                                {
                                    message: "The password should have at least 4 characters.",
                                    validator: (value): boolean => value.length <= 4,
                                },
                                {
                                    message: "The password should have maximum 50 characters.",
                                    validator: (value): boolean => value.length > 50,
                                }
                            ],
                            password: true,
                        },
                    ]}
                    onSubmit={(fields):void => {
                        const username: string = fields.reduce((prev, field) => {
                            if (field.name === "username")
                                return field.value
                            return prev
                        }, "")

                        const password: string = fields.reduce((prev, field) => {
                            if (field.name === "password")
                                return field.value
                            return prev
                        }, "")

                        axios({
                            method: 'post',
                            url: "http://localhost:8000/users/login",
                            data: {
                                username, 
                                password,
                            }
                        })
                            .then(response => {
                                if (response.status === 200) {
                                    dispatch(changeLoginState(true))
                                    localStorage.setItem("token", response.data.token)
                                } 
                                return response.data
                            })
                            .catch(() => {
                                dispatch(addErrorAction("Unauthorized"))

                                setTimeout(() => {
                                    dispatch(removeErrorAction())
                                }, 1000)
                            })
                    }}
                    onSubmitError={(): void => {
                        dispatch(addErrorAction("Login error"))

                        setTimeout(() => {
                            dispatch(removeErrorAction())
                        }, 1000)
                    }}
                />
                <div>
                    { message }
                </div>
                {
                    loginState && (<Navigate to="/" replace={true} />)
                }
            </>
        )
    }
}


const mapLoginPageState = (state: StoreState): LoginPageDataContext => {
    return {
        message: state.ErrorReducer.errors.join(", "),
        loginState: state.LoginReducer.loginState
    }
}


export default connect(mapLoginPageState)(LoginPage)
