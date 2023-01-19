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
