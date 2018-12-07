import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

class About extends React.Component {

    render() {
        console.log('query:',  this.props.router.query)
      return (
        <div>
          About {this.props.query},  <br />
          <Link href="/?from=about" as='/' prefetch>
              <a>home</a>
          </Link>
        </div>
      )
    }
  }

export default withRouter(About);