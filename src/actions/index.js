
import * as ActionTypes from '../const/ActionTypes';

export function fetchInitCureInfo(value1, value2, v1, v2, value3, value4) {
  return {
    type: ActionTypes.INIT_GAME,
    value1,
    value2,
    v1,
    v2,
    value3,
    value4
  };
}
export function fetchRestartCureInfo(value1, value2, v1, v2, value3, value4, zero) {
  return {
    type: ActionTypes.RESTART_GAME,
    value1,
    value2,
    v1,
    v2,
    value3,
    value4,
    zero
  };
}
export function fetchUpCureInfo(value1, value2, num) {
  return {
    type: ActionTypes.UP_GAME,
    value1,
    value2,
    num
  };
}
export function fetchDownCureInfo(value1, value2, num) {
  return {
    type: ActionTypes.DOWN_GAME,
    value1,
    value2,
    num
  };
}
export function fetchLeftCureInfo(value1, value2, num) {
  return {
    type: ActionTypes.LEFT_GAME,
    value1,
    value2,
    num
  };
}
export function fetchRightCureInfo(value1, value2, num) {
  return {
    type: ActionTypes.RIGHT_GAME,
    value1,
    value2,
    num
  };
}
