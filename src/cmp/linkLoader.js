import { TextareaAutosize, withStyles } from '@material-ui/core';


const styles = (theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
    [theme.breakpoints.down(290)]: { display: 'none' }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  typography: { padding: theme.spacing(2) },
});

const MaxHeightTextarea = (props) => {
  const {classes} = props;

  const parseLinks = () => {
    console.log('logging', 1);
    console.log(classes), 2;
    //console.log(styles, 3);
  }
  return (
    <TextareaAutosize
      onChange={parseLinks}
      onFocus={parseLinks}
      className={classes.button}
      aria-label="Paste links"
      placeholder="Paste your links"
      defaultValue=""
    />
  );
}

export default withStyles(styles)(MaxHeightTextarea);