import { createStore, applyMiddleware } from 'redux';
import thunks from 'redux-thunk';
import { TYPES } from './actions';

const initialState = {
  products: [],
  name: '',
  id: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case TYPES.SET_PRODUCT:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunks));

export default store;
