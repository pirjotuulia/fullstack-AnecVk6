import React from 'react'
import { messageRemoval } from '../reducers/notificationReducer'
import { voteCreation } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {
  handlevote = (event) => {
    this.props.voteCreation(event.target.id)
    setTimeout(() => {
      this.props.messageRemoval()
    }, 5000)
  }

  anecdotesToShow = () => {
    const { anecdotes, filter } = this.props
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

const mapStateToProps = (state) => {
  return {
    handlevote: state.handlevote,
    anecdotesToShow: state.anecdotesToShow,
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  messageRemoval,
  voteCreation
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList
