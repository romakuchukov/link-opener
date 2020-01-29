import { CssBaseline } from '@material-ui/core';

import { Nav, PasteArea } from './cmp';


const App = (props) => {

  const [state, setState] = React.useState({value: '', clsToggle: true});

  const strCleanup = (str) => str.replace(/^\s*[\r\n]/gm, '').replace(/\s/gm, '\n').split(' ').join('');
  const strToArray = (str) => str.replace(/\n/g, ' ').split(' ').filter(item => !!item);

  const toggle = () => {
    setState(prevState => ({
      ...prevState,
      clsToggle: !prevState.clsToggle,
      value:strCleanup(prevState.value)
    }));
  }

  const list = state.value;
  const clsToggle = state.clsToggle;

  return (
    <React.Fragment>
      <CssBaseline />
      <Nav data={{ setState, toggle, clsToggle, list, strToArray }} />
      <PasteArea data={{ setState, toggle, clsToggle, list, strToArray }} />
    </React.Fragment>
  );
}

export default App;
/*

 http://localhost:8080/ http://localhost:8080/
 http://localhost:8080/ http://localhost:8080/

*/