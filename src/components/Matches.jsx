import React from 'react'
import PropTypes from 'prop-types'
import MatchRow from './MatchRow'

export default class Matches extends React.Component {
    handleClick = () => this.props.addNewMatch(5)
    render() {
        const { matches } = this.props
        return (
            <div className="card text-white my-5 transparent-bg">
                <h5 className="card-header bottom-white title">3. Mérkőzések</h5>
                <div className="card-body bottom-white">
                    <h6 className="card-subtitle mb-2 text-muted">A kupán lezajló mérkőzésekhez ID-t kell megadni, amivel a rendszer nyomon követi az eredményeket és legenerálja a ponttáblázatokat.</h6>
                    { matches.map((match, index) => <MatchRow matchIndex={index} />) }
                </div>
                <button onClick={this.handleClick}>MAJOM</button>
            </div>
        )
    }
}

Matches.propTypes = {
    matches: PropTypes.arrayOf(PropTypes.object),
}
