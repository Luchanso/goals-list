/**
 * action types
 */

 export const ADD_PROGRESS = 'ADD_PROGRESS';
 export const CHANGE_NAME = 'CHANGE_NAME';
 export const SET_THRESHOLD = 'SET_THRESHOLD';
 export const SET_CURRENT_PROGRESS = 'SET_CURRENT_PROGRESS';
 export const CREATE_GOAL = 'CREATE_GOAL'; //for the future

 /**
  * action creators
  */

  export function addProgress(goal, progress) {
    return { type: ADD_PROGRESS, goal, progress }
  }


  export function setCurrentProgress(goal, progress) {
    return { type: SET_CURRENT_PROGRESS, goal, progress }
  }

  export function setThreshold(goal, threshold) { //todo only once
    return { type: SET_THRESHOLD, goal, threshold }
  }

  export function changeName(goal, name) {
      return { type: CHANGE_NAME, name }
  }

  export function createGoal(name, progress, threshold) {
    return { type: CREATE_GOAL, name, progress, threshold }
  }