import React, {
    useState,
} from 'react'

import { 
    CustomForm,
} from './components'


function App() {
    const [message, setMessage] = useState("")

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
                    }
                ]}
                onSubmit={(data):void => {
                    console.log(data) 
                }}
                onSubmitError={(): void => {
                    setMessage("Login error")    

                    setTimeout(() => {
                        setMessage("")
                    }, 3000)
                }}
            />
            <div>
                { message }
            </div>
        </>
    )
}

export default App
