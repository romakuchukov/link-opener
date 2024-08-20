import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Button } from '@material-ui/core';

const styles = () => ({
  wrap: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': { margin: 'auto' },
    '& button:first-of-type': { marginLeft: 0 },
    '& button:last-of-type': { marginRight: 0 },
  },
});

const Nav = ({ classes, data }) => {
  const { toggleCls, list, setState, toggle, strToArray } = data;

  const listArr = strToArray(list);

  const open = () => {
    if (listArr.length > 0) {
      listArr.map((item) => {
        setState((prevState) => ({
          ...prevState,
          value: prevState.value.replace(item, '').trim(),
        }));

        if (item.trim()) {
          window.open(item);
          window.opener = null;
        }
      });
    }
    if (!toggleCls) toggle();
  };

  const clear = () => {
    setState((prevState) => ({ ...prevState, value: '', toggleCls: true }));
  };

  return (
    <div className={classes.wrap}>
      <Button
        onClick={open}
        color="primary"
        variant="contained"
        disabled={!list.length}
      >
        Open All
      </Button>
      <Button onClick={clear} variant="contained" disabled={!list.length}>
        Clear
      </Button>
      <Button
        onClick={toggle}
        variant="contained"
        disabled={!list.trim().length}
      >
        Edit
      </Button>
    </div>
  );
};

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.shape({
    toggleCls: PropTypes.bool.isRequired,
    list: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    strToArray: PropTypes.func.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Nav);
