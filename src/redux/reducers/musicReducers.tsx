import { ActionTypes, SearchAction } from '../actions/musicAction';

type SearchResults = {
    resultCount?: number,
    results?: []
}

interface State {
  searchResults?: SearchResults;
  currentPage: number;
  currentContent: number
  query: string;
}

const initialState: State = {
  searchResults: {resultCount: 0, results: []} ,
  currentPage: 1,
  currentContent: 0,
  query: '',
};

const searchReducer  = (state = initialState, action: SearchAction): State => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
        currentPage: 1,
        currentContent: 10,
        query:'jo'
      };
    case ActionTypes.LOAD_MORE_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
        currentPage: state.currentPage,
        currentContent: state.currentContent + 10,
        query: state.query
      };
      case ActionTypes.SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer ;