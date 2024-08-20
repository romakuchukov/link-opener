import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, TextareaAutosize } from '@material-ui/core';

const typography = {
  fontSize: 20,
  lineHeight: '1.3em',
  fontWeight: 'normal',
  fontFamily: 'inherit',
  letterSpacing: 'normal',
};

const styles = (theme) => ({
  common: {
    background: '#fafafa',
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    display: 'none',
  },
  list: {
    position: 'relative',
    padding: theme.spacing(2),
    outline: 'none!important',
    '& li': { listStyle: 'none' },
    '& a': { ...typography },
  },
  textPane: {
    width: '100%',
    marginTop: 50,
  },
  textArea: {
    position: 'relative',
    resize: 'none',
    color: '#222',
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box',
    padding: theme.spacing(2),
    ...typography,
  },
  visible: {
    display: 'block',
    outline: 'solid 1px #e0e0e0',
    '&:not(ul)': { borderBottom: '1px solid #222' },
  },
});

const PasteArea = ({ classes, data }) => {
  const { toggleCls, list, setState, toggle, strToArray } = data;
  const [pasteState, setPaste] = React.useState(false);

  const parseLinks = (e) => {
    const { value } = e.target;
    setState((prevState) => ({ ...prevState, value }));
  };

  const paste = () => {
    setPaste(true);
  };

  React.useEffect(() => {
    if (pasteState) {
      toggle();
      setPaste(false);
    }
  }, [list]);

  return (
    <div className={classes.textPane}>
      <TextareaAutosize
        onPaste={paste}
        value={list}
        rowsMax={20}
        aria-label="Input links"
        onChange={(e) => parseLinks(e)}
        placeholder="Paste your links here"
        className={[
          classes.textArea,
          classes.common,
          toggleCls && classes.visible,
        ].join(' ')}
      />
      <ul
        className={[
          classes.list,
          classes.common,
          !toggleCls && classes.visible,
        ].join(' ')}
      >
        {list &&
          strToArray(list).map((item, key) => (
            <li key={key}>
              <a target="_blank" rel="noopener noreferrer" href={item}>
                {item}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

PasteArea.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  toggleCls: PropTypes.bool.isRequired,
};

export default withStyles(styles)(PasteArea);
