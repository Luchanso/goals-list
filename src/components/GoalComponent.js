import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';
import React from 'react';
import GoalInput from './GoalInput';

const GoalComponent = ({ goal, onGoalProgress }) => {
    let amountOfProgress;
    return (
        <div className="goal-component">
            <GoalInput onChange={(e, newValue) => amountOfProgress = newValue} />
            <FloatingActionButton onClick={() => {
                if (amountOfProgress) {
                    onGoalProgress(goal, Number(amountOfProgress))
                }
            }}>
                <ContentAdd />
            </FloatingActionButton>
        </div>
    );
}

GoalComponent.propTypes = {
    goal: PropTypes.shape({
        name: PropTypes.string.isRequired,
        progress: PropTypes.number.isRequired,
        threshold: PropTypes.number.isRequired
    }),
    onGoalProgress: PropTypes.func.isRequired
}

export default GoalComponent