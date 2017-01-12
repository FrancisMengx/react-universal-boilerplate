import React, {Component} from 'react'
import { renderToString } from 'react-dom/server'

class Html extends Component {
  render() {
    const {store} = this.props
    // const googleTrackingCode =
    //         `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    //         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    //         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    //         })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    //         ga('create', 'UA-82209912-1', 'auto');
    //         ga('send', 'pageview');`

    return (
      <html>
        <head>
          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="og:url" content="http://www.thehatersball.com" />
          <meta name="og:site_name" content="The Haters Ball" />
          <meta name="og:type" content="website" />
          <meta name="og:title" content="The Haters Ball" />
          <meta name="og:description" content="At the Haters Ball, we aim to provide fresh and unabashedly honest reviews and commentary on music, old and new. Whether you like it or not,  we won't stop.
            Viva Hate!"/>
          <meta name="og:image" content="https://s3-us-west-2.amazonaws.com/the-haters-ball-content-image/logo.png" />

          <meta name="description" content="At the Haters Ball, we aim to provide fresh and unabashedly honest reviews and commentary on music, old and new. Whether you like it or not,  we won't stop.
            Viva Hate!"/>

          <title>The Haters Ball</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/stylesheet/main.css"/>
        </head>
        <body>
          { this.props.children }
        </body>
      </html>
    )
  }
}

export default Html
