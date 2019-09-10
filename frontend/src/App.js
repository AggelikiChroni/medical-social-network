import React from "react";
import { Link } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li>
            <Link to="/auth">User Authentication</Link>
          </li>
          <li>
            <Link to="/chats">Protected Chats</Link>{" "}
          </li>
        </ul>
      </div>
    );
  }
}
export default App;
