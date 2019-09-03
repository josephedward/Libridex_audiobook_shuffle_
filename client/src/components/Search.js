import React from "react";
import {
  Button,
  Form,
  Grid
} from "semantic-ui-react";
// import cheerio from "cheerio";
// import $ from "jquery";
function Search(props) {
  return (
    <Form>
      <Grid columns={2}>
        <Grid.Column>
          <Form.Field>
            <Form.Input
              name="searchText"
              type="text"
              placeholder="Enter Genre"
              list="genreOptions"
              className="form-control"
              value={props.searchText}
              onChange={props.handleInputChange}
              onKeyPress={props.handleKeyPress}
            />
            <datalist id="genreOptions">
              <option value="Children's Fiction">Children's Fiction</option>
              <option value="Dramatic Readings">Dramatic Readings</option>
              <option value="Epistolary Fiction">Epistolary Fiction</option>
              <option value="Erotica">Erotica</option>
              <option value="Travel Fiction">Travel Fiction</option>
              <option value="Family Life">Family Life</option>
              <option value="Fantastic Fiction">Fantastic Fiction</option>
              <option value="General Fiction">General Fiction</option>
              <option value="Historical Fiction">Historical Fiction</option>
              <option value="Humorous Fiction">Humorous Fiction</option>
              <option value="Literary Fiction">Literary Fiction</option>
              <option value="Plays">Plays</option>
              <option value="Poetry">Poetry</option>
              <option value="Religious Fiction">Religious Fiction</option>
              <option value="Romance">Romance</option>
              <option value="Sagas">Sagas</option>
              <option value="Satire">Satire</option>
              <option value="Short Stories">Short Stories</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Sports Fiction">Sports Fiction</option>
              <option value="True Story">True Crime</option>
              <option value="Westerns">Westerns</option>
              </datalist>
          </Form.Field>
        </Grid.Column>
        <Grid.Column>
          <Button className="ui primary button" onClick={props.handleNext}>
            Search Genre
          </Button>
        </Grid.Column>
      </Grid>
    </Form>
  );
  // }
}

export default Search;

  //  Dropdown
// import axios from "axios";
// import fs from "fs";
// import SearchBox from "./SearchBox";
// https://librivox.org/search?primary_key=0&search_category=genre&search_page=1&search_form=get_results
// class Search extends React.Component {

// var Option = React.createClass({
//   render: function() {
//       return getGenres().map(elem =>
//           <option value={elem}>{elem}</option>
//       )
//       }
//   })

// {/* <option value="Children's Fiction > Action & Adventure">Children's Fiction > Action & Adventure</option><option value="Children's Fiction > Animals & Nature">Children's Fiction > Animals & Nature</option><option value="Children's Fiction > Myths, Legends & Fairy Tales">Children's Fiction > Myths, Legends & Fairy Tales</option><option value="Children's Fiction > Family">Children's Fiction > Family</option><option value="Children's Fiction > General">Children's Fiction > General</option><option value="Children's Fiction > Historical">Children's Fiction > Historical</option><option value="Children's Fiction > Poetry">Children's Fiction > Poetry</option><option value="Children's Fiction > Religion">Children's Fiction > Religion</option><option value="Children's Fiction > School">Children's Fiction > School</option><option value="Children's Fiction > Short works">Children's Fiction > Short works</option><option value="Children's Non-fiction">Children's Non-fiction</option><option value="Children's Non-fiction > Arts">Children's Non-fiction > Arts</option><option value="Children's Non-fiction > General">Children's Non-fiction > General</option><option value="Children's Non-fiction > Reference">Children's Non-fiction > Reference</option><option value="Children's Non-fiction > Religion">Children's Non-fiction > Religion</option><option value="Children's Non-fiction > Science">Children's Non-fiction > Science</option>
//                */}
//               {/* <option value="Action & Adventure Fiction">Action & Adventure Fiction</option><option value="Classics (Greek & Latin Antiquity)">Classics (Greek & Latin Antiquity)</option><option value="Crime & Mystery Fiction">Crime & Mystery Fiction</option><option value="Crime & Mystery Fiction > Detective Fiction">Crime & Mystery Fiction > Detective Fiction</option><option value="Culture & Heritage Fiction">Culture & Heritage Fiction</option>
//                */}
//               {/* <option value="Fantastic Fiction > Myths, Legends & Fairy Tales">Fantastic Fiction > Myths, Legends & Fairy Tales</option><option value="Fantastic Fiction > Horror & Supernatural Fiction">Fantastic Fiction > Horror & Supernatural Fiction</option><option value="Fantastic Fiction > Gothic Fiction">Fantastic Fiction > Gothic Fiction</option><option value="Fantastic Fiction > Science Fiction">Fantastic Fiction > Science Fiction</option><option value="Fantastic Fiction > Fantasy Fiction">Fantastic Fiction > Fantasy Fiction</option><option value="Fictional Biographies & Memoirs">Fictional Biographies & Memoirs</option> */}
//               {/* <option value="General Fiction > Published before 1800">General Fiction > Published before 1800</option><option value="General Fiction > Published 1800 -1900">General Fiction > Published 1800 -1900</option><option value="General Fiction > Published 1900 onward">General Fiction > Published 1900 onward</option>
//                */}
//               {/* <option value="Nature & Animal Fiction">Nature & Animal Fiction</option><option value="Nautical & Marine Fiction">Nautical & Marine Fiction</option>
//                */}
//               {/* <option value="Plays > Comedy">Plays > Comedy</option><option value="Plays > Comedy > Satire">Plays > Comedy > Satire</option><option value="Plays > Drama">Plays > Drama</option><option value="Plays > Drama > Tragedy">Plays > Drama > Tragedy</option><option value="Plays > Romance">Plays > Romance</option>
//                */}
//               {/* <option value="Poetry > Anthologies">Poetry > Anthologies</option><option value="Poetry > Single author">Poetry > Single author</option><option value="Poetry > Ballads">Poetry > Ballads</option><option value="Poetry > Elegies & Odes">Poetry > Elegies & Odes</option><option value="Poetry > Epics">Poetry > Epics</option><option value="Poetry > Free Verse">Poetry > Free Verse</option><option value="Poetry > Lyric">Poetry > Lyric</option><option value="Poetry > Narratives">Poetry > Narratives</option><option value="Poetry > Sonnets">Poetry > Sonnets</option><option value="Poetry > Multi-version (Weekly and Fortnightly poetry)">Poetry > Multi-version (Weekly and Fortnightly poetry)</option>
//                */}
// {/* <option value="Religious Fiction > Christian Fiction">Religious Fiction > Christian Fiction</option> */}
//               {/* <option value="Short Stories > Anthologies">Short Stories > Anthologies</option><option value="Short Stories > Single Author Collections">Short Stories > Single Author Collections</option>
//                */}
//               {/* <option value="Suspense, Espionage, Political & Thrillers">Suspense, Espionage, Political & Thrillers</option><option value="War & Military Fiction">War & Military Fiction</option>
//                */}

