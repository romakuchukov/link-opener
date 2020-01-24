import { TextareaAutosize } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: { position: 'relative' },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: '100%',
      maxWidth: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  }
}));
//const styles = useStyles();

const MaxHeightTextarea = (props) => {
  const styles = useStyles();

  const parseLinks = () => {
    console.log('logging', 1);
    console.log(styles), 2;
    //console.log(styles, 3);
  }
  return (
    <TextareaAutosize
      onChange={parseLinks}
      onFocus={parseLinks}
      className={styles.button}
      aria-label="Paste links"
      placeholder="Paste your links"
      defaultValue=""
    />
  );
}

export default MaxHeightTextarea;