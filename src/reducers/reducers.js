import { combineReducers } from 'redux'
import {
  goals
} from './goalReducer'

const goalsApp = combineReducers({
  goals
})

export default goalsApp

 