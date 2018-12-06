import React from 'react'
import Link from 'next/link'

export default class extends React.Component {

  static async getInitialProps({ req, query }) {
      console.log(query)
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <div>
        Hello World {this.props.userAgent},  
        <Link href="/about" prefetch>
            <a>here</a>
        </Link>
      </div>
    )
  }
}