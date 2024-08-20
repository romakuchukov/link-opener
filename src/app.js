import React from 'react'; // Add this line to import the React module
import { CssBaseline } from '@material-ui/core';
import { Nav, PasteArea } from './cmp';

const App = () => {
  const [state, setState] = React.useState({ value: '', toggleCls: true });

  const strCleanup = (str) =>
    str
      .replace(/^\s*[\r\n]/gm, '')
      .replace(/\s/gm, '\n')
      .split(' ')
      .join('');
  const strToArray = (str) => str.replace(/\n/g, ' ').split(' ');

  const toggle = () => {
    setState((prevState) => ({
      ...prevState,
      toggleCls: !prevState.toggleCls,
      value: strCleanup(prevState.value),
    }));
  };

  const list = state.value;
  const toggleCls = state.toggleCls;
  const data = { toggleCls, list, setState, toggle, strToArray };

  return (
    <React.Fragment>
      <CssBaseline />
      <Nav data={data} />
      <PasteArea data={data} />
    </React.Fragment>
  );
};

export default App;
