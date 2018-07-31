import axios from 'axios';
import * as ActionTypes from '../const/ActionTypes.js';

export default function fetchGithubUser(next) {
  next({
    type: `${ActionTypes.FETCH_GITHUB_USER}_REQ`
  });

  axios({
    method: 'POST',
    url: 'http://xly-wkop.xiaoniangao.cn/getLessonInfo'
  }).then(res => {
    //  console.log(res.data.data);
    next({
      type: `${ActionTypes.FETCH_GITHUB_USER}_SUC`,
      data: res.data
    });
  })
  .catch(err => {
    console.log(err);
    next({
      type: `${ActionTypes.FETCH_GITHUB_USER}_FAI`
    });
  });
}