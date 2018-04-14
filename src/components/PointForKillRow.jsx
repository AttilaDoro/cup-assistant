import React from 'react'
import PropTypes from 'prop-types'

export default class PointForKillRow extends React.Component {
    handleChange = (e) => this.props.updatePointsForKillValue(e.target.value)
    render() {
        const { pointForKill } = this.props
        return (
            <div className="mt-5 ml-2 form-group row">
                <div className="col-1"></div>
                <label className="col-4 col-form-label" for="killPoint">Killért járó pontszám</label>
                <input type="text" className="form-control col-1" id="killPoint" value={pointForKill} onChange={this.handleChange} />
            </div>
        )
    }
}

PointForKillRow.propTypes = {
    updatePointsForKillValue: PropTypes.func,
    pointForKill: PropTypes.number,
}
