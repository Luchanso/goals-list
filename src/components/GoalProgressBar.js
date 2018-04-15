import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import PropTypes from 'prop-types';
import LinearProgress from 'material-ui/LinearProgress'
import '../css/goal.css'

//CSS не работает здесь ): как пофиксить? 
const style = {
    backgroundColor: "#a3e2f3",
    backgroundClip: "padding-box",
    overflow: "hidden",
    borderRadius: 100,
    height: 25,
    margin: 5
}

const GoalProgressBar = ({goal}) => (
    <LinearProgress style={style} className="progress-bar" mode="determinate" max={goal.threshold} value={goal.progress} />
);

GoalProgressBar.propTypes = {
    goal: PropTypes.shape({
        progress: PropTypes.number.isRequired,
        threshold: PropTypes.number.isRequired
    })
}


export default GoalProgressBar;