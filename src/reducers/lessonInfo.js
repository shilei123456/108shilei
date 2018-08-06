import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'

function currentLessonsList(state = {}, action) {
  console.log(action);
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:
      return { ...state, [action.mid]: [ ...action.response.current ] }
      
    default:
      return state
  }
}
function historyLessonsList(state = {}, action) {
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:
      return { ...state, [action.mid]: [  ...action.response.history] }
    default:
      return state
  }
}

const lessonInfo = combineReducers({
  currentLessonsList,
  historyLessonsList
})

export default lessonInfo