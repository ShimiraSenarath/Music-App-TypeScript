import { combineReducers } from 'redux';
import searchReducer from './musicReducers';

const rootReducer = combineReducers({
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;