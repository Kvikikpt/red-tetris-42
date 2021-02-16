import React from "react";
import {Button, Card, CardHeader, Grid, List, ListItem, ListItemText, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AuthPage() {
  const classes = useStyles();

  return <Grid container spacing={4} style={{marginTop: 10, height: "100%"}}>
    <Grid item xs={8}>
      <Card style={{height: 600}}>
        <div className={classes.paper}>
          <Button
            className={classes.button}
            variant={"contained"}
            fullWidth
            color={"secondary"}
          >
            Создать новую игру
          </Button>
          <Button
            className={classes.button}
            variant={"contained"}
            fullWidth
            color={"secondary"}
          >
            Присоединиться к существующей игре
          </Button>
        </div>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card style={{height: 600}}>
        <CardHeader
          title={"Игроки в сети:"}
        />
        <List>
          <ListItem>
            <ListItemText primary={"lol"}/>
          </ListItem>
        </List>
      </Card>
    </Grid>
  </Grid>
}
