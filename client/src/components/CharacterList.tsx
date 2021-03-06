import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
} from "react-router-dom";

import { getCharacters } from "../helpers/selectors";

import CharacterCard from "./CharacterCard";
import WeaponList from "./WeaponList";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxWidth: "100%", 
  },
  media: {
    height: 150,
  },
  list: {
    maxWidth: 125,
    fontSize: 15,
  },
  menuLink: {
    textDecoration: 'none',
},
charpaper:{
  width: "100%",
  height: "100%",
  
},
listitem: {
  borderRadius: 3,
  marginLeft: 10,
},

});

type Character = {
  id: number;
  name: string;
  dateCreated: string;
  lastUsed: string;
  race: string;
  questsCompleted: number;
  image: string;
  body: number;
  mind: number;
  attack: number;
  defend: number;
  movement: number;
  gold: number;
};

export default function CharacterList({ user }: any) {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  //pulled out from useEffect
  const refreshCharacters = function () {
      getCharacters(user).then((characters) => {
      setCharacters(characters);
      setSelectedIndex(0); 
    });
  }

  const characterList = characters.map((character, index) => {
    return (
      <ListItem
        button
        className={classes.listitem}
        selected={selectedIndex === index}
        onClick={(event) => handleListItemClick(event, index)}
      >
        <ListItemText primary={character.name} />
      </ListItem>
    );
  });

  React.useEffect(() => {
    refreshCharacters()
  }, []);

  return ( 
    <>




     <Grid container justify={"center"} spacing={6} className={classes.root}>
       
 
      <Grid item xs={2} sm={3}>
          <Typography className={classes.list}>
            <List component="nav" aria-label="main mailbox folders">
              {characterList}
            </List>
          </Typography>
          <Link className={classes.menuLink} to="/newcharacter">
              <Button  variant="contained" size="small" color="primary">
                New Character
              </Button>
          </Link>
        </Grid>
        <Grid item xs={8} sm={6} md={4}>
          <CharacterCard refreshCharacters={refreshCharacters} character={characters[selectedIndex]} user={user} button={true}/>
          
        </Grid>
      <Grid item xs={12} sm={12} md={8} lg={3} >
      <WeaponList character={characters[selectedIndex]} />
      {/* Weapon picture?? */}
      </Grid>
    </Grid>
     
    </>
  );
}
