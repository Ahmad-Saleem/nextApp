import React from 'react';
import Link from 'next/link';

export default class Login extends React.Component {

    render(){
        return(
            <div>
                Login Form <br />
                <Link href='/user?op=signup' as='/user/signup'>
                    <a> Signup </a>
                </Link>
            </div>
        );
    }
}