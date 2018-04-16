import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import { colors } from 'material-ui/styles';

const GoalInput = ({value, onChange}) => (
    <TextField
        name="goal-input"
        inputStyle={{color: colors.white, textAlign: "center"}}
        hintStyle={{color: colors.white}}
        maxLength="2"
        style = {{width: 56}}
        //todo как корректно очищать элемент? Так работает, но консоль ругается value={value}
        // см. закомментированный код в GoalComponent
        // хотел элемент вроде:    ___34___ (+)
        // но в итоге обошёлся обычными кнопками без input-a.
        value={value}
        onChange={onChange}
    />
)

GoalInput.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default GoalInput
