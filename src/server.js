import express from 'express'
import http from 'http'
import http2 from 'http2'
import https from 'https'
import lex from 'letsencrypt-express'
import httpsRedirect from 'redirect-https'
import path from 'path'
import favicon from 'serve-favicon'
import requestLogger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import debug from 'debug'
import errorHandler from 'errorhandler'
import logger from 'winston'
import fs from 'fs'
import RenderHandler from './universal_rendering/render_handler'

//Init global env variables
global.__CLIENT__ = false
global.__SERVER__ = true
global.__DEVELOPMENT__ = (process.env.NODE_ENV !== 'production', process.env.NODE_ENV !== 'staging')

const app = express();
const renderHandler = new RenderHandler()

//global.__DEVELOPMENT__ ? app.use(requestLogger('DEV')) : app.use(requestLogger('PRODUCTION'))
app.use(requestLogger('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '/assets')))
app.use(express.static(path.join(__dirname, '/public')))
app.use(favicon(path.join(__dirname, '/assets/favicon.png')))

//app.use('/api/v1', apiV1Routes)
app.use('*', (req, res) => {
  renderHandler.render(req, res)
})


app.use((req, res, next) => {
  res.status(404)
  res.send('{errorString: "Page Not Found"}')
})

app.use(errorHandler);

let httpServer = undefined

httpServer = http.createServer(app)

httpServer.listen(process.env.PORT || 3070, function() {
  logger.log('info', 'Listening to Port: 3070')
})
