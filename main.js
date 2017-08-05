import React, { Component } from 'react'

class Layout extends Component {
  render() {
    const { children } = this.props
    return (<div>{children}</div>)
  }
} 

const Pages = () => (<div>Pages</div>)

const App = () => (<Layout><Pages /></Layout>)

export default App
export {
  Layout,
  Pages
}
