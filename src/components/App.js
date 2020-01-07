import React from "react";
import Header from "./Header";
import Searchbox from "./Searchbox";
import Footer from "./Footer";
import Artist from "./Artist";
import Loading from "./Loading";
import city from "./assets/city.jpg";
import plant from "./assets/plant.jpg";
import sky from "./assets/sky.jpg";

let background = "";
const backgroundPicker = () => {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    background = city;
  } else if (choice === 1) {
    background = plant;
  } else if (choice === 2) {
    background = sky;
  }
};
backgroundPicker();

class App extends React.Component {
  state = {
    page: "home",
    error: false,
    artistName: null,
    artistTags: null,
    artistImage: null,
    artistBio: null,
    topTracks: null,
    getMore: null,
    similarArtist: null,
    similarTitle: null,
    loading: false
  };

  onTermSubmit = async term => {
    this.setState({ loading: true, error: false });

    const KEY = "78a50c5d9505a79b657a2f71d67bb125";
    const getTopTracks = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${term}&api_key=${KEY}&format=json&limit=15`
    );
    const getArtistInfo = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${term}&api_key=${KEY}&format=json`
    );
    const getSimilar = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&artist=${term}&api_key=${KEY}&format=json&limit=9`
    );
    const getPhoto = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${term}&api_key=${KEY}&format=json&limit=9`
    );
    const topTracks = await getTopTracks.json();
    const artistInfo = await getArtistInfo.json();

    if (artistInfo.message) {
      this.setState({ loading: false, error: true });
      return;
    }

    const photo = await getPhoto.json();
    const similar = await getSimilar.json();
    const similarArtists = similar.similarartists.artist;
    let artistPhoto = photo.topalbums.album[0].image[3]["#text"];

    //If artist image is an empty string, return generic image
    if (artistPhoto === "") {
      artistPhoto =
        "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png";
    }

    //Get array of similar artists
    const artistArray = similarArtists.map(element => element.name);

    let arr = artistArray;
    let newArr = [];

    //Iterating through array of artist names, fetching album image for each
    for (let i = 0; i < arr.length; i++) {
      const getData = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${arr[i]}&api_key=${KEY}&format=json&limit=9`
      ).then(response => response.json());
      newArr.push(getData);
    }

    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j].error) {
        newArr[j] =
          "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png";
      } else if (newArr[j].topalbums.album.length === 0) {
        newArr[j] =
          "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png";
      } else if (newArr[j].topalbums.album[0].image[3]["#text"] === "") {
        newArr[j] =
          "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png";
      } else {
        newArr[j] = newArr[j].topalbums.album[0].image[3]["#text"];
      }
    }
    //Getting array of tags, mapping to a new array, and joining them into a string
    const artist = artistInfo.artist.tags.tag;
    const newArtist = artist.map(element => element.name);
    const tags = newArtist.join(" / ");

    //Getting artist bio and cutting out the href link
    const bio = artistInfo.artist.bio.summary;
    const newBio = bio.split("<");

    //Getting top tracks
    const top = topTracks.toptracks.track;
    const newTopTracks = top.map(element => element.name);

    this.setState({
      page: "music",
      artistName: artistInfo.artist.name,
      artistTags: tags,
      artistImage: artistPhoto,
      artistBio: newBio[0],
      topTracks: newTopTracks,
      similarArtist: artistArray,
      similarImages: newArr,
      similarTitle: artistArray,
      loading: false
    });
  };

  renderHome() {
    //Render one of three backgrounds to the homepage

    return (
      <div
        className="home-container"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Header page={this.state.page} />
        <Searchbox onFormSubmit={this.onTermSubmit} page={this.state.page} />
        {this.state.loading && <Loading page={this.state.page} />}
        {this.state.error && (
          <div className="error animated delay-2s fadeOut">
            The artist you supplied could not be found
          </div>
        )}
        <Footer />
      </div>
    );
  }

  renderMusic() {
    return (
      <div>
        <Header />
        {this.state.loading && <Loading />}
        <Searchbox onFormSubmit={this.onTermSubmit} />
        <Artist
          artistName={this.state.artistName}
          artistTags={this.state.artistTags}
          artistImage={this.state.artistImage}
          artistBio={this.state.artistBio}
          topTracks={this.state.topTracks}
          similarArtist={this.state.similarArtist}
          similarImages={this.state.similarImages}
          similarTitle={this.state.similarTitle}
          onPhotoClick={this.onTermSubmit}
        />
      </div>
    );
  }

  render() {
    if (this.state.page === "home") {
      return this.renderHome();
    } else if (this.state.page === "music") {
      return this.renderMusic();
    }
  }
}

export default App;
