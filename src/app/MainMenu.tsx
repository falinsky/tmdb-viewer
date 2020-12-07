import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexShrink: 0,
  },
});

interface MainMenuItem {
  path: string;
  label: string;
  iconComponent: React.ElementType;
}

type MainMenuProps = RouteComponentProps & {
  items: MainMenuItem[];
};

function MainMenu({ location, history, items }: MainMenuProps) {
  const classes = useStyles();
  const itemsMap = new Map(items.map((item) => [item.path, item]));
  return (
    <Tabs
      className={classes.root}
      value={itemsMap.has(location.pathname) ? location.pathname : false}
      onChange={(event, value) => {
        history.push(value);
      }}
    >
      {Array.from(itemsMap.values()).map((item) => (
        <Tab
          value={item.path}
          label={item.label}
          icon={<item.iconComponent />}
          key={item.path}
        />
      ))}
    </Tabs>
  );
}

export default MainMenu;
