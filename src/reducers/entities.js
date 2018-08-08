import { combineReducers } from 'redux'
import * as ActionTypes from '../const/ActionTypes.js'

function author (state = {},action){
   switch(action.type){
     case `${ActionTypes.FETCH_DianPing_INFO}_SUC`: {
       const entities = action.response.entities
       return {
       ...state,
       ...entities.author
       }
       }
      default:
      return state;
   }
}

function classes (state = {},action){
  switch(action.type){
    // case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`: {
    //   const entities =  action.response.entities
    //   return {
    //     ...state,
    //     ...entities.classes
    //   };
    // }
    // case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
    //   const { history, current } = action.response;
    //   return {
    //     ...state,
    //     ...history.entities.classes,
    //     ...current.entities.classes
    //   };
    // }
   case `${ActionTypes.FETCH_DianPing_INFO}_SUC`: {
      const entities = action.response.entities;
      return {
        ...state,
        ...entities.classes
      };
    }
    default:
      return state;
  }
}

function teacher (state = {},action){
  switch(action.type){
    // case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`: {
    //   const entities =  action.response.entities
    //   return {
    //     ...state,
    //     ...entities.teacher
    //   };
    // }
    // case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
    //   const { history, current } = action.response;
    //   return {
    //     ...state,
    //     ...history.entities.teacher,
    //     ...current.entities.teacher
    //   };
    // }
     case `${ActionTypes.FETCH_DianPing_INFO}_SUC`: {
      const entities = action.response.entities;
      return {
        ...state,
        ...entities.teacher
      };
    }

    default:
      return state;
  }
}
function comments (state = {},action){
  switch(action.type){
    case ActionTypes.FETCH_DianPing_INFO: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.comments
      };
    }
    default:
      return state;
  }
}

function homeworkList (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_DianPing_INFO}_SUC`: {
      const entities =  action.response.entities;
      return {
        ...state,
        ...entities.homeworkList
      };
    }
    default:
      return state;
  }
}

// function students(state = {}, action){
//   switch(action.type){
//     case `${ActionTypes.FETCH_STUDENT_LIST}_SUC`: {
//       const { entities } = action.response;
//       return {
//         ...state,
//         ...entities.students
//       }
//     }
//     default:
//       return state;
//   }
// }

export default combineReducers({
  author,
  classes,
  teacher,
  comments,
  // satisfiled,
  // students,
  // lessons,
  homeworkList
});