import { withStyles, CssBaseline } from '@material-ui/core';

import Nav from './nav';
import PasteArea from './pasteArea';

const typography = {
  fontSize:20,
  lineHeight:'1.3em',
  fontWeight:'normal',
  fontFamily: 'inherit',
  letterSpacing: 'normal'
};

const styles = (theme) => ({
  wrap: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
    '& > *': { margin: 'auto' },
    '& button:first-of-type': { marginLeft: 0 },
    '& button:last-of-type': { marginRight: 0 },
  },
  common: {
    background: '#fafafa',
    width: '100%',
    height: '100%',
    // top: 0,
    // left: 0,
    padding: 0,
    margin: 0,
    zIndex: -1
  },
  list: {
    zIndex: -1,
    position: 'relative',
    paddingBottom: 1,
    outline: 'none!important',
    '& li': { listStyle: 'none' },
    '& a': { ...typography },
  },
  textPane: { marginTop: '1%' },
  textArea: {
    position: 'absolute',
    resize: 'none',
    color:'#222',
    border: 'none',
    borderBottom: '1px solid #222',
    outline: 'none',
    ...typography
   },
   visible: {
    zIndex: 1,
    outline: 'solid 1px #e0e0e0'
  }
});

const MaxHeightTextarea = (props) => {

  const [state, setState] = React.useState({value: [], clsToggle: true});

  const {classes} = props;

  const mergeCls = (...clsList) => clsList.filter(item => item).join(' ');

  const toggle = () => {
    setState(prevState => ({ ...prevState, clsToggle: !prevState.clsToggle }));
  }

  const list = state.value;

  return (
    <React.Fragment>
      <CssBaseline />
      <Nav data={{state, setState, toggle, len:list.length, wrap:classes.wrap }} />
      <PasteArea data={{classes, state, list, toggle, setState, mergeCls}} />
    </React.Fragment>
  );
}

export default withStyles(styles)(MaxHeightTextarea);
/*

 http://localhost:8080/
http://localhost:8080/
 http://localhost:8080/
http://localhost:8080/

*/