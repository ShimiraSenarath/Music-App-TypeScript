import { RootState } from '../redux/reducers/index';

export const selectQuery = (state: RootState) => state.search.query;