import { INIT_GAME, RESTART_GAME, UP_GAME, DOWN_GAME, LEFT_GAME, RIGHT_GAME } from '../const/ActionTypes';

const initialMessage = {
  GameData: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  ScoreData: 0,
  BestScore: 0
};
export default function GameMessage(state = initialMessage, action) {
  // 每按一次键产生一个随机数
  function cc(arg) {
    const m = Math.floor(Math.random() * 4);
    const n = Math.floor(Math.random() * 4);
    if (state.GameData[m][n] === 0) {
      state.GameData[m][n] = arg;
    } else {
      cc(arg);
    }
  }
  switch (action.type) {
    case INIT_GAME: {
      const i = action.value1;
      const j = action.value2;
      const a = action.v1;
      const b = action.v2;
      const v1 = action.value3;
      const v2 = action.value4;
      if (state.GameData[i][j] === 0 && state.GameData[a][b] === 0 && a !== i) {
        state.GameData[i][j] = v1;
        state.GameData[a][b] = v2;
      } else {
        state.GameData[2][2] = v1;
        state.GameData[0][1] = v2;
      }
      return { ...state, [state.GameData[i][j]]: v1, [state.GameData[j][i]]: v2 };
    }
    case RESTART_GAME: {
      state.GameData = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      const i1 = action.value1;
      const j1 = action.value2;
      const a1 = action.v1;
      const b1 = action.v2;
      const v11 = action.value3;
      const v22 = action.value4;
      const zero = action.zero;
      state.ScoreData = zero;
      if (state.GameData[i1][j1] === 0 && state.GameData[a1][b1] === 0 && a1 !== i1) {
        state.GameData[i1][j1] = v11;
        state.GameData[a1][b1] = v22;
      } else {
        state.GameData[2][2] = v11;
        state.GameData[0][1] = v22;
      }
      return { ...state, [state.GameData[i1][j1]]: v11, [state.GameData[j1][i1]]: v22 };
    }
    case UP_GAME: {
      const num = action.num;
      let key = 3;
      // 遍历三次（每行每列一共就四个数）将所有不为零的数都放在最顶端
      while (key > 0) {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 4; j++) {
            if (state.GameData[i][j] === 0 && state.GameData[i + 1][j] !== 0) {
              state.GameData[i][j] = state.GameData[i + 1][j];
              state.GameData[i + 1][j] = 0;
            }
          }
        }
        key--;
      }
      // 将两个相邻并且相等的数相加，高位的置零
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
          if (state.GameData[i][j] !== 0 && state.GameData[i][j] === state.GameData[i + 1][j]) {
            state.GameData[i][j] = (state.GameData[i][j]) * 2;
            state.GameData[i + 1][j] = 0;
            state.ScoreData += (state.GameData[i][j]);
            if (state.ScoreData > state.BestScore) {
              state.BestScore = state.ScoreData;
            }
          }
        }
      }
      // 重新遍历将合并之后的数依次排在最顶端
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
          if (state.GameData[i][j] === 0 && state.GameData[i + 1][j] !== 0) {
            state.GameData[i][j] = state.GameData[i + 1][j];
            state.GameData[i + 1][j] = 0;
          }
        }
      }
      // 执行产生随机数的的函数
      cc(num);
      return { ...state };
    }
    case DOWN_GAME: {
      const num1 = action.num;
      let key1 = 3;
      while (key1 > 0) {
        for (let i = 3; i > 0; i--) {
          for (let j = 0; j < 4; j++) {
            if (state.GameData[i][j] === 0 && state.GameData[i - 1][j] !== 0) {
              state.GameData[i][j] = state.GameData[i - 1][j];
              state.GameData[i - 1][j] = 0;
            }
          }
        }
        key1--;
      }
      for (let i = 3; i > 0; i--) {
        for (let j = 0; j < 4; j++) {
          if (state.GameData[i][j] !== 0 && state.GameData[i][j] === state.GameData[i - 1][j]) {
            state.GameData[i][j] = (state.GameData[i][j]) * 2;
            state.GameData[i - 1][j] = 0;
            state.ScoreData += (state.GameData[i][j]);
            if (state.ScoreData > state.BestScore) {
              state.BestScore = state.ScoreData;
            }
          }
        }
      }

      for (let i = 3; i > 0; i--) {
        for (let j = 0; j < 4; j++) {
          if (state.GameData[i][j] === 0 && state.GameData[i - 1][j] !== 0) {
            state.GameData[i][j] = state.GameData[i - 1][j];
            state.GameData[i - 1][j] = 0;
          }
        }
      }
      cc(num1);
      return { ...state };
    }
    case LEFT_GAME: {
      const num2 = action.num;
      let key2 = 3;
      while (key2 > 0) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 3; j++) {
            if (state.GameData[i][j] === 0 && state.GameData[i][j + 1] !== 0) {
              state.GameData[i][j] = state.GameData[i][j + 1];
              state.GameData[i][j + 1] = 0;
            }
          }
        }
        key2--;
      }
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          if (state.GameData[i][j] !== 0 && state.GameData[i][j] === state.GameData[i][j + 1]) {
            state.GameData[i][j] = (state.GameData[i][j]) * 2;
            state.GameData[i][j + 1] = 0;
            state.ScoreData += (state.GameData[i][j]);
            if (state.ScoreData > state.BestScore) {
              state.BestScore = state.ScoreData;
            }
          }
        }
      }

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          if (state.GameData[i][j] === 0 && state.GameData[i][j + 1] !== 0) {
            state.GameData[i][j] = state.GameData[i][j + 1];
            state.GameData[i][j + 1] = 0;
          }
        }
      }
      cc(num2);
      return { ...state };
    }
    case RIGHT_GAME: {
      const num3 = action.num;
      let key3 = 3;
      while (key3 > 0) {
        for (let i = 0; i < 4; i++) {
          for (let j = 3; j > 0; j--) {
            if (state.GameData[i][j] === 0 && state.GameData[i][j - 1] !== 0) {
              state.GameData[i][j] = state.GameData[i][j - 1];
              state.GameData[i][j - 1] = 0;
            }
          }
        }
        key3--;
      }
      for (let i = 0; i < 4; i++) {
        for (let j = 3; j > 0; j--) {
          if (state.GameData[i][j] !== 0 && state.GameData[i][j] === state.GameData[i][j - 1]) {
            state.GameData[i][j] = (state.GameData[i][j]) * 2;
            state.GameData[i][j - 1] = 0;
            state.ScoreData += (state.GameData[i][j]);
            if (state.ScoreData > state.BestScore) {
              state.BestScore = state.ScoreData;
            }
          }
        }
      }
      for (let i = 0; i < 4; i++) {
        for (let j = 3; j > 0; j--) {
          if (state.GameData[i][j] === 0 && state.GameData[i][j - 1] !== 0) {
            state.GameData[i][j] = state.GameData[i][j - 1];
            state.GameData[i][j - 1] = 0;
          }
        }
      }
      cc(num3);
      return { ...state };
    }
    default:
      return state;
  }
}
