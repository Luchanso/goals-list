import { connect } from 'react-redux'

  const mapStateToProps = state => {
    return {
      goals: state.goals
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      onGoalProgress: (goal, progress) => {
        dispatch(addProgress(goal, progress))
      }
    }
  }
   
  const Goal = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Goal)
   
  export default Goal