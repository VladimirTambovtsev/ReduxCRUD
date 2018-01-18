import { combineReducers } from 'redux';

import characters from './characters_reducer';
import invoices from './invoices_reducer';

 

const rootReducer = combineReducers({
	characters,
	invoices
})

export default rootReducer;