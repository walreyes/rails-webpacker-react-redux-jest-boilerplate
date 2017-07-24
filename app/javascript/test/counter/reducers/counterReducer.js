
// ------------------------------------
// Constants
// ------------------------------------
import {
  COUNTER_INCREMENT,
  COUNTER_DOUBLE_ASYNC
} from '../constants/counterConstants'

// ------------------------------------
// Action Handlers
// ------------------------------------

const counter = (state = 0, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + action.payload
    case COUNTER_DOUBLE_ASYNC:
      return state * 2
    default:
      return state
  }
}

// ------------------------------------
// Reducer

// ------------------------------------
const counterReducer = {
  counter,
}

export default counterReducer;
