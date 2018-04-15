import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import React from 'react';
import PropTypes from 'prop-types';

const GoalAdd = ({ onClick, value }) => {
    return (<FloatingActionButton onClick={() => onClick(value)}>
        <i>+{value}</i>
    </FloatingActionButton>);
};

GoalAdd.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}

export default GoalAdd;