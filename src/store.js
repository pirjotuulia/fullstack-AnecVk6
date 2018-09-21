import { createStore, combineReducers } from 'redux'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import anecdoteService from './services/anecdotes'
import anecdoteReducer, { anecdoteInitialization} from './reducers/anecdoteReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
})
const store = createStore(reducer)

anecdoteService.getAll().then(anecdotes =>
  store.dispatch(anecdoteInitialization(anecdotes))
)
export default store