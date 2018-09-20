import React from 'react'
import { anecdoteCreation } from './../reducers/anecdoteReducer'
import { messageRemoval } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.anecdoteCreation(content)
    e.target.anecdote.value = ''
    setTimeout(() => {
      this.props.messageRemoval()
    }, 5000)
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote' /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    handlesubmit: state.handleSubmit
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
