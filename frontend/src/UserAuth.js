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
import axios from "axios";

class UserAuth extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.signIn = this.signIn.bind(this);
    this.state = {
      activeTab: "1"
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
          "Content-Type": "applicatiofcn/json"
        }
      })
      .then(res => {
        alert(
          "Your account has been created. You will be signed in automatically"
        );
        debugger;
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }

  signIn(event) {
    event.preventDefault();
    const inputData = new FormData(event.target);
    const credentials = {
      username: inputData.get("username"),
      password: inputData.get("password")
    };
    // axios
    //   .post("http://localhost:8000/auth/token/create/", { credentials })
    //   .then(data => {
    //     sessionStorage.setItem("authToken", data.auth_token);
    //     sessionStorage.setItem("username", credentials.username);
    //     console.log(data);
    //     console.log(credentials);
    //   });

    // console.log(data);
    // console.log(data.get("username"));
    // console.log(data.get("password"));
    debugger;
  }

  render() {
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
