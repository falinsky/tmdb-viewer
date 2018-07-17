import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'material-ui-search-bar';
import {withStyles} from '@material-ui/core/styles';
import debounce from 'lodash/debounce';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    flexShrink: 1,
  },
  input: {
    '& input': {
      width: '100%',
    }
  }
});

class SearchMovies extends React.Component {
  constructor(props) {
    super(props);

    this.handleRequestSearch = this.handleRequestSearch.bind(this);
    this.handleDebouncedRequestSearch = debounce(this.handleRequestSearch, 500);
    this.handleChange = this.handleChange.bind(this);
  }

  handleRequestSearch() {
    const {query, onSubmit} = this.props;

    if (query.trim()) {
      onSubmit(query);
    }
  };

  handleChange(value) {
    this.props.onChange(value);

    this.handleDebouncedRequestSearch(this.props.query);
  };

  componentWillUnmount() {
    this.handleDebouncedRequestSearch.cancel();
  }

  render() {
    const {classes, query} = this.props;

    return (
      <div className={classes.root}>
        <SearchBar
          value={query}
          onChange={this.handleChange}
          onRequestSearch={this.handleRequestSearch}
          classes={{
            input: classes.input,
          }}
        />
      </div>
    );
  }
}

SearchMovies.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchMovies);