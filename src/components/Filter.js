import React from 'react'
import { filterCreation} from '../reducers/filterReducer'
import { connect } from 'react-redux'

class Filter extends React.Component {
  handleChange = (event) => {
    this.props.filterCreation(event.target.value, this.anecdotes)
  }

  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.handleChange} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    handleChange: state.handleChange,
    anecdotes: state.anecdotes
  }
}

const mapDispatchToProps = {
  filterCreation
}

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default ConnectedFilter