import React from 'react'
import { RouterContext, match } from 'react-router'
import { renderToString } from 'react-dom/server'

import getRoutes from '../app_routes'
import Html from './html'

class RenderHandler {
  render(req, res) {
    match({routes: getRoutes(), location: req.originalUrl}, (err, redirectLocation, renderProps) => {
      if (redirectLocation) {
        res.redirect(redirectLocation.pathname + redirectLocation.search)
      } else if (err) {
        res.status(500)
        res.render('error', {errorString: err})
      } else if (renderProps) {

        res.status(200)
        //global.navigator = {userAgent: req.headers['user-agent']}
        console.log(renderProps)
        res.send('<!doctype html>\n' +
          renderToString(
            <Html>
              <RouterContext {...renderProps} />
            </Html>
          )
        )
      } else {
        res.status(404).send('Not found')
      }
    })
  }
}

export default RenderHandler
