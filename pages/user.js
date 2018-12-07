import React from 'react';
import { withRouter } from 'next/router';
import dynamic from 'next/dynamic'

const Login = dynamic(
    () => import('../microApps/user/Login'), 
    {
        loading: () => (<p>Loading ...</p>),
        ssr: false,
    }
);

const Signup = dynamic(
    () => import('../microApps/user/Signup'), 
    {
        loading: () => (<p>Loading ...</p>),
        ssr: false,
    }
);


class UserPage extends React.Component {

    render() {
        const { router: {query : { op }}} = this.props;
      return (
        <div>
            {
                (op === 'login') ? <Login /> : <Signup />
            }
        </div>
      )
    }
  }

export default withRouter(UserPage);