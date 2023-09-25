import { Action } from 'redux';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/index';
import axios from 'axios';


//Action Types
export enum ActionTypes {
  SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS',
  LOAD_MORE_RESULTS = 'LOAD_MORE_RESULTS',
  SET_QUERY = 'SET_QUERY',
}


//Action
export interface SearchAction extends Action {
  type: ActionTypes;
  payload: any;
}

export const setSearchResults = (results: any[]): SearchAction => ({
  type: ActionTypes.SET_SEARCH_RESULTS,
  payload: results,
});

export const loadMoreResults = (results: any[]): SearchAction => ({
  type: ActionTypes.LOAD_MORE_RESULTS,
  payload: results,
});

  export const setQuery = (query: string): SearchAction => ({
    type: ActionTypes.SET_QUERY,
    payload: query,
  });

//Fetch search data
export const fetchSearchResults = (
    query: string,
    page: number,  
    limit: number
    ): ThunkAction<void, RootState, unknown, SearchAction> => {
    return async (dispatch: Dispatch<SearchAction>, getState: () => RootState) => {
      try {
       const response = await axios.get(`https://itunes.apple.com/search?term=${query}&page=${page}&limit=${limit}&entity=musicVideo`);
      
        if (page === 1) {
          dispatch(setSearchResults(response.data));
          console.log(setSearchResults,"ttt");
          
        } else {
          dispatch(loadMoreResults(response.data));
        }


      } catch (error) {
        console.error('Error fetching data:', error);
      }

    };
  };

//Fetching load more data
  export const fetchMoreResults = (
    query: string,
    page: number,
    limit: number
  ): ThunkAction<void, RootState, unknown, SearchAction> => {
    return async (dispatch: Dispatch<SearchAction>) => {
      try {
        const response = await axios.get(`https://itunes.apple.com/search?term=${query}&page=${page}&limit=${limit}&entity=musicVideo`);
  
        dispatch(loadMoreResults(response.data));
        console.log(loadMoreResults,"lll");
      } catch (error) {
        console.error('Error fetching more data:', error);
      }
    };
  };

  