import React from "react";
import Header from "./Header";
import Searchbox from "./Searchbox";
import Footer from "./Footer";
import Artist from "./Artist";
import city from "./assets/city.jpg";
import plant from "./assets/plant.jpg";
import sky from "./assets/sky.jpg";

class App extends React.Component {
  state = {
    page: "home",
    artistName: null,
    artistTags: null,
    artistImage: null,
    artistBio: null,
    topTracks: null,
    getMore: null,
    similarArtist: null
  };

  onTermSubmit = async term => {
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
    const photo = await getPhoto.json();
    const similar = await getSimilar.json();
    const similarArtists = similar.similarartists.artist;

    //Get array of similar artists
    const artistArray = similarArtists.map(element => element.name);

    let arr = artistArray;
    let newArr = [];
    let newerArr = [];

    //Iterating through array of artist names, fetching album image for each
    for (let i = 0; i < arr.length; i++) {
      const getData = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${arr[i]}&api_key=${KEY}&format=json&limit=9`
      ).then(response => response.json());

      newArr.push(getData);
    }
    for (let j = 0; j < newArr.length; j++) {
      let artistImages = newArr[j].topalbums.album[0].image[3]["#text"];
      newerArr.push(artistImages);
    }

    console.log(newerArr);
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
      artistImage: photo.topalbums.album[0].image[3]["#text"],
      artistBio: newBio[0],
      topTracks: newTopTracks,
      similarArtist: artistArray,
      similarImages: newerArr
    });
  };

  renderHome() {
    //Render one of three backgrounds to the homepage
    const backgroundPicker = () => {
      let choice = Math.floor(Math.random() * 3);

      switch (choice) {
        case 0:
          return { backgroundImage: `url(${city})` };
        case 1:
          return { backgroundImage: `url(${plant})` };
        case 2:
          return { backgroundImage: `url(${sky})` };
        default:
          return { backgroundImage: `url(${plant})` };
      }
    };

    return (
      <div className="home-container" style={backgroundPicker()}>
        <Header page={this.state.page} />
        <Searchbox onFormSubmit={this.onTermSubmit} page={this.state.page} />
        <Footer />
      </div>
    );
  }

  renderMusic() {
    return (
      <div>
        <Header />
        <Searchbox onFormSubmit={this.onTermSubmit} />
        <Artist
          artistName={this.state.artistName}
          artistTags={this.state.artistTags}
          artistImage={this.state.artistImage}
          artistBio={this.state.artistBio}
          topTracks={this.state.topTracks}
          similarArtist={this.state.similarArtist}
          similarImages={this.state.similarImages}
          onPhotoClick={this.onTermSubmit}
        />
      </div>
    );
  }

  render() {
    if (this.state.page === "home") {
      return this.renderHome();
    } else {
      return this.renderMusic();
    }
  }
}
export default App;
