import React from 'react'
import { messageRemoval } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  handlevote = (event) => {
    this.props.store.dispatch({ type: 'VOTE', id: event.target.id })
    setTimeout(() => {
      this.props.store.dispatch(
        messageRemoval()
      )
    }, 5000)
  }

  anecdotesToShow = () => {
    const { anecdotes, filter } = this.props.store.getState()
    if (filter.filter === 'FILTER') {
      let filterBy = filter.filterBy
      return anecdotes.filter(a => a.content.includes(filterBy))
    } else {
      return anecdotes
    }
  }

  render() {
    const anecdotes = this.anecdotesToShow()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.handlevote} id={anecdote.id}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
