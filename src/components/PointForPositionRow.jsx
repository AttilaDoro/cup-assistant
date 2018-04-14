import React from 'react'
import PropTypes from 'prop-types'

export default class PointForPositionRow extends React.Component {
    handleClick = (e) => {
        e.preventDefault()
        this.props.removePointForPositionRow(this.props.posIndex)
    }
    handleChange = (e) => this.props.updatePointForPositionValue(this.props.posIndex, parseInt(e.target.value, 10))
    render() {
        const { posIndex, killValue } = this.props
        const posNumber = posIndex + 1
        return (
            <div className="mt-4 ml-2 form-group row">
                <div className="col-1"></div>
                <label className="col-4 col-form-label" for={`${posNumber}stPlacePoint`}>{`${posNumber}. helyért járó pontszám`}</label>
                <input type="text" className="form-control col-1" id={`${posNumber}stPlacePoint`} value={killValue} onChange={this.handleChange} />
                <button className="mx-4 btn redefined-warning" onClick={this.handleClick}>TORLES</button>
            </div>
        )
    }
}

PointForPositionRow.propTypes = {
    posIndex: PropTypes.number,
    killValue: PropTypes.number,
    removePointForPositionRow: PropTypes.func,
    updatePointForPositionValue: PropTypes.func,
}
