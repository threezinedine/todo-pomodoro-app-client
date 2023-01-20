import React from 'react'
import {
    RouterProvider,
} from 'react-router-dom'
import {
    Provider,
} from 'react-redux'

import router from './pages'
import store from './stores'


function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App
