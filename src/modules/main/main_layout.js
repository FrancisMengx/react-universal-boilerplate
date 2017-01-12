import React, { Component } from 'react'

class MainLayout extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default MainLayout
