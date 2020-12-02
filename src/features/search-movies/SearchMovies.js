import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'material-ui-search-bar';
import { withStyles } from '@material-ui/core/styles';
import debounce from 'lodash/debounce';
import { prepareForNewSearch } from './searchMoviesSlice';
import { connect } from 'react-redux';

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

class SearchMovies extends React.Component {
  state = {
    query: '',
  };

  constructor(props) {
    super(props);

    this.handleRequestSearch = this.handleRequestSearch.bind(this);
    this.handleDebouncedRequestSearch = debounce(this.handleRequestSearch, 500);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const {
      onSubmit,
      match: {
        params: { query },
      },
    } = this.props;

    if (query) {
      this.setState({ query }, () => onSubmit(query));
    }
  }

  handleRequestSearch() {
    const { onSubmit, history } = this.props;
    const { query } = this.state;

    if (query.trim()) {
      onSubmit(query);
      history.push(`/search/${query}`);
    }
  }

  handleChange(query) {
    this.setState({ query }, () => this.handleDebouncedRequestSearch());
  }

  componentWillUnmount() {
    this.handleDebouncedRequestSearch.cancel();
  }

  render() {
    const { classes } = this.props;
    const { query } = this.state;

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
  onSubmit: PropTypes.func.isRequired,
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

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (query) => dispatch(prepareForNewSearch(query)),
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(SearchMovies));
