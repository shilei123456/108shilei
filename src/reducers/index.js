import { combineReducers } from 'redux'
import lessonInfo from './lessonInfo'
import userInfo from './userInfo'
import ui from './ui'
import studentLib from './studentLib'
import classesDetail from './classesDetail'
import satisfied from './satisfied'
import entities from './entities'
import entitiesStuLib from './entitiesStuLib'

const rootReducer = combineReducers({
  entitiesStuLib,
  entities,
  lessonInfo,
  userInfo,
  studentLib,
  classesDetail,
  satisfied,
  ui
})
export default rootReducer