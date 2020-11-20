import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateQuery } from './searchMoviesSlice';

// FIXME: should this functionality be merged with SearchMoviesResult and/or SearchMovies component(s)
const SearchQueryRestore = ({ match }) => {
  const { query } = match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateQuery(query));
  }, [query, dispatch]);

  return null;
};

SearchQueryRestore.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SearchQueryRestore;
