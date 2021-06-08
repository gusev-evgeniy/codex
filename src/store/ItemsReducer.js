import axios from 'axios'

const initialState = {
  letters: [],
  numbers: [],
  numbersAndLettes: []
}

export const ItemsReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_ITEM':
      return {
        ...state, [action.payload.field]: [...state[action.payload.field], { ...action.payload.item, count: 1, date: Date.now() }]
      }
    case 'UPDATE_ITEM':
      return {
        ...state,
        [action.payload.field]: state[action.payload.field]
          .map(item => item.value === action.payload.item.value ? { ...item, count: item.count + 1 } : item)
      }
    case 'CHANGE_STATUS':
      return { ...state, status: action.payload }
    default:
      return state
  }
}

export const setItem = (item, field) => ({ type: 'SET_ITEM', payload: { item, field } })
export const updateItem = (item, field) => ({ type: 'UPDATE_ITEM', payload: { item, field } })
export const changeStatus = (status) => ({ type: 'CHANGE_STATUS', payload: status })

export const requestCapital = (value) => async dispatch => {
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${value}`)
    dispatch(setItem({ value: value, location: response.data[0].capital }, 'letters'))
  } catch (error) {
    dispatch(requestCountry(value))
  }
}

export const requestCountry = (value) => async dispatch => {
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/capital/${value}`)
    dispatch(setItem({ value: value, location: response.data[0].name }, 'letters'))
  } catch (error) {
    dispatch(setItem({ value }, 'letters'))
  }
}