import React from 'react'
import { anecdoteCreation } from './../reducers/anecdoteReducer'
import { messageCreation } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {
  addNote = async (event) => {
    event.preventDefault()
    let content = event.target.anecdote.value
    event.target.anecdote.value = ''
    this.props.anecdoteCreation(content)
    this.props.messageCreation(`you added '${content}'`, 5)
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
  messageCreation
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