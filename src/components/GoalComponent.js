import React from 'react'
import PropTypes from 'prop-types'

const GoalComponent = (goal, onGoalProgress) => (
    <div>
        <button onClick={() => goal.onGoalProgress(goal.goal)}>
            Push me
        </button>
    </div>
)

GoalComponent.propTypes = {
    goal: PropTypes.shape({
        name: PropTypes.string.isRequired,
        progress: PropTypes.number.isRequired,
        threshold: PropTypes.number.isRequired
    }),
    onGoalProgress: PropTypes.func.isRequired
}

export default GoalComponent