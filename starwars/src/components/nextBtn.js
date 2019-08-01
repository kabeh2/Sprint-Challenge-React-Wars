import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const NextBtn = props => {
  const [nextDisabled, setNextDisabled] = useState(false);

  useEffect(() => {
    // Start it off by assuming the component is still mounted
    let mounted = true;
    if (mounted) {
      if (props.next === null) {
        setNextDisabled(true);
      } else {
        setNextDisabled(false);
      }
    }
    return () => {
      // When cleanup is called, toggle the mounted variable to false
      mounted = false;
    };
  }, [props.next, nextDisabled]);

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    }
  }));

  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      disabled={nextDisabled}
      onClick={props.onClick}
    >
      Next
      <Icon className={classes.rightIcon}>navigate_next</Icon>
    </Button>
  );
};

export default NextBtn;
