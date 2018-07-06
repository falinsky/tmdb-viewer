import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function MainMenu({location, history}) {
  return (
    <Tabs
      value={location.pathname}
      onChange={(event, value) => {
        history.push(value);
      }}
    >
      <Tab value="/" label="Popular"/>
      <Tab value="/favorites" label="Favorites"/>
    </Tabs>
  );
}

export default MainMenu;