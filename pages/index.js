import React from 'react'
import Link from 'next/link'

export default class Home extends React.Component {

  static async getInitialProps({ req, query }) {
    console.log('query:',  query)
    const q = query || "";
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return query
  }

  render() {
    return (
      <div>
        Home Page {this.props.query},  <br />
        <Link href="/about?x=1" as='/about/1' prefetch>
            <a>here</a>
        </Link>
      </div>
    )
  }
}