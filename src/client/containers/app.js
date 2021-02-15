import React from 'react'
import { connect } from 'react-redux'
import { io } from "socket.io-client";


const App = ({message}) => {
  const [response, setResponse] = React.useState("");
  const URL = "http://localhost:3000";

  React.useEffect(() => {
    const socket = io(URL, {
      withCredentials: true,
    });
    socket.on("FromAPI", data => {
      setResponse(data);
    });
  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}
export default connect(mapStateToProps, null)(App)


