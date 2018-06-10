import * as types from '../actions/types';

const initialState = {
  list: [],
  filteredList: [],
  err: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ROBOTS:
      return {
        ...state,
        list: action.payload
      };
    case types.GET_ROBOTS_FAIL:
      return {
        ...state,
        err: action.payload
      };
    case types.FILTER_ROBOTS:
      return {
        ...state,
        filteredList: action.payload
      };
    default:
      return state;
  }
}
