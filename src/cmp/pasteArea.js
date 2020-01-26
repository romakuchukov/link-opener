import { withStyles, TextareaAutosize, Button } from '@material-ui/core';

const typography = {
  fontSize:20,
  lineHeight:'1.3em',
  fontWeight:'normal',
  fontFamily: 'inherit',
  letterSpacing: 'normal'
};

const styles = (theme) => ({
  common: {
    background: '#fafafa',
    width: '100%',
    height: '100%',
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

const PasteArea = ({ classes, data } ) => {

  const { state, setState, list, toggle, mergeCls } = data;

  const strToArray = (str) => str.replace(/\n/g, ' ').split(' ').filter(item => !!item);

  const parseLinks = (e) => {
    const { value } = e.target;
    setState({value:strToArray(value)});
  }

  return (
    <div className={classes.textPane}>
      <TextareaAutosize
        value={list.join("\n")}
        onPaste={toggle}
        onChange={(e) => parseLinks(e)}
        className={mergeCls(classes.textArea, classes.common, state.clsToggle && classes.visible)}
        rowsMax={20}
        placeholder="Paste your links here"
      />
      <ul className={mergeCls(classes.list, classes.common, !state.clsToggle && classes.visible)}>
        {list.map((item, key) => <li key={key}><a target="_blank" rel="noopener noreferrer" href={item}>{item}</a></li>)}
      </ul>
    </div>
  );
}

export default withStyles(styles)(PasteArea);
