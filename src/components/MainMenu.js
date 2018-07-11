import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function MainMenu({location, history, items}) {
  const itemsMap = new Map(items);
  return (
    <Tabs
      value={itemsMap.has(location.pathname) ? location.pathname : false}
      onChange={(event, value) => {
        history.push(value);
      }}
    >
      {Array.from(itemsMap.entries()).map(([link, label]) => (
        <Tab value={link} label={label} key={link}/>
      ))}
    </Tabs>
  );
}

MainMenu.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired
  ).isRequired,
};

export default MainMenu;