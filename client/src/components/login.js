import React from "react";

class Login extends React.Component {
  handleSubmint = (event) => {
    event.preventDefault();
    this.props.socket.emit("login", event.target[0].value);
  };

  render() {
    return (
      <div id="login">
        <h1
          style={{ color: "#705c46", textAlign: "center", padding: "20px 0" }}
        >
          Join Our IRC :)
        </h1>
        <form id="login-form" onSubmit={this.handleSubmint}>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Enter your pseudo"
            style={{
              border: "2px solid #705c46",
              display: "block",
              margin: "auto",
              height: "30px",
              width: "250px",
              borderRadius: "10px",
            }}
          />
          <input
            type="submit"
            value="Sign up"
            style={{
              border: "2px solid #705c46",
              height: "30px",
              width: "150px",
              marginTop: "20px",
              marginLeft: "430px",
              borderRadius: "7px",
            }}
          />
        </form>
      </div>
    );
  }
}

export default Login;
