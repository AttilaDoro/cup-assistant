import { connect } from 'react-redux'
import { addNewMatch, removeMatchRow } from '../actions'
import Matches from '../components/Matches'

const mapStateToProps = ({ matches }) => ({
    matches,
})

const mapDispatchToProps = dispatch => ({
    addNewMatch: () => dispatch(addNewMatch()),
    removeMatchRow: matchIndex => dispatch(removeMatchRow(matchIndex)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Matches)
