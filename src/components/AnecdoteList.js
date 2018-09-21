import React from 'react'
import { messageRemoval } from '../reducers/notificationReducer'
import { voteCreation } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

class AnecdoteList extends React.Component {
  // handlevote = (event) => {
  //   this.props.voteCreation(event.target.id)
  //   setTimeout(() => {
  //     this.props.messageRemoval()
  //   }, 5000)
  // }

  addVote = async (event) => {
    event.preventDefault()
    let anecdoteVoted = this.props.anecdotesToShow.filter(a=> a.id === event.target.id)[0]
    let updatedAnecdote = {...anecdoteVoted, votes: anecdoteVoted.votes+1}
    const newAnecdote = await anecdoteService.addVote(updatedAnecdote)
    this.props.voteCreation(newAnecdote)
    setTimeout(() => {
      this.props.messageRemoval()
    }, 5000)
  }

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        {this.props.anecdotesToShow.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.addVote} id={anecdote.id}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
const anecdotesToShow = (anecdotes, filter) => {
  if (filter.filter === 'FILTER') {
    let filterBy = filter.filterBy
    return anecdotes.filter(a => a.content.toLowerCase().includes(filterBy.toLowerCase())).sort((a, b) => b.votes - a.votes)
  } else {
    return anecdotes.sort((a, b) => b.votes - a.votes)
  }
}
const mapStateToProps = (state) => {
  return {
    addVote: state.addVote,
    anecdotesToShow: anecdotesToShow(state.anecdotes, state.filter)
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
