import React, { Component } from "react"

let stylesStr
let stylesStr2
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require('!raw-loader!../public/styles.css')
    stylesStr2 = require('!raw-loader!../public/main.css')
  } catch (e) {
    console.log(e)
  }
}

class Html extends Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr + stylesStr2 }}
        />
      )
    }

    return (
      <html lang="en">
        <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118577718-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-118577718-1');
        </script>
        <meta name="google-site-verification" content="c_JqZn6uMb9nNu5EC2Bha2kzEM8xcAlapDJYkviYqx0" />




          <meta name="referrer" content="origin" />
          <meta charSet="utf-8" />
          <meta
            name="CodeCardCodingCards"
            content="CodeCardCodingCards is a Javascript programming card game intended for software developers"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#393F49" />


          <meta name="description" content="CodeCardCodingCards is a Javascript programming card game intended for software developers" />
          <meta name="subject" content="Kickstarter " />

          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />


          <meta property="og:url" content="https://codecardcodingcards.com"  />
          <meta property="og:type" content="website"  />
          <meta property="og:title" content="CodeCardCodingCards programming card game"  />
          <meta property="og:description" content="CodeCardCodingCards is a programming card game project by lingonsaft currently at kickstarter" />


          <meta name="twitter:url" content="https://codecardcodingcards.com" />
          <meta name="twitter:title" content="CodeCardCodingCards programming card game" />
          <meta name="twitter:description" content="CodeCardCodingCards is a programming card game project by lingonsaft currently at kickstarter" />
          {this.props.headComponents}
          <title>CodeCardCodingCards</title>

          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

module.exports = Html
