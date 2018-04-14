import React from 'react'
import PropTypes from 'prop-types'
import PointsForKillRow from './PointForKillRow'
import PointForPositionRow from './PointForPositionRow'

export default class Points extends React.Component {
    handleClick = (e) => {
        e.preventDefault()
        this.props.addNewPointForPositionRow()
    }
    render() {
        const { points, updatePointsForKillValue, removePointForPositionRow, updatePointForPositionValue } = this.props
        const { pointForKill, pointsForPositions } = points
        return (
            <div className="card text-white my-5 transparent-bg">
                <h5 className="card-header bottom-white title">Pontszámok megadása</h5>
                <div className="card-body bottom-white">
                    <h6 className="card-subtitle mb-2 text-muted">A killekhez és helyezésekhez különböző pontszám adható meg.</h6>
                    <PointsForKillRow updatePointsForKillValue={updatePointsForKillValue} pointForKill={pointForKill} />
                    { pointsForPositions.map((pos, index) => <PointForPositionRow posIndex={index} killValue={pos.killValue} removePointForPositionRow={removePointForPositionRow} updatePointForPositionValue={updatePointForPositionValue} />) }
                </div>
                <button onClick={this.handleClick}>MAJOM</button>
            </div>
        )
    }
}

Points.propTypes = {
    points: PropTypes.object,
    updatePointsForKillValue: PropTypes.func,
    removePointForPositionRow: PropTypes.func,
    updatePointForPositionValue: PropTypes.func,
    addNewPointForPositionRow: PropTypes.func,
}
