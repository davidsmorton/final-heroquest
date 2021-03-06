import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Signup from "./Signup";
import { AutoSizer } from "@material-ui/data-grid";

const useStyles = makeStyles({
  root: {
    maxWidth: "60%",
    padding: 40,
    background: "#735D58",
    marginLeft: 7,
    
  },
  media: {
    height: 125,
    backgroundSize: "contain",
  },
  weapondescription:{
    fontSize: 12,
  }
});

export default function WeaponCard({ weapon }: any) {
  const classes = useStyles();

  return (
    <>
      {weapon && (
        <Card className={classes.root}>
          <CardHeader title={weapon.name} />
          <CardMedia
            className={classes.media}
            image={weapon.image}
            title={weapon.name}
          />
          <CardContent>
            <Typography className={classes.weapondescription}>{weapon.description}</Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
