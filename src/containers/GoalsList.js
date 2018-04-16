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
      onGoalProgress: (goal, progress) => {
        dispatch(addProgress(goal, progress))
      }
    }
  }
   
  const GoalsList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(GoalsListComponent)
   
  export default GoalsList