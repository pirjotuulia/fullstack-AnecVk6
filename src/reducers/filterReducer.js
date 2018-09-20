const initialState = { filter: '' }

const filterReducer = (store = initialState, action) => {
  if (action.type === 'ALL') {
    return { filter: 'ALL' }
  }
  if (action.type === 'FILTER') {
    return { ...store, filter: 'FILTER', filterBy: action.filter }
  }
  return store
}

export const filterCreation = (filter, store) => {
  if (filter === '') {
    return {
      type: 'ALL',
      filterBy: ''
    }
  }
  return {
    type: 'FILTER',
    filter,
    store: store
  }
}

export default filterReducer