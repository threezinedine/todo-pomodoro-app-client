import React from 'react'

import { 
    CustomForm,
} from './components'


function App() {
    return (
        <CustomForm 
            fields={[
                {
                    name: "username",
                    label: "Username",
                    errors: [{
                        message: "The username should have at least 4 characters.",
                        validator: (value) => value.length <= 4,
                    }]
                },
                {
                    name: "password",
                    label: "Password",
                    password: true,
                }
            ]}
            onSubmit={(data) => {
                console.log(data) 
            }}
        />
    )
}

export default App
