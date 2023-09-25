import React from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import { Provider } from 'react-redux';
import store from './middlewares/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 style={{paddingLeft: "57px"}}> Find Your Music</h1>
        <SearchForm />
        <SearchResults />
      </div>
    </Provider>
  );
}

export default App;
