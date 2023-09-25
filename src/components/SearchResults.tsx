import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/index';
import { fetchMoreResults} from '../redux/actions/musicAction'; 
import { ThunkDispatch } from 'redux-thunk';
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import ReactPlayer from 'react-player';


const SearchResults =() => {

  const searchResults1 = useSelector((state: RootState) => state.search.searchResults);
  const currentPage = useSelector((state: RootState) => state.search.currentPage);
  const currentContent = useSelector((state: RootState) => state.search.currentContent);
  const query = useSelector((state: RootState) => state.search.query);
  const dispatch: ThunkDispatch<RootState, void, any> = useDispatch();


  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    if (
      containerRef.current &&
      containerRef.current.scrollTop + containerRef.current.clientHeight >=
        containerRef.current.scrollHeight
    ) {
     
      dispatch(fetchMoreResults(query, currentPage, currentContent + 10)); 
    }
  }, [dispatch, query, currentPage, currentContent]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll',  handleScroll);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);




  return (
// Showing search result content
    <div ref={containerRef} style={{ height: '80vh', overflowY: 'auto' }}>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Alburm</TableCell>
                <TableCell>Video Clip</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchResults1 && searchResults1.results && searchResults1?.results.map((result:any, index) => (
                  <TableRow key={index}>
                    <TableCell>{result.artistName}</TableCell>
                    <TableCell>{result.collectionCensoredName}</TableCell>
                    <TableCell>
                      <Container maxWidth="md">
                        <div className='playerDiv'>
                          <ReactPlayer width={'100%'} height='100%' url={result.previewUrl} playing={false} muted={true} controls={true}/>
                        </div>
                      </Container>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>        
    </div>
  );
}

export default SearchResults;