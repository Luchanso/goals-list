
import React from 'react'
import PropTypes from 'prop-types'
import Goal from './GoalComponent'
 
const GoalsListComponent = ({ goals, onGoalCreate, onGoalProgress }) => (
  <ul>
    {
      goals.map((goal, index) => (
      <Goal goal={goal} onGoalProgress={onGoalProgress}/>
    ))}
  </ul>
)
 
GoalsListComponent.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
      threshold: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onGoalCreate: PropTypes.func.isRequired
}
 
export default GoalsListComponent