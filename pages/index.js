import React from "react";
import {connect} from "react-redux";
import {setClientState } from '../store/persist';

export default connect(
    (state) => state,
    {setClientState}
)(({fromServer, fromClient, setClientState}) => (
    <div>
        <div>fromServer: {fromServer}</div>
        <div>fromClient: {fromClient}</div>
        <div><button onClick={e => setClientState('bar')}>Set Client State</button></div>
    </div>
));