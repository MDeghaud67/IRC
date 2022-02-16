import React, { Component } from "react";
import io from "socket.io-client";
import Login from "./components/login";
import UsersList from "./components/usersList";
import Chat from "./components/chat";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      socket: io("http://localhost:3000"),
      avatar: null,
      user: "",
      currentLog: false,
    };
  }

  componentDidMount() {
    this.state.socket.on("logged", (newUser) => {
      this.setState({
        user: newUser,
        currentLog: true,
      });
    });

    this.state.socket.on("error message", (message) => {
      alert(message);
    });
  }

  render() {
    return (
      <div className="app">
        <div className="idbar">
          <h1>Internet Relay Chat</h1>
        </div>
        <div className="app-content">
          {this.state.currentLog && (
            <>
              <UsersList socket={this.state.socket} />
              <Chat socket={this.state.socket} />
            </>
          )}

          {!this.state.currentLog && (
            <Login
              socket={this.state.socket}
              currentLog={this.state.currentLog}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
