import React from 'react'
import { createStore } from 'redux'
import ReactDOM from "react-dom"
import rootReducer from './reducers'
import Root from './components/Root'

const store = createStore(rootReducer)

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
)