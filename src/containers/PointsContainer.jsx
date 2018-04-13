import { connect } from 'react-redux'
import Points from '../components/Points'

const mapStateToProps = ({ matches }) => ({
    matches,
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Points)
