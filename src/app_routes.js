import React from 'react'
import { Route } from 'react-router'

import MainLayout from './modules/main/main_layout'
import Home from './modules/home/home_container'

export default () => {
  return (
    <Route componenet={ MainLayout }>
      <Route path="/" component={ Home }/>
    </Route>
  )
}
