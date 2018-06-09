import * as types from './types';
import axios from 'axios';

export const getRobots = () => async dispatch => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: types.GET_ROBOTS, payload: res.data });
  } catch(err){
    dispatch({ type:types.GET_ROBOTS_FAIL, payload: 'something went wrong' });
  }
};
