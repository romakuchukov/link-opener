import { CssBaseline } from '@material-ui/core';

import { Nav, PasteArea } from './cmp';


const App = (props) => {

  const [state, setState] = React.useState({value: [], clsToggle: true});

  const mergeCls = (...clsList) => clsList.filter(item => item).join(' ');

  const toggle = () => {
    setState(prevState => ({ ...prevState, clsToggle: !prevState.clsToggle }));
  }

  const list = state.value;

  return (
    <React.Fragment>
      <CssBaseline />
      <Nav data={{ state, setState, toggle, len:list.length  }} />
      <PasteArea data={{ state, setState, list, toggle, mergeCls }} />
    </React.Fragment>
  );
}

export default App;
/*

 http://localhost:8080/ http://localhost:8080/
 http://localhost:8080/ http://localhost:8080/

*/