//               {/*              
//              <option value="*Non-fiction > War & Military">*Non-fiction > War & Military</option><option value="*Non-fiction > Animals">*Non-fiction > Animals</option><option value="*Non-fiction > Art, Design & Architecture">*Non-fiction > Art, Design & Architecture</option><option value="*Non-fiction > Bibles">*Non-fiction > Bibles</option><option value="*Non-fiction > Bibles > American Standard Version">*Non-fiction > Bibles > American Standard Version</option><option value="*Non-fiction > Bibles > World English Bible">*Non-fiction > Bibles > World English Bible</option><option value="*Non-fiction > Bibles > King James Version">*Non-fiction > Bibles > King James Version</option><option value="*Non-fiction > Bibles > Weymouth New Testament">*Non-fiction > Bibles > Weymouth New Testament</option><option value="*Non-fiction > Bibles > Douay-Rheims Version">*Non-fiction > Bibles > Douay-Rheims Version</option><option value="*Non-fiction > Bibles > Young's Literal Translation">*Non-fiction > Bibles > Young's Literal Translation</option><option value="*Non-fiction > Biography & Autobiography">*Non-fiction > Biography & Autobiography</option><option value="*Non-fiction > Biography & Autobiography > Memoirs">*Non-fiction > Biography & Autobiography > Memoirs</option><option value="*Non-fiction > Business & Economics">*Non-fiction > Business & Economics</option><option value="*Non-fiction > Crafts & Hobbies">*Non-fiction > Crafts & Hobbies</option><option value="*Non-fiction > Education">*Non-fiction > Education</option><option value="*Non-fiction > Education > Language learning">*Non-fiction > Education > Language learning</option><option value="*Non-fiction > Essays & Short Works">*Non-fiction > Essays & Short Works</option><option value="*Non-fiction > Family & Relationships">*Non-fiction > Family & Relationships</option><option value="*Non-fiction > Health & Fitness">*Non-fiction > Health & Fitness</option><option value="*Non-fiction > History ">*Non-fiction > History </option><option value="*Non-fiction > History  > Antiquity">*Non-fiction > History  > Antiquity</option><option value="*Non-fiction > History  > Middle Ages/Middle History">*Non-fiction > History  > Middle Ages/Middle History</option><option value="*Non-fiction > History  > Early Modern">*Non-fiction > History  > Early Modern</option><option value="*Non-fiction > History  > Modern (19th C)">*Non-fiction > History  > Modern (19th C)</option><option value="*Non-fiction > History  > Modern (20th C)">*Non-fiction > History  > Modern (20th C)</option><option value="*Non-fiction > House & Home">*Non-fiction > House & Home</option><option value="*Non-fiction > House & Home > Cooking">*Non-fiction > House & Home > Cooking</option><option value="*Non-fiction > House & Home > Gardening">*Non-fiction > House & Home > Gardening</option><option value="*Non-fiction > Humor">*Non-fiction > Humor</option><option value="*Non-fiction > Law">*Non-fiction > Law</option><option value="*Non-fiction > Literary Collections">*Non-fiction > Literary Collections</option><option value="*Non-fiction > Literary Collections > Essays">*Non-fiction > Literary Collections > Essays</option><option value="*Non-fiction > Literary Collections > Short non-fiction">*Non-fiction > Literary Collections > Short non-fiction</option><option value="*Non-fiction > Literary Collections > Letters">*Non-fiction > Literary Collections > Letters</option><option value="*Non-fiction > Literary Criticism">*Non-fiction > Literary Criticism</option><option value="*Non-fiction > Mathematics">*Non-fiction > Mathematics</option><option value="*Non-fiction > Medical">*Non-fiction > Medical</option><option value="*Non-fiction > Music">*Non-fiction > Music</option><option value="*Non-fiction > Nature">*Non-fiction > Nature</option><option value="*Non-fiction > Performing Arts">*Non-fiction > Performing Arts</option><option value="*Non-fiction > Philosophy">*Non-fiction > Philosophy</option><option value="*Non-fiction > Philosophy > Ancient">*Non-fiction > Philosophy > Ancient</option><option value="*Non-fiction > Philosophy > Medieval">*Non-fiction > Philosophy > Medieval</option><option value="*Non-fiction > Philosophy > Early Modern">*Non-fiction > Philosophy > Early Modern</option><option value="*Non-fiction > Philosophy > Modern">*Non-fiction > Philosophy > Modern</option><option value="*Non-fiction > Philosophy > Contemporary">*Non-fiction > Philosophy > Contemporary</option><option value="*Non-fiction > Philosophy > Atheism & Agnosticism">*Non-fiction > Philosophy > Atheism & Agnosticism</option><option value="*Non-fiction > Political Science">*Non-fiction > Political Science</option><option value="*Non-fiction > Psychology">*Non-fiction > Psychology</option><option value="*Non-fiction > Reference">*Non-fiction > Reference</option><option value="*Non-fiction > Religion">*Non-fiction > Religion</option><option value="*Non-fiction > Religion > Christianity - Commentary">*Non-fiction > Religion > Christianity - Commentary</option><option value="*Non-fiction > Religion > Christianity - Biographies">*Non-fiction > Religion > Christianity - Biographies</option><option value="*Non-fiction > Religion > Christianity - Other">*Non-fiction > Religion > Christianity - Other</option><option value="*Non-fiction > Religion > Other religions">*Non-fiction > Religion > Other religions</option><option value="*Non-fiction > Science">*Non-fiction > Science</option><option value="*Non-fiction > Science > Astronomy, Physics & Mechanics">*Non-fiction > Science > Astronomy, Physics & Mechanics</option><option value="*Non-fiction > Science > Chemistry">*Non-fiction > Science > Chemistry</option><option value="*Non-fiction > Science > Earth Sciences">*Non-fiction > Science > Earth Sciences</option><option value="*Non-fiction > Science > Life Sciences">*Non-fiction > Science > Life Sciences</option><option value="*Non-fiction > Self-Help">*Non-fiction > Self-Help</option><option value="*Non-fiction > Social Science (Culture & Anthropology)">*Non-fiction > Social Science (Culture & Anthropology)</option><option value="*Non-fiction > Sports & Recreation">*Non-fiction > Sports & Recreation</option><option value="*Non-fiction > Sports & Recreation > Games">*Non-fiction > Sports & Recreation > Games</option><option value="*Non-fiction > Technology & Engineering">*Non-fiction > Technology & Engineering</option><option value="*Non-fiction > Technology & Engineering > Transportation">*Non-fiction > Technology & Engineering > Transportation</option><option value="*Non-fiction > Travel & Geography">*Non-fiction > Travel & Geography</option><option value="*Non-fiction > Travel & Geography > Exploration">*Non-fiction > Travel & Geography > Exploration</option><option value="*Non-fiction > True Crime">*Non-fiction > True Crime</option><option value="*Non-fiction > Writing & Linguistics">*Non-fiction > Writing & Linguistics</option> */}

//             {/* <SearchBox genres={genres}/> */}
//             {/* </Form.Input> */}


  // function getGenres() {
  //   let gList = [];
  //   $.getJSON(
  //     "http://www.whateverorigin.org/get?url=" +
  //       encodeURIComponent(
  //         "http://librivox.org/search?primary_key=0&search_category=genre&search_page=1&search_form=get_results"
  //       ) +
  //       "&callback=?",
  //     function(data) {
  //       let $cl = cheerio.load(data.contents);
  //       $cl("option").each(function(i, element) {
  //         if (i < 144)
  //           gList.push(
  //             `<option value="${$cl(element).text()}">${$cl(
  //               element
  //             ).text()}</option>`
  //           );
  //       });
  //       return gList;
  //     }
  //   );
  //   return gList;
  // }

  // let genres = getGenres();
