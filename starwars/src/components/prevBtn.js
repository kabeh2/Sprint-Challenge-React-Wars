import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const PrevBtn = props => {
  const [prevDisabled, setPrevDisabled] = useState(false);

  useEffect(() => {
    if (props.prev === null) {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }
  }, [props.prev, prevDisabled]);

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
      disabled={prevDisabled}
      onClick={props.onClick}
    >
      <Icon className={classes.leftIcon}>arrow_back_ios</Icon>
      Previous
    </Button>
  );
};

export default PrevBtn;
