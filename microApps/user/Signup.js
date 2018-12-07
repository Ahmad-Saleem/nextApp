import React from 'react';
import Link from 'next/link';

export default class Signup extends React.Component {

    render(){
        return(
            <div>
                Signup <br />
                <Link href='/user?op=login' as='/user/login'>
                    <a> login  </a>
                </Link>
            </div>
        );
    }
}