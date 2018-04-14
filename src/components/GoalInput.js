import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import { colors } from 'material-ui/styles';

const GoalInput = ({value, onChange}) => (
    <TextField
    inputStyle={{color: colors.white, textAlign: "center"}}
    hintStyle={{color: colors.white}}
    maxLength="2"
    style = {{width: 56}}
    onChange={onChange}
    />
)

GoalInput.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default GoalInput
