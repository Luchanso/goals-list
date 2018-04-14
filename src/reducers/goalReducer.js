import {
    ADD_PROGRESS,
    SET_CURRENT_PROGRESS,
    SET_THRESHOLD,
    CREATE_GOAL,
    CHANGE_NAME
} from '../actions'

export function goals(state = [], action) {
    switch (action.type) {
        case CREATE_GOAL:
            return [
                ...state,
                {
                    text: action.name,
                    progress: action.progress,
                    threshold: action.threshold
                }
            ]
        case ADD_PROGRESS:
            return state.map((goal, index) => {
                if (goal.name === action.goal.name) {
                    return Object.assign({}, goal, {
                        progress: goal.progress + action.progress
                    })
                }
                return goal
            })
        default:
            return state
    }
}