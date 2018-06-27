import merge from 'lodash/merge';

const defaultState = {
  movies: {},
  genres: {},
};

export default function entities(state = defaultState, action) {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities);
  }

  return state;
}
