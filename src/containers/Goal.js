import { connect } from 'react-redux'
import GoalComponent from '../components/GoalComponent'
import { addProgress } from '../actions'
//to get goal of component?
  const mapStateToProps = state => {
    return {
      goal: state.goals[0]
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      onGoalProgress: goal => {
        dispatch(addProgress(goal, 5))
      }
    }
  }
   
  const Goal = connect(
    mapStateToProps,
    mapDispatchToProps
  )(GoalComponent);
   
  export default Goal