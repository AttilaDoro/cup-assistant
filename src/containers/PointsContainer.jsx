import { connect } from 'react-redux'
import { updatePointsForKillValue } from '../actions'
import Points from '../components/Points'

const mapStateToProps = ({ points }) => ({
    points,
})

const mapDispatchToProps = dispatch => ({
    updatePointsForKillValue: killValue => dispatch(updatePointsForKillValue(killValue))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Points)
