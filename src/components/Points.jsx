import React from 'react'
import PropTypes from 'prop-types'
import PointsForKillRow from './PointForKillRow'

export default class Points extends React.Component {
    render() {
        const { points, updatePointsForKillValue } = this.props
        const { pointForKill } = points
        return (
            <div className="card text-white my-5 transparent-bg">
                <h5 className="card-header bottom-white title">Pontszámok megadása</h5>
                <div className="card-body bottom-white">
                    <h6 className="card-subtitle mb-2 text-muted">A killekhez és helyezésekhez különböző pontszám adható meg.</h6>
                    <PointsForKillRow updatePointsForKillValue={updatePointsForKillValue} pointForKill={pointForKill} />
                    <div className="mt-4 ml-2 form-group row">
                        <div className="col-1"></div>
                        <label className="col-4 col-form-label" for="1stPlacePoint">1. helyért járó pontszám</label>
                        <input type="text" className="form-control col-1" id="1stPlacePoint" />
                    </div>
                </div>
            </div>
        )
    }
}

Points.propTypes = {
    points: PropTypes.object,
    updatePointsForKillValue: PropTypes.func,
}
