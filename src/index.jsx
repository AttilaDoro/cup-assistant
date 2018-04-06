/* import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Main from './Main'

const store = createStore(todoApp)

ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById("root")
) */



/* import React from 'react'
import { createStore } from 'redux'
import todoApp from './reducers'
import Main from './Main'
 
const store = createStore(todoApp)
 
ReactDOM.render(
  <Main store={store} />,
  document.getElementById('root')
) */

import React from 'react'
import { createStore } from 'redux'
import ReactDOM from "react-dom";
import rootReducer from './reducers'
import Root from './components/Root'

const store = createStore(rootReducer)

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
)