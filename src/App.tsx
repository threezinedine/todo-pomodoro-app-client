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
                    value: "",
                },
                {
                    name: "password",
                    label: "Password",
                    value: "",
                }
            ]}
            onSubmit={(data) => {
                console.log(data) 
            }}
        />
    )
}

export default App
