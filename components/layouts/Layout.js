import React from 'react';
import Header from './Header';


export default class Layout extends React.Component {
    render () {
      const {children} = this.props
      return(
      <div id='layout' style={{ fontSize: '14px', color: '#999'}}>
        <Header />
        {children}
      </div>
      )
    }
  }
  