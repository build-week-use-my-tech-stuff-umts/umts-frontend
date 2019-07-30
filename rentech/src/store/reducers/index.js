import { combineReducers } from 'redux';

import authReducer from './authReducer';
import equipmentReducer from './equipmentReducer';

export default combineReducers({
	authReducer,
  equipmentReducer,
});