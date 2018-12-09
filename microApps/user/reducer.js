import { USER_LOGIN } from './actions';

const initialState = {
    auth: null,
}

export const userReducer = (state = initialState, action) => {
    //console.log(action)
    switch(action.type){
        case USER_LOGIN: 
            return {
                ...state,
                auth: action.payload
            };
        default: return state;
        
    }
}