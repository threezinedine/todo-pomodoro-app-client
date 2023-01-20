import React from "react"

import { 
    CustomForm,
} from "../../components"


export default class LoginPage extends React.Component {
    state = {
        message: ""
    }

    setMessage = (value: string): void => {
        this.setState({
            message: value
        })
    }

    render(): React.ReactNode {
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
                    }}
                    onSubmitError={(): void => {
                        this.setMessage("Login error")    

                        setTimeout(() => {
                            this.setMessage("")
                        }, 1000)
                    }}
                />
                <div>
                    { this.state.message }
                </div>
            </>
        )
    }
}
