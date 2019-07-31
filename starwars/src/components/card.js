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

const MediaCard = props => {
  const useStyles = makeStyles(theme => ({
    card: {
      width: 200,
      marginBottom: 16
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
    },
    card_container: {
      display: "flex",
      maxWidth: 1064,
      flexWrap: "wrap",
      margin: "auto",
      justifyContent: "space-between"
    }
  }));

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick(index) {
    setExpanded(!expanded);

    console.log("All: " + expanded);

    console.log("Index: " + index);
  }

  const a = props.data.map((data, index) => {
    return (
      <Card className={classes.card} key={index}>
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
            {data.name.charAt(0)}
          </Avatar>
          {
            <Typography variant="h5" key={index} style={{ margin: "8px auto" }}>
              {data.name}
            </Typography>
          }
        </div>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={() => handleExpandClick(index)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{data.gender}</Typography>
            <Typography paragraph>{data.eye_color}</Typography>
            <Typography paragraph>{data.height}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  });

  return <div className={classes.card_container}>{a}</div>;
};

export default MediaCard;
