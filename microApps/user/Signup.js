import React from 'react';
import Link from '../../components/Link';
import {connect} from 'react-redux';
class Signup extends React.Component {

    render(){
        console.log(this.props)
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
const mapStateToProps = ({user}) => {
    return {user};
}
export default connect(mapStateToProps)(Signup);