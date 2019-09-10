import React from "react";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.removeAuth = this.removeAuth.bind(this);
    this.localStorageUpdated = this.localStorageUpdated.bind(this);
    this.startChatSession = this.startChatSession.bind(this);
    this.setUserInChat = this.setUserInChat.bind(this);
    this.state = {
      isLogOut: false,
      sessionStarted: false,
      userInChat: false
    };
  }

  setUserInChat() {
    this.setState({ userInChat: true });
  }

  startChatSession() {
    // axios
    // .post("http://localhost:8000/api/chats/", JSON.stringify(credentials), {
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json"
    //   }
    // })
    // .then(res => {
    //   alert(
    //     "Your account has been created. You will be signed in automatically"
    //   );
    // })
    // .catch(err => {
    //   debugger;
    //   console.log("Error: ", err);
    //   console.log(err.response.request.responseText);
    //   alert(err.response.request.responseText);
    // });
    // $.post("http://localhost:8000/api/chats/", data => {
    //   alert(
    //     "A new session has been created you'll be redirected automatically"
    //   );
    this.setState({ sessionStarted: true });
    // }).fail(response => {
    //   alert(response.responseText);
    // });
  }

  removeAuth(e) {
    localStorage.removeItem("authToken");
    this.setState({ isLogOut: true });
  }

  localStorageUpdated() {
    // User signed out
    this.setState({ isLogOut: true });
  }

  componentDidMount() {
    window.addEventListener("storage", this.localStorageUpdated);
  }

  componentWillUnmount() {
    window.removeEventListener("storage", this.localStorageUpdated);
  }

  render() {
    if (!this.state.isLogOut && localStorage.getItem("authToken") !== null) {
      if (this.state.sessionStarted && !this.state.userInChat) {
        this.setUserInChat();
        return <Redirect to="/chats/chat_url" />;
      } else {
        return (
          <div>
            <h1>Chat</h1>
            <Button onClick={e => this.removeAuth(e)}>Log Out</Button>
            <h3 class="text-center">Welcome !</h3>

            <br />

            <p class="text-center">
              To start chatting with friends click on the button below, it'll
              start a new chat session and then you can invite your friends over
              to chat!
            </p>

            <br />

            {!this.state.sessionStarted ? (
              <button onClick={e => this.startChatSession(e)}>
                Start Chatting
              </button>
            ) : null}
          </div>
        );
      }
    } else {
      return <Redirect to="/auth" />; // or to home?
    }
  }
}
export default Chat;
