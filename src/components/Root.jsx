import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import Matches from './Matches'
import MatchesContainer from '../containers/MatchesContainer'
 
const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={MatchesContainer} />
    </BrowserRouter>
  </Provider>
)
 
// <Route path="/:filter?" component={App} />
export default Root