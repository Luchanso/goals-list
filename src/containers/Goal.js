import { connect } from 'react-redux'
import GoalComponent from '../components/GoalComponent'
import { addProgress } from '../actions'
//to get goal of component?
  const mapStateToProps = state => {
    return {
      goal: state.goal
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      onGoalProgress: (goal, progress) => {
        dispatch(addProgress(goal, progress))
      }
    }
  }
   
  // const Goal = connect(
  //   mapStateToProps,
  //   mapDispatchToProps
  // )(GoalComponent);
  //  
  export default Goal