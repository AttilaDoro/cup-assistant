import React from 'react'
import PropTypes from 'prop-types'

export default class MatchRow extends React.Component {
    handleClick = (e) => {
        e.preventDefault()
        this.props.removeMatchRow(this.props.matchIndex)
    }
    render() {
        const { matchIndex } = this.props
        const matchNum = matchIndex + 1
        return (
            <div className="mt-4 ml-2 form-group row">
                <div className="col-1"></div>
                <label className="col-3 col-form-label" for={`${matchNum}RoundID`}>{`${matchNum}. mérkőzés ID`}</label>
                <input type="text" className="form-control col-4" id={ `${matchNum}RoundID` } />
                <a href="" className="mx-4 btn redefined-warning">{`${matchNum}. meccs ponttabla`}</a>
                <button className="mx-4 btn redefined-warning" onClick={this.handleClick}>TORLES</button>
            </div>
        )
    }
}

MatchRow.propTypes = {
    matchIndex: PropTypes.number,
}
