import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import Link from '../../components/Link';
import { userLogin } from './actions';

class Login extends React.Component {
    componentDidMount(){
        this.props.userLogin('','');
    }
    render(){
        console.log(this.props)
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ userLogin }, dispatch);
}

const mapStateToProps = ({user}) => {
    return {user};
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);