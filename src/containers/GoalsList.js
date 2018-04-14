import { connect } from 'react-redux'
import { createGoal, addProgress } from '../actions';
import GoalsListComponent from '../components/GoalsListComponent';

  const mapStateToProps = state => {
    return {
      goals: state.goals
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      onGoalCreate: (name, progress, threshold) => {
        dispatch(createGoal(name, progress, threshold))
      },
      onGoalProgress: (goal) => {
        dispatch(addProgress(goal, 5))
      }
    }
  }
   
  const GoalsList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(GoalsListComponent)
   
  export default GoalsList