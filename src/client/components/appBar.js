import React from "react";
import {Avatar, makeStyles, Toolbar, Typography, AppBar, Container} from "@material-ui/core";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
  flex: {
    flexGrow: 1,
  },
  username: {
    marginRight: 10
  }
}));

export default function Topper() {
  const classes = useStyles();
  const user = useSelector(state => state.user);

  const [icon, setIcon] = React.useState(user && user[0]);

  return <AppBar position="relative">
    <Container maxWidth={"md"}>
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        Red Tetris 42
      </Typography>
      <div className={classes.flex}/>
      <Typography variant="h6" color="inherit" noWrap className={classes.username}>
        {user}
      </Typography>
      <Avatar>
        {icon}
      </Avatar>
    </Toolbar>
    </Container>
  </AppBar>
}
