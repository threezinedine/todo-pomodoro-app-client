import React from "react"

import { 
    CustomForm,
} from "../../components"


export default class RegisterPage extends React.Component {
    state = {
        errorMessage: ""
    }

    setMessage = (value: string): void => {
        this.setState({
            errorMessage: value
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
                                    validator: (value): boolean => value.length <= 4,
                                    message: "The username should have at least 4 characters.",
                                },
                                {
                                    validator: (value): boolean => value.length > 50,
                                    message: "The username should have maximum 50 characters.",
                                },
                                {
                                    message: "The username cannot contain the specical characters.",
                                    validator: (value): boolean => /[!@#$%^&*(),.?":{}|<>]/.test(value)
                                },
                            ],
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
                        {
                            name: "validator",
                            label: "Password Validator",
                            errors: [
                                {
                                    message: "The password does not match",
                                    validator: (value, fields): boolean => {
                                        let result = false 
                                        console.log(value, fields)

                                        fields.forEach((fields): void => {
                                            if (fields.name === "password") {
                                                result = fields.value !== value 
                                            }
                                        })

                                        return result
                                    }
                                }
                            ],
                            password: true,
                        },
                    ]}
                    onSubmit={(data): void => {
                        console.log(data)
                    }}
                    onSubmitError={(data): void => {
                        this.setMessage("Register error")

                        setTimeout(() => {
                            this.setMessage("")
                        }, 1000)
                    }}
                />
                <div>
                    { this.state.errorMessage }
                </div>
            </>
        ) 
    } 
}
