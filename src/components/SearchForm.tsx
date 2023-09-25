import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchResults } from '../redux/actions/musicAction';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../redux/reducers/index';
import { Input } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@mui/icons-material/Search';

function SearchForm() {
 
  const [query, setQuery] = useState('');

  const dispatch: ThunkDispatch<RootState, void, any> = useDispatch();

  const handleSearch = () => {

    dispatch(fetchSearchResults(query, 1, 10)); 
  };

  return (

    // Search Form
    <div style={{ 
      textAlign: "end",
      paddingRight: "57px",}}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
      <IconButton onClick={handleSearch}>
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </div>
  );
}

export default SearchForm;