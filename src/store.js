import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import anecdoteService from './services/anecdotes'
import anecdoteReducer, { anecdoteInitialization } from './reducers/anecdoteReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
})
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

anecdoteService.getAll().then(anecdotes =>
  store.dispatch(anecdoteInitialization(anecdotes))
)
export default store