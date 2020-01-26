import { TextareaAutosize, Button } from '@material-ui/core';

const PasteArea = (props) => {
  const { classes, state, list, toggle, setState, mergeCls } = props.data;

  const strToArray = (str) => str.replace(/\n/g, ' ').split(' ').filter(item => !!item);

  const parseLinks = (e) => {
    const { value } = e.target;
    setState({value:strToArray(value)});
  }

  console.log(props.data);

  return (
    <div className={classes.textPane}>
      <TextareaAutosize
        value={list.join("\n")}
        onPaste={toggle}
        onChange={(e) => parseLinks(e)}
        className={mergeCls(classes.textArea, classes.common, state.clsToggle && classes.visible)}
        rowsMax={20}
        placeholder="Paste your links"
      />
      <ul className={mergeCls(classes.list, classes.common, !state.clsToggle && classes.visible)}>
        {list.map((item, key) => <li key={key}><a href={item}>{item}</a></li>)}
      </ul>
    </div>
  );
}

export default PasteArea;
