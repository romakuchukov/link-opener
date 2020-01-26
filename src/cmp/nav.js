import { Button } from '@material-ui/core';

const Nav = (props) => {

  const { state, setState, toggle, len, wrap } = props.data;

  const open = (state) => {
    if(state.value.length > 0) {
      state.value.map(item => {
        setState(prevState => ({
          ...prevState, value: prevState.value.filter(val => val !== item)
        }));
        window.open(item.trim());
      });
    }
    if(!state.clsToggle) toggle();
  }

  const clear = () => {
    setState({value: []});
  }


  return (
    <div className={wrap}>
      <Button onClick={() => open(state)} variant="contained" disabled={!len}>Open All</Button>
      <Button onClick={clear} disabled={!len}>Clear</Button>
      <Button onClick={toggle} disabled={!len}>Convert</Button>
    </div>
  );
}

export default Nav;
