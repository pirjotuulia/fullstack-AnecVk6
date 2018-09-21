import React from 'react'
import { anecdoteCreation } from './../reducers/anecdoteReducer'
import { messageRemoval } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   const content = e.target.anecdote.value
  //   this.props.anecdoteCreation(content)
  //   e.target.anecdote.value = ''
  //   setTimeout(() => {
  //     this.props.messageRemoval()
  //   }, 5000)
  // }

  addNote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    this.props.anecdoteCreation(newAnecdote)
    setTimeout(() => {
      this.props.messageRemoval()
    }, 5000)
  }

  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.addNote}>
          <div><input name='anecdote' /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addNote: state.addNote
  }
}

const mapDispatchToProps = {
  anecdoteCreation,
  messageRemoval
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm

// export default connect(
//   null,
//   {anecdoteCreation}
// )(AnecdoteForm)