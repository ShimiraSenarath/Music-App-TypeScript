import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers/index';

//Redux store
const store = configureStore({
    reducer: rootReducer,
  });

  export type AppDispatch = typeof store.dispatch;

export default store;