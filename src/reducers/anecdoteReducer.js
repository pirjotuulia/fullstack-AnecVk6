import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  if (action.type === 'VOTE') {
    const anecdotes = state
    const old = anecdotes.filter(a => a.id !== action.data.id)
    return [...old, action.data]
  }
  if (action.type === 'CREATE') {
    let newAnecdote = action.data
    return [...state, newAnecdote]
  }
  if (action.type === 'INIT_NOTES') {
    return action.data
  }

  return state
}

export const anecdoteCreation = (data) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(data)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const voteCreation = (data) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.addVote(data)
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })
  }
}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer