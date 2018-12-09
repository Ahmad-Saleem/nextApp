import { combineReducers } from 'redux';

import {userReducer} from '../microApps/user/reducer'
// import { userLogin } from '../microApps/login/reducer';
// import { languageReducer } from '../languages/languageReducer';
// import {adReducer} from '../microApps/adView/reducer';
// import { mapSearchReducer } from '../microApps/mapView/reducer';
// import { sharedReducer } from './sharedReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // login: userLogin,
  // lang: languageReducer,
  // adView: adReducer,
  // mapView: mapSearchReducer,
  // sharedData: sharedReducer,
});

export default rootReducer;