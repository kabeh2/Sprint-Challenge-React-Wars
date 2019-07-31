import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Character = props => {
  const useStyles = makeStyles(theme => ({
    card: {
      width: 200,
      marginBottom: 16,
      height: "100%" // Control height HERE!
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: red[500],
      margin: 0
    }
  }));

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick(name, index) {
    setExpanded(!expanded);

    // console.log("Expanded: " + expanded);
    // console.log("Index: " + index);
    // console.log("Name: " + name);
  }
  return (
    <Card className={classes.card}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 16
        }}
      >
        <Avatar aria-label="recipe" className={classes.avatar}>
          {props.name.charAt(0)}
        </Avatar>
        {
          <Typography variant="h5" style={{ margin: "8px auto" }}>
            {props.name}
          </Typography>
        }
      </div>

      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded
        })}
        onClick={() => handleExpandClick(props.name, props.index)}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.data.gender}</Typography>
          <Typography paragraph>{props.data.eye_color}</Typography>
          <Typography paragraph>{props.data.height}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Character;
