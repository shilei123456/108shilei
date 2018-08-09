import axios from 'axios';
import * as ActionTypes from '../const/ActionTypes';
import { normalize } from 'normalizr'
import * as schemes from '../schemes'
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

export function fetchSatifyInfo(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_SATIFY_INFO,
      endpoint: '/getSatisfiledList',
      params: {
        mid
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
export function fetchDianPingInfo(token,isReviewed) {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_DianPing_INFO,
        endpoint: '/getHomeWork',
        params: {
            token,
            isReviewed
        },
        normailzerFun:response=> normalize(response.data, schemes.HOMEWORKLIST)
      }
    }
}
export function fetchDianPingInfoMyHistory(token,isReviewed) {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_DianPing_MyHistory_INFO,
        endpoint: '/getHomeWork',
        params: {
            token,
            isReviewed
        },
        normailzerFun:response=> normalize(response.data, schemes.HOMEWORKLIST)
      }
    }
}
export function fetchDianPingInfoAllWei(token,isReviewed) {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_DianPing_INFO,
        endpoint: '/getHomeWork',
        params: {
            token,
            isReviewed
        },
        normailzerFun:response=> normalize(response.data, schemes.HOMEWORKLIST)
      }
    }
}
export function fetchDianPingInfoAllYi(token,isReviewed) {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_DianPing_INFO,
        endpoint: '/getHomeWork',
        params: {
            token,
            isReviewed
        },
        normailzerFun:response=> normalize(response.data, schemes.HOMEWORKLIST)
      }
    }
}
export default function handleChangeTuiHui(id){
  return {
    type:ActionTypes.CHANGE_REJECT_STATUS,
    id,
  }
}