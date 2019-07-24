import React from 'react';

import Header1 from './components/Header';
import UserLibrary from './components/UserLibrary';
import Search from './components/Search';
import Title from './components/Title';
import Author from './components/Author';
import BookPlayer from './components/BookPlayer';
import BookImage from './components/BookImage';
import Description from './components/Description';
import NextButton from './components/NextButton';
import LikeButton from './components/LikeButton';
import Footer from './components/Footer';
import axios from 'axios';

import Login from './components/Login';
import Signup from './components/Signup';
import { Button } from 'semantic-ui-react';
import {
  Grid,
  Container,
  Menu,
} from 'semantic-ui-react';
import Chapter from './components/Chapter';


class AudiobookPlayer extends React.Component {
  state = {
    currentUser: null,
    userObj: {},
    searchText: '',
    book: {},
    image: [],
    author: [],
    title: [],
    description: [],
    randomChapter: [],
    thisIsTheBoolean: true,
    bookID:[],
    bookURL:[]
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

  handleNext = event => {
    if (event) {
      event.preventDefault();
    }

    axios
      .get(`/api/audiobook/genre/${this.state.searchText || 'science fiction'}`)
      .then(res => {
        let bookData = res.data;
        // console.log("got here");
        this.setBook(bookData);
      });
  };


getSpecificBook = (id) => {
  // if (event) {
  //   event.preventDefault();
  // }

  console.log(id);
  axios
  .get(`/api/audiobook/book/${id}`)
  .then(res => {
    let bookData = res.data;
    // console.log("got here");
    this.setBook(bookData);
  });
}


  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleNext();
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    axios.get(`/api/audiobook`).then(res => {
      const bookData = res.data;
      // console.log(bookData);
      let randChap = this.playRandomChapter(bookData);
      this.setState({
        book: bookData,
        image: bookData.bkImage,
        title: bookData.bkTitle,
        author: bookData.bkAuthor,
        description: bookData.bkDescription,
        randomChapter: randChap,
        bookID:bookData.bkID,
        bookURL:bookData.bkURL
      });
    });
    // this.getUserObj();
  }

  setBook = bookData => {
    console.log(bookData);
    let randChap = this.playRandomChapter(bookData);
    this.setState({
      book: bookData,
      image: bookData.bkImage,
      title: bookData.bkTitle,
      author: bookData.bkAuthor,
      description: bookData.bkDescription,
      randomChapter: randChap,
      bookID:bookData.bkID,
      bookURL:bookData.bkURL

    });
  };



  playRandomChapter = book => {
    let randIndex = Math.floor(Math.random() * book.CHS.length);
    let playedCh = book.CHS[randIndex];
    let secLink = playedCh.chLink.replace('http', 'https');
    playedCh.chLink=secLink;
    return playedCh;
  };

  getCurrentUser = userFromNav => {
    this.setState({ currentUser: userFromNav });
    this.getUserObj();
  };

  handleLike = event => {
    if (event) {
      event.preventDefault();
    }

    console.log(this.state.userObj);

    let tempUser = this.state.userObj;
    tempUser.likes.push(this.state.book);
    // console.log(tempUser[0]);

    console.log(this.state.currentUser);


    this.setState({userObj:tempUser});
    console.log(this.state.userObj);

    axios
        .put(`api/users/?email=${this.state.userObj.email}`, this.state.userObj)
            .catch(e => {
      alert("You must log in to store the books you like!");
      // window.location.reload();
    });
   

        


    // axios
    //     .put(`api/users/?email=${this.state.userObj.email}`, tempUser)
    //     .then(res => this.setState({ userObj: tempUser }))
    //     .catch(e => {
    //   alert("You must log in to store the books you like!");
    //   // window.location.reload();
    // });
    // axios.get(`/api/users/?email=${this.state.currentUser}`).then(res => {
    //   tempUser = res.data[0];
    //   console.log(this.state.book.bkTitle);
    //   let titles = [];
    //   tempUser.likes.forEach(like => titles.push(like.bkTitle));
    //   console.log(titles);
    //   console.log();

    //   if (!titles.includes(this.state.book.bkTitle)) {
    //     tempUser.likes.push(this.state.book);
    //   }

    //
  
  };


  deleteBook=(titleToDelete)=>{
    
    // console.log(this.state.userObj);
    let tempUser=this.state.userObj;
    let titles=this.state.userObj.likes;
    // console.log(titles);
    // console.log(titleToDelete);
    let newTitles=titles.filter((item) => {return item.bkTitle!==titleToDelete})
    // console.log(newTitles);
    tempUser.likes=newTitles;
    // console.log(tempUser);

    axios
    .put(`api/users/?email=${this.state.currentUser}`, tempUser[0])
    .then(res => this.setState({ userObj: tempUser }));

  }


  getUserObj() {
    axios.get(`/api/users/?email=${this.state.currentUser}`).then(res => {
      // console.log(res.data);
      this.setState({ userObj: res.data[0] });
    });
  }



  render() {
    return (
      <div>
      <div>

        <Menu stackable fluid widths={3} className="blackborder" >
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
        </div>
        <div>
        <Container fluid className="layout width1000 border maroon">
          <Grid celled stackable columns={2} className="black">
            <Grid.Column>
              <BookPlayer randomChapter={this.state.randomChapter} />
              <Grid.Row>
                <Grid columns={2}>
                  <Grid.Column>
                    <NextButton handleNext={this.handleNext} />
                  </Grid.Column>
                  <Grid.Column>
                    <LikeButton handleLike={this.handleLike} />
                  </Grid.Column>
                </Grid>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column  >
              <Search
                handleInputChange={this.handleInputChange}
                handleKeyPress={this.handleKeyPress.bind(this)}
                handleNext={this.handleNext}
                searchText={this.state.searchText}
              />
              <br />
              <UserLibrary books={this.state.userObj.likes} 
              deleteBook={this.deleteBook}
              getSpecificBook={this.getSpecificBook}
            />
            </Grid.Column>
          </Grid>
          <Grid celled stackable columns={2} className="black">
            <Grid.Column verticalAlign="middle">
              <BookImage verticalAlign="middle" image={this.state.image} />
            </Grid.Column>

            <Grid.Column>
              <Chapter randomChapter={this.state.randomChapter}/>
              <Title title={this.state.title} />
              <Author author={this.state.author} />
              <Description description={this.state.description} />
            </Grid.Column>
          </Grid>
        </Container>
        <Footer className="border" />
      </div>
      </div>
    );
  }
}

export default AudiobookPlayer;
