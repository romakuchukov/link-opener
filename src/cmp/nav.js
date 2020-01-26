import { withStyles, Button } from '@material-ui/core';

const styles = (theme) => ({
  wrap: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
    '& > *': { margin: 'auto' },
    '& button:first-of-type': { marginLeft: 0 },
    '& button:last-of-type': { marginRight: 0 },
  }
});

const win = window;

const Nav = ({ classes, data }) => {

  const { state, setState, toggle, len } = data;

  const open = (state) => {
    if(state.value.length > 0) {
      state.value.map(item => {
        setState(prevState => ({
          ...prevState, value: prevState.value.filter(val => val !== item)
        }));
        win.open(item.trim());
        win.opener = null;
      });
    }
    if(!state.clsToggle) toggle();
  }

  const clear = () => {
    setState({value: []});
  }

  return (
    <div className={classes.wrap}>
      <Button onClick={() => open(state)} variant="contained" disabled={!len}>Open All</Button>
      <Button onClick={clear} disabled={!len}>Clear</Button>
      <Button onClick={toggle} disabled={!len}>Convert</Button>
    </div>
  );
}

export default withStyles(styles)(Nav);
