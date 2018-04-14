import { connect } from 'react-redux'
import { updatePointsForKillValue, removePointForPositionRow, updatePointForPositionValue, addNewPointForPositionRow } from '../actions'
import Points from '../components/Points'

const mapStateToProps = ({ points }) => ({
    points,
})

const mapDispatchToProps = dispatch => ({
    updatePointsForKillValue: killValue => dispatch(updatePointsForKillValue(killValue)),
    removePointForPositionRow: posIndex => dispatch(removePointForPositionRow(posIndex)),
    updatePointForPositionValue: (posIndex, killValue) => dispatch(updatePointForPositionValue(posIndex, killValue)),
    addNewPointForPositionRow: () => dispatch(addNewPointForPositionRow()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Points)
