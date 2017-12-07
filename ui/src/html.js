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
          {this.props.headComponents}

          <meta name="referrer" content="origin" />
          <meta charSet="utf-8" />
          <meta
            name="Code card coding cards"
            content="official  site for codecardscodingcards"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#393F49" />
          <title>CodeCardsCodingCards</title>

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
