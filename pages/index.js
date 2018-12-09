import React from 'react'
import { connect } from 'react-redux';
import Link from '../components/Link'
class Home extends React.Component {

  // static async getInitialProps({ req, query }) {
  //   console.log('query:',  query)
  //   const q = query || "";
  //   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  //   return query
  // }

  render() {
    console.log(this.props)
    return (
      <div>
        Home Page {this.props.query},  <br />
        <Link page='user' params='login' query='?op=login'>
          login
        </Link>
      </div>
    )
  }
}

const mapStateToProps = ({user}) => {
  return {user};
}
export default connect(mapStateToProps)(Home);