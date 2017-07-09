import React from 'react'
import { render } from 'react-dom'
import route from './app_routes'
import { Router, browserHistory, match } from 'react-router'

import './modules/main/main_style/main.styl'

let routes = route()

match({ routes, history: browserHistory}, (error, redirectLocation, renderProps) => {
    render(<Router {...renderProps} />, document)
})

