// @ts-ignore
import * as React from "react"
// @ts-ignore
import {Avatar, makeStyles, Toolbar, Typography, AppBar, Container, Theme} from "@material-ui/core";
// @ts-ignore
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme: Theme) => ({
  flex: {
    flexGrow: 1,
  },
  username: {
    marginRight: 10
  }
}));

export default function Topper() {
  const classes = useStyles();
  const user = useSelector((state: any) => state.user);

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
