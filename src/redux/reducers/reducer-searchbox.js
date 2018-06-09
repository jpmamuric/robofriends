import * as types from '../actions/types';

const initialState = {
  value: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_SEARCH_INPUT:
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
}
