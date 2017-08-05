import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import App, { Layout, Pages } from './main.js'

describe('<App />', () => {
  let  wrapper = mount(<App />)

  it('renders <App />', () => {
    expect(wrapper.find(App)).to.have.length(1)
  })

  it('renders <Layout />', () => {
    expect(wrapper.find(Layout)).to.have.length(1)
  })

  it('renders <Pages />', () => {
    expect(wrapper.find(Pages)).to.have.length(1)
  })
})
