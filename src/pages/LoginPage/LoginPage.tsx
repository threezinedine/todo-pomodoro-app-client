import React from "react"
import { 
    Navigate,
} from "react-router-dom"
import { 
    connect,
} from "react-redux"

import { 
    CustomForm,
} from "../../components"
import { 
    changeLoginState,
    LoginState,
    LoginAction,
} from "../../stores/login"
import LoginPageContext, {
    LoginPageDataContext,
} from "./LoginPageContext"
import LoginPageProps from "./LoginPageProps"


class LoginPage extends React.Component<LoginPageProps, LoginPageContext> {
    state = {
        message: "",
        loginState: false,
        dispatch: (action: LoginAction):void => {
            console.log(action)
        }
    }

    constructor(props: LoginPageProps) {
        super(props)

        console.log(this.state)
    }
    
    setMessage = (value: string): void => {
        this.setState({
            message: value
        })
    }

    render(): React.ReactNode {
        const { loginState, dispatch } = this.props
        const { message } = this.state

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
                    onSubmit={(data):void => {
                        console.log(data) 
                        dispatch(changeLoginState(true))
                    }}
                    onSubmitError={(): void => {
                        this.setMessage("Login error")    

                        setTimeout(() => {
                            this.setMessage("")
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


const mapLoginPageState = (state: LoginState): LoginPageDataContext => {
    return {
        message: "",
        loginState: state.loginState
    }
}


export default connect(mapLoginPageState)(LoginPage)
