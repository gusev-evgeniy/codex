import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ItemsReducer } from './ItemsReducer'

export const reducers = combineReducers({
  ItemsReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

export const getItems = (state) => {
  return state.ItemsReducer
}