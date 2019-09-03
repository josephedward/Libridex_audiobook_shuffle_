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
// import StickyFooter from 'react-sticky-footer';
import Login from './components/Login';
import Signup from './components/Signup';
import { Button, 
  // Sticky 
} from 'semantic-ui-react';
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
    bookURL:[],
    loggedIn:false
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


    
    if(this.state.loggedIn){
      let tempUser = this.state.userObj;
    
      if (!tempUser.likes.includes(this.state.book)) {
      tempUser.likes.push(this.state.book);
      }

      this.setState({userObj:tempUser});
      console.log(this.state.userObj);

      axios
      .put(`api/users/?email=${this.state.userObj.email}`, this.state.userObj)
          .catch(e => { console.log(e)   });

    }else{
      alert("You must log in to store the books you like!");
      window.location.reload();
    }
  
  };


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


  getUserObj() {
    axios.get(`/api/users/?email=${this.state.currentUser}`).then(res => {
      // console.log(res.data);
      this.setState({ userObj: res.data[0] });
      this.setState({loggedIn:true});
    });
    
  }



  render() {
    return (
      <div className="all">
      <Menu stackable fluid widths={3} className="blackborder header" >
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
                  Register
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
        <div>
        <Container fluid className="layout nicefont width1000 border2 maroon main">
          <Grid celled stackable columns={2} className="black center">
            <Grid.Column verticalAlign="middle">
              <BookPlayer randomChapter={this.state.randomChapter} />
              <Grid.Row>
                <Grid columns={2} className=
                "center">
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
  
      </div>

      <Footer className="border footer" />
      </div>
    );
  }
}

export default AudiobookPlayer;
