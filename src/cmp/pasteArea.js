import React from 'react';
import PropTypes from 'prop-types';
import { TextareaAutosize } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/system';

// const customTheme = createTheme({});

const typography = {
  fontSize: 20,
  lineHeight: '1.3em',
  fontWeight: 'normal',
  fontFamily: 'inherit',
  letterSpacing: 'normal',
};

const customTheme = createTheme({
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
    ...typography,
  },
  visible: {
    display: 'block',
    outline: 'solid 1px #e0e0e0',
    '&:not(ul)': { borderBottom: '1px solid #222' },
  },
});

const Textarea = styled(TextareaAutosize)(({ theme }) => ({
  color: theme.textArea.color,
  border: theme.textArea.border,
  resize: theme.textArea.resize,
  outline: theme.textArea.outline,
  position: theme.textArea.position,
  boxSizing: theme.textArea.boxSizing,
  typography: theme.textArea.typography,
}));

const PasteArea = ({ data }) => {
  const { list, setState, toggle, strToArray } = data;
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
    <ThemeProvider theme={customTheme}>
      <Textarea
        rowsmax={20}
        value={list}
        onPaste={paste}
        aria-label="Input links"
        onChange={(e) => parseLinks(e)}
        placeholder="Paste your links here"
      />
      <ul>
        {list &&
          strToArray(list).map((item, key) => (
            <li key={key}>
              <a target="_blank" rel="noopener noreferrer" href={item}>
                {item}
              </a>
            </li>
          ))}
      </ul>
    </ThemeProvider>
  );
};

PasteArea.propTypes = {
  data: PropTypes.shape({
    // toggleCls: PropTypes.bool.isRequired,
    list: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    strToArray: PropTypes.func.isRequired,
  }).isRequired,
};

export default styled(PasteArea)(({ theme }) => ({
  list: {
    padding: theme.spacing(2),
  },
  textArea: {
    padding: theme.spacing(2),
  },
}));
