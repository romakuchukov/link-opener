import { TextareaAutosize, withStyles } from '@material-ui/core';

const typography = {
  fontSize:20,
  lineHeight:'1.3em',
  fontWeight:'normal',
  fontFamily: 'inherit',
  letterSpacing: 'normal'
};

const styles = (theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'center',
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
  textPane: { marginTop: '5%' },
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
  const [state, setState] = React.useState('');
  const {classes} = props;

  const parseLinks = (e) => {
    setState(e.target.value);
  }

  const mergeCls = (...classList) => classList.join(' ');

  return (
    <React.Fragment>
      {console.log(state.list)}
      <TextareaAutosize
        value={state.value}
        onChange={(e) => parseLinks(e)}
        className={mergeCls(classes.textArea, classes.common)}
        rowsMax={20}
        aria-label="Paste links"
        placeholder="Paste your links"
      />
      <ul className={mergeCls(classes.list, classes.common)}>
        {state && state.split("\n").filter(item => !!item).map((item,key) => <li key={key}><a href={item.trim()}>{item.trim()}</a></li>)}
      </ul>
    </React.Fragment>
  );
}

export default withStyles(styles)(MaxHeightTextarea);
/*

 https://create-react-app.dev/docs/making-a-progressive-web-app/
https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background
https://www.tutorialrepublic.com/faq/how-to-disable-resizable-property-of-textarea-using-css.php
https://www.w3schools.com/cssref/css3_pr_resize.asp
https://www.w3docs.com/snippets/css/how-to-disable-the-resizing-of-the-textarea-element.html
https://electrictoolbox.com/disable-textarea-resizing-safari-chrome/

*/