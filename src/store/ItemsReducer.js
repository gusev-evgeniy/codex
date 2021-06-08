const initialState = {
  letters: [],
  numbers: [],
  numbersAndLettes: []
}

export const ItemsReducer = (state = initialState, action) => {
  const field = action.payload?.field
  const item = action.payload?.item

  switch (action.type) {
    case 'SET_ITEM':
      return {
        ...state, [field]: [...state[field], { ...item, count: 1, date: Date.now() }]
      }
    case 'UPDATE_ITEM':
      return {
        ...state,
        [field]: state[field]
          .map(stateItem => stateItem.value === item.value
            ? { ...stateItem, count: stateItem.count + 1 }
            : stateItem)
      }
    default:
      return state
  }
}

export const setItem = (item, field) => ({ type: 'SET_ITEM', payload: { item, field } })
export const updateItem = (item, field) => ({ type: 'UPDATE_ITEM', payload: { item, field } })
