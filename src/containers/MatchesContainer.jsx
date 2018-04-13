import { connect } from 'react-redux'
import { toggleTodo, addNewMatch } from '../actions'
import Matches from '../components/Matches'

const mapStateToProps = ({ matches }) => ({
    matches,
})

const mapDispatchToProps = dispatch => ({
    addNewMatch: matchId => dispatch(addNewMatch(matchId)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Matches)
