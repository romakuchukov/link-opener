import { withStyles, Button } from '@material-ui/core';

const styles = (theme) => ({
  wrap: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': { margin: 'auto' },
    '& button:first-of-type': { marginLeft: 0 },
    '& button:last-of-type': { marginRight: 0 },
  }
});

const win = window;

const Nav = ({ classes, data }) => {

  const { setState, toggle, clsToggle, list, strToArray } = data;

  const open = (list, clsToggle) => {
    if(list.length > 0) {
      list.map(item => {
        setState(prevState => ({
          ...prevState, value: prevState.value.replace(item, '')
        }));
        win.open(item);
        win.opener = null;
      });
    }
    clear();
  }

  const clear = () => {
    setState(prevState => ({ ...prevState, value: '', clsToggle: true }));
  }

  return (
    <div className={classes.wrap}>
      <Button onClick={() => open(strToArray(list), clsToggle)} variant="contained" color="primary" disabled={!list.length}>Open All</Button>
      <Button onClick={clear} variant="contained" disabled={!list.length}>Clear</Button>
      <Button onClick={toggle} variant="contained" disabled={!list.length}>Edit</Button>
    </div>
  );
}

export default withStyles(styles)(Nav);
