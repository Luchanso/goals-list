import { combineReducers } from 'redux'
import {
  goals
} from './GoalReducer'

const goalsApp = combineReducers({
  goals
})

export default goalsApp

 