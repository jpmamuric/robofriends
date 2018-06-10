import * as types from './types';

export const changeSearchInput = (input, list) => dispatch => {
  const filteredRobots = list.filter( robot => {
    return robot.name.toLowerCase().includes(input.toLowerCase());
  });

  dispatch({ type: types.FILTER_ROBOTS, payload: filteredRobots })
  dispatch({ type: types.CHANGE_SEARCH_INPUT, payload: input });

};
