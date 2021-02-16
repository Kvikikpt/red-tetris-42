import React from "react";
import {Button, Container, makeStyles, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {setUser} from "../actions/user";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function AuthPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [name, setName] = React.useState('');

  return (
    <Container maxWidth={"sm"}>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField
            variant={"outlined"}
            onInput={(e) => setName(e.target.value)}
            value={name}
            margin="normal"
            required
            fullWidth
            id="name"
            label="Имя пользователя"
            name="name"
            autoComplete="name"
            autoFocus
          />
        </form>
        <Button
          onClick={() => dispatch(setUser(name))}
          variant={"contained"}
          type="submit"
          fullWidth
          color="primary"
          className={classes.submit}
          disabled={name.length === 0}
        >
          Подтвердить
        </Button>
      </div>
    </Container>
  )
}
