import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Container, CssBaseline} from "@material-ui/core";
import {io} from "socket.io-client";
import {setSocket} from "../actions/socket";
import AuthPage from "../components/authPage";
import IndexPage from "../components/indexPage";
import AppBar from "../components/appBar";

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const URL = "http://localhost:3000";
    let socket = io(URL, {
      withCredentials: true,
    });
    dispatch(setSocket(socket))
  }, []);

  const user = useSelector(state => state.user);

  return (<React.Fragment>
      {user !== null &&
      <AppBar/>
      }
      <Container maxWidth={"md"} component={"main"}>
        <CssBaseline />
        {user === null ?
          <AuthPage/> :
          <IndexPage/>
        }
      </Container>
    </React.Fragment>
  )
}
