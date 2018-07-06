import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'material-ui-search-bar';
import {withStyles} from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  }
});

function SearchMovies({classes, query, onChange, onSubmit}) {
  return (
    <div className={classes.root}>
      <SearchBar
        value={query}
        onChange={onChange}
        onRequestSearch={() => {
          if (query.trim()) {
            onSubmit(query);
          }
        }}
      />
    </div>
  );
}

SearchMovies.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchMovies);