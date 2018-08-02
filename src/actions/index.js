import axios from 'axios';
import * as ActionTypes from '../const/ActionTypes';

export function fetchUserInfo(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_USER_INFO,
      endpoint: '/getUserInfo',
      params: {
        mid
      }
    }
  }
}

export function fetchLessonInfo(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_LESSON_INFO,
      endpoint: '/getLessonInfo',
      params: {
        mid
      }
    }
  }
}

export function fetchStudentInfo(id) {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_STUDENT_INFO,
        endpoint: '/getStudentList',
        params: {
          id
        }
      }
    }
}

  export function fetchLearnInfo(id) {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_LEARN_INFO,
        endpoint: '/getClassInfo',
        params: {
            id
        }
      }
    }
}


export function fetchSeach(value){
  return {
    type: ActionTypes.FETCH_GITHUB_SEACH_FAI,
    value
  }
}