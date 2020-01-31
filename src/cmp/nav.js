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

  const { toggleCls, list, setState, toggle, strToArray } = data;

  const listArr = strToArray(list);

  const open = () => {
    if(listArr.length > 0) {
      listArr.map(item => {
        setState(prevState => ({
          ...prevState, value: prevState.value.replace(item, '').trim()
        }));

        if(item.trim()) {
          win.open(item);
          win.opener = null;
        }
      });
    }
    if(!toggleCls) toggle();
  }

  const clear = () => {
    setState(prevState => ({ ...prevState, value: '', toggleCls: true }));
  }

  return (
    <div className={classes.wrap}>
      <Button onClick={open} variant="contained" color="primary" disabled={!list.length}>Open All</Button>
      <Button onClick={clear} variant="contained" disabled={!list.length}>Clear</Button>
      <Button onClick={toggle} variant="contained" disabled={!list.trim().length}>Edit</Button>
    </div>
  );
}

export default withStyles(styles)(Nav);
