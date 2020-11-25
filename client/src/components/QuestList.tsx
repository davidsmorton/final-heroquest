import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { getQuests } from '../helpers/selectors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

type Quest = {
  name :string,
  description :string
}

export default function QuestList() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [quests, setQuest] = React.useState<Quest[]>([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }; 

  React.useEffect(()=>{
    getQuests()
    .then((quests)=>{
      setQuest(quests);
    });
  },[])

  const list = quests.map((quest, index) => {
    return (         
      <>
      <Typography paragraph>{quest.name}</Typography>
          <Typography paragraph>
            {quest.description}
           <br /> ~~~~~~~~~~~~~~~~~~~~~~
          </Typography>
          </>) 
  });

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Completed Quests"
        subheader="NAME OF USER"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          High Adventure in a World of Magic
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        {list}
        </CardContent>
      </Collapse>
    </Card>
  );
}