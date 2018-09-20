import React from 'react'
import store from '../store'

class Notification extends React.Component {
  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    return (
      <div>
        {store.getState().notification.message && <div style={style}>
          {store.getState().notification.message}
        </div>
        }</div >
    )
  }
}

export default Notification
