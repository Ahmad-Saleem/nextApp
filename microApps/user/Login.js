import React from 'react';
import Link from '../../components/Link';

export default class Login extends React.Component {

    render(){
        return(
            <div>
                Login Form <br />
                <Link page='user' query='?op=signup' params='signup'>
                    Signup
                </Link>
            </div>
        );
    }
}