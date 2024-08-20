import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
});

const Nav = ({ data }) => {
  const { toggleCls, list, setState, toggle, strToArray } = data;

  const listArr = strToArray(list);

  const open = () => {
    if (listArr.length) {
      listArr.map((url) => {
        setState((prevState) => ({
          ...prevState,
          value: prevState.value.replace(url, '').trim(),
        }));

        if (url.trim()) {
          window.open(
            !url.trim().match(/^https?:\/\//i) ? `http://${url}` : url
          );
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
    <Wrapper>
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
    </Wrapper>
  );
};

Nav.propTypes = {
  data: PropTypes.shape({
    toggleCls: PropTypes.bool.isRequired,
    list: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    strToArray: PropTypes.func.isRequired,
  }).isRequired,
};

export default Nav;
