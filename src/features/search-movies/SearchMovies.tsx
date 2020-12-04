import React, { useEffect, useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import { makeStyles } from '@material-ui/core/styles';
import debounce from 'lodash/debounce';
import { prepareForNewSearch } from './searchMoviesSlice';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    flexShrink: 1,
  },
  input: {
    '& input': {
      width: '100%',
    },
  },
}));

type SearchMoviesProps = RouteComponentProps<{ query?: string }>;

const SearchMovies = ({ history, match }: SearchMoviesProps) => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const search = (query: string) => {
    if (query.trim()) {
      dispatch(prepareForNewSearch(query));
      history.push(`/search/${query}`);
    }
  };

  const debouncedSearch = useRef(debounce(search, 500));

  useEffect(() => {
    const {
      params: { query },
    } = match;

    if (typeof query !== 'undefined') {
      setQuery(query);
    }
  }, [match]);

  useEffect(() => {
    debouncedSearch.current(query);
  }, [query]);

  const handleRequestSearch = () => {
    debouncedSearch.current.cancel();
    search(query);
  };

  return (
    <div className={classes.root}>
      <SearchBar
        value={query}
        onChange={setQuery}
        onRequestSearch={handleRequestSearch}
        classes={{
          input: classes.input,
        }}
      />
    </div>
  );
};

export default SearchMovies;
