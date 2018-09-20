import React from 'react'
import { filterCreation} from '../reducers/filterReducer'

class Filter extends React.Component {
  handleChange = (event) => {
    this.props.store.dispatch(filterCreation(event.target.value, this.props.store))
  }

  componentDidMount() {
    this.forceUpdate()
  }

  componentWillUnmount() {
    this.unsubscribe()
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

export default Filter