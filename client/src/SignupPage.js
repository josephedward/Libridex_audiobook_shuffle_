import React from "react";
import {
  Button,
  Form,
  Image,
  // Segment,
  Header,
  Menu,
  Grid,
  Container
} from "semantic-ui-react";
import Header1 from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import axios from "axios";

const padSty = {
  padding: "20px"
};

class SignupPage extends React.Component {
  state = {
    currentUser: null,
    userObj: {}
    // book: {},
    // randomChapter:{}
  };

  getCurrentUser = userFromNav => {
    this.setState({ currentUser: userFromNav });
    this.getUserObj();
  };

  getUserObj() {
    axios.get(`/api/users/?email=${this.state.currentUser}`).then(res => {
      // console.log(res.data);
      this.setState({ userObj: res.data[0] });
      this.setState({ loggedIn: true });
    });
  }

  handleLogInClick() {
    console.log("login");
    this.setState({ thisIsTheBoolean: true });
    // this.state.thisIsTheBoolean=false;
  }

  handleSignUpClick() {
    console.log("signup");
    this.setState({ thisIsTheBoolean: false });
    // this.state.thisIsTheBoolean=false;
  }

  render() {
    return (
      <div className="All">
        {/* <Navbar/> */}
        {/* <Menu stackable fluid widths={3} className="blackborder header ">

        </Menu> */}
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
    </nav> */}
        {/* <Menu stackable fluid widths={3} className="blackborder header ">
          <Menu.Item className="tanish">
            <Header1 />
          </Menu.Item>

          <Menu.Item className="maroon">
            <Grid celled columns={2}>
              <Grid.Column color="black">
                <Button
                  className="ui primary button fullWidth"
                  onClick={() => {
                    this.handleLogInClick();
                  }}
                >
                  Log In
                </Button>
              </Grid.Column>
              <Grid.Column color="black">
                <Button
                  className="ui primary button fullWidth"
                  onClick={() => {
                    this.handleSignUpClick();
                  }}
                >
                  Sign Up
                </Button>
              </Grid.Column>
            </Grid>
          </Menu.Item>

          <Menu.Item className="tanish">
            {this.state.thisIsTheBoolean ? (
              <Login callbackFromNav={this.getCurrentUser} />
            ) : (
              <Signup />
            )}
          </Menu.Item>
        </Menu> */}
        <Container
          fluid

          className="main center layout maroon width1000 border2"
       style={padSty}
       >
         
          {/* <Segment > */}
          <Header
          // celled
            className="text-center blackborder font50 black fontBlue">
            <h1 className="white1">
              Create your Libridex account
            </h1>
          </Header>
          <Grid stackable fluid celled columns={2} 
          className="blackborder"
          >
            <Grid.Column color="white1">
              <Form>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="First name"
                    placeholder="First name"
                  />
                  <Form.Input fluid label="Last name" placeholder="Last name" />
                </Form.Group>
                <Form.Input label="Email" placeholder="email@email.com" />
                <Form.Group widths="equal">
                  <Form.Input fluid label="Password" placeholder="Password" />
                  <Form.Input
                    fluid
                    label="Confirm Password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>

                <Button>Submit</Button>
              </Form>
            </Grid.Column>
            <Grid.Column color="white1">
              <Image
                src="./images/book1.jpg"
                // size="medium"
                floated="left"
                rounded
                size="large"
              />
            </Grid.Column>
          </Grid>
          {/* </Segment> */}
        </Container>
        <footer>
          <Footer className="border footer" />
        </footer>
      </div>
    );
  }
}

export default SignupPage;
