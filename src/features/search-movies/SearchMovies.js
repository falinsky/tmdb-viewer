import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'material-ui-search-bar';
import { withStyles } from '@material-ui/core/styles';
import debounce from 'lodash/debounce';
import { prepareForNewSearch } from './searchMoviesSlice';
import { useDispatch } from 'react-redux';

const styles = (theme) => ({
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
});

const SearchMovies = ({ classes, history, match }) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const search = (query) => {
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

SearchMovies.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default withStyles(styles)(SearchMovies);
