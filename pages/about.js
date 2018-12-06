import React from 'react';
import Link from 'next/link';

export default class extends React.Component {
    render() {
        console.log(this.props)
      return (
        <div>
          Hello World {this.props.userAgent},  
          <Link href="/" prefetch>
              <a>home</a>
          </Link>
        </div>
      )
    }
  }