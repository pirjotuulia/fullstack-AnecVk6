const initialState = { message: '' }

const notificationReducer = (store = initialState, action) => {
  if (action.type === 'VOTE') {
    return { message: `you voted '${action.content}'` }
  }
  if (action.type === 'CREATE') {
    return {message: `you created new anecdote: '${action.content}'`}
  }
  if (action.type === 'REMOVE') {
    return initialState
  }

  return store
}

export const messageRemoval = () => {
  return {
    type: 'REMOVE'
  }
}

export const messageCreation = (content) => {
  return {
    type: 'CREATE',
    content
  }
}

export default notificationReducer