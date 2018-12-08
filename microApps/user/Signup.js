import React from 'react';
import Link from '../../components/Link';

export default class Signup extends React.Component {

    render(){
        return(
            <div>
                Signup <br />
                <Link page='user' params='login' query='?op=login'>
                    login
                </Link>
            </div>
        );
    }
}