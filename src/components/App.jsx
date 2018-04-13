import React from 'react'
import MatchesContainer from '../containers/MatchesContainer'

export default class App extends React.Component {
  render() {
    return (
      <main role="main">
        <div class="row my-5">
          <div class="col">
          </div>
          <div class="col-6">
          </div>
          <div class="col">
          </div>
        </div>
        <div class="row roboto">
          <div class="col">
          </div>
          <div class="col-6">
            <form>
              <MatchesContainer />
            </form>
          </div>
          <div class="col">
          </div>
        </div>
      </main>
    )
  }
}
