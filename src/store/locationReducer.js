import axios from 'axios'
import { setItem } from './ItemsReducer'

const initialState = {
  isLoading: false
}

export const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STATUS':
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}

export const changeStatus = (status) => ({ type: 'CHANGE_STATUS', payload: status })

export const requestCapital = (value) => async dispatch => {
  try {
    dispatch(changeStatus(true))
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${value}`)
    dispatch(changeStatus(false))
    dispatch(setItem({ value: value, location: response.data[0].capital }, 'letters'))
  } catch (error) {
    dispatch(requestCountry(value))
  }
}

export const requestCountry = (value) => async dispatch => {
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/capital/${value}`)
    dispatch(setItem({ value: value, location: response.data[0].name }, 'letters'))
    dispatch(changeStatus(false))
  } catch (error) {
    dispatch(changeStatus(false))
    dispatch(setItem({ value }, 'letters'))
  }
}