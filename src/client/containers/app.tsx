// @ts-ignore
import * as React from "react"
// @ts-ignore
import {useDispatch, useSelector} from 'react-redux'
// @ts-ignore
import {Container, CssBaseline} from "@material-ui/core";
import io from "socket.io-client";
import {setSocket} from "../actions/socket";
import AuthPage from "../components/authPage";
import IndexPage from "../components/indexPage";
import AppBar from "../components/appBar";

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const URL: string = "http://localhost:3000";
    const socket: SocketIOClient.Socket = io(URL);
    dispatch(setSocket(socket))
  }, []);

  const user = useSelector((state: any) => state.user);
  const socket = useSelector((state: any) => state.socket);

  return (<React.Fragment>
      {user !== null &&
      <AppBar/>
      }
      <Container maxWidth={"md"} component={"main"}>
        <CssBaseline />
        {user === null ?
          (socket === null ? null : <AuthPage/>) :
          <IndexPage/>
        }
      </Container>
    </React.Fragment>
  )
}
