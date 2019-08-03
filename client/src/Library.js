import React from "react";
// import { Col, Row, Container } from "./components/Grid";
import Login from './components/Login';
import Signup from './components/Signup';
import { Button, 
  // Sticky 
} from 'semantic-ui-react';
import {
  Menu
} from 'semantic-ui-react';
import {Grid, Container} from 'semantic-ui-react';
import Jumbotron from "./components/Jumbotron";
import UserLibrary from './components/UserLibrary';
import axios from 'axios';
import Header1 from './components/Header';


class Library extends React.Component{

  state ={
    currentUser:null,
    userObj:{},
    book:{}
  }

  componentDidMount(){
// this.getCurrentUser();

  }

  getCurrentUser = userFromNav => {
    this.setState({ currentUser: userFromNav });
    this.getUserObj();
  };


  handleLogInClick() {
    console.log('login');
    this.setState({ thisIsTheBoolean: true });
    // this.state.thisIsTheBoolean=false;
  }

  handleSignUpClick() {
    console.log('signup');
    this.setState({ thisIsTheBoolean: false });
    // this.state.thisIsTheBoolean=false;
  }

  deleteBook=(titleToDelete)=>{
    let tempUser=this.state.userObj;
    let titles=this.state.userObj.likes;
    let newTitles=titles.filter((item) => {return item.bkTitle!==titleToDelete})
    tempUser.likes=newTitles;
    this.setState({userObj:tempUser});
    axios
      .put(`api/users/?email=${this.state.userObj.email}`, this.state.userObj)
          .catch(e => { console.log(e)   });
  }


  getSpecificBook = (id) => {
    console.log(id);
    axios
    .get(`/api/audiobook/book/${id}`)
    .then(res => {
      let bookData = res.data;
      // console.log("got here");
      this.setBook(bookData);
    });
  }

  setBook =(bookData) =>{

this.setState({book:bookData});
  }
  



  getUserObj() {
    axios.get(`/api/users/?email=${this.state.currentUser}`).then(res => {
      // console.log(res.data);
      this.setState({ userObj: res.data[0] });
      this.setState({loggedIn:true});
    });
    
  }
  

render() {
  return (
    <div className="All">
    <Menu stackable fluid widths={3} className="blackborder header " >
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
        </Menu>
        <Container fluid className="layout width1000 border2 maroon main">
          <Jumbotron>
            <UserLibrary books={this.state.userObj.likes} 
              deleteBook={this.deleteBook}
              getSpecificBook={this.getSpecificBook}
            />
          </Jumbotron >
          <Jumbotron book={this.state.book} >
            
            {this.state.book.CHS && this.state.book.CHS.map(chapter => <h1>{chapter.chTitle}</h1>)}
          </Jumbotron>
    </Container>
    </div>
  );
}

}
export default Library;
