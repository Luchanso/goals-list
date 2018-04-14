import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import { colors } from 'material-ui/styles';

const GoalInput = ({onChange}) => (
    <TextField
    inputStyle={{color: colors.white}}
    hintStyle={{color: colors.white}}
    maxLength="2"
    hintText="input number"
    onChange={onChange}
    />
)

GoalInput.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default GoalInput
