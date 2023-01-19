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
                        errors: [{
                            message: "The username should have at least 4 characters.",
                            validator: (value): boolean => value.length <= 4,
                        }]
                    },
                    {
                        name: "password",
                        label: "Password",
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
