import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";

class UserAuth extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.signIn = this.signIn.bind(this);
    this.state = {
      activeTab: "1",
      authenticated: false
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  signUp(event) {
    event.preventDefault();
    const inputData = new FormData(event.target);
    const credentials = {
      username: inputData.get("username"),
      password: inputData.get("password")
    };
    axios
      .post("http://localhost:8000/auth/users/", JSON.stringify(credentials), {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        alert(
          "Your account has been created. You will be signed in automatically"
        );
      })
      .catch(err => {
        debugger;
        console.log("Error: ", err);
        console.log(err.response.request.responseText);
        alert(err.response.request.responseText);
      });
  }

  signIn(event) {
    event.preventDefault();
    const inputData = new FormData(event.target);
    const credentials = {
      username: inputData.get("username"),
      password: inputData.get("password")
    };
    axios
      .post(
        "http://localhost:8000/auth/token/login",
        JSON.stringify(credentials),
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          }
        }
      )
      .then(data => {
        localStorage.setItem("authToken", data.data);
        localStorage.setItem("username", credentials.username);
        this.setState({ authenticated: true });
      })
      .catch(err => {
        console.log("Error: ", err);
        console.log(err.response.request.responseText);
        alert("Unable to log in with provided credentials");
        alert("Go to sign up");
      });
  }

  render() {
    if (
      this.state.authenticated ||
      localStorage.getItem("authToken") !== null
    ) {
      return <Redirect to="/chats" />;
    } else
      return (
        <Container>
          <strong>Welcome to Tsaki</strong>
          <Card>
            <CardHeader>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    active={this.state.activeTab === "1"}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    Sign In
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active={this.state.activeTab === "2"}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    Sign Up
                  </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Form onSubmit={this.signIn}>
                  <CardBody>
                    <Row>
                      <Col sm="12">
                        <FormGroup>
                          <Label htmlFor="nf-text">Username</Label>
                          <Input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter Username.."
                            autoComplete="name"
                          />
                          <FormText>Please enter your username</FormText>
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="nf-password">Password</Label>
                          <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password.."
                            autoComplete="current-password"
                          />
                          <FormText>Please enter your password</FormText>
                        </FormGroup>
                      </Col>
                    </Row>
                  </CardBody>

                  <CardFooter>
                    <Button type="submit" size="sm" color="primary">
                      <i></i> Submit
                    </Button>
                    <Button type="reset" size="sm" color="danger">
                      <i></i> Reset
                    </Button>
                  </CardFooter>
                </Form>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="2">
                <Form onSubmit={this.signUp}>
                  <CardBody>
                    <Row>
                      <Col sm="12">
                        <FormGroup>
                          <Label htmlFor="nf-email">Email</Label>
                          <Input
                            type="nf-email"
                            id="email"
                            name="email"
                            placeholder="Enter Email.."
                            autoComplete="email"
                          />
                          <FormText>Please enter your email</FormText>
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="nf-text">Username</Label>
                          <Input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter Username.."
                            autoComplete="name"
                          />
                          <FormText>Please enter your username</FormText>
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="nf-password">Password</Label>
                          <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password.."
                            autoComplete="current-password"
                          />
                          <FormText>Please enter your password</FormText>
                        </FormGroup>
                      </Col>
                    </Row>
                  </CardBody>

                  <CardFooter>
                    <Button type="submit" size="sm" color="primary">
                      <i></i> Submit
                    </Button>
                    <Button type="reset" size="sm" color="danger">
                      <i></i> Reset
                    </Button>
                  </CardFooter>
                </Form>
              </TabPane>
            </TabContent>
          </Card>
        </Container>
      );
  }
}

export default UserAuth;
