import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ItemsReducer } from './ItemsReducer'
import { LocationReducer } from './locationReducer'

export const reducers = combineReducers({
  ItemsReducer,
  LocationReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

export const getItems = (state) => {
  return state.ItemsReducer
}

export const getStatus = (state) => {
  return state.LocationReducer.isLoading
}