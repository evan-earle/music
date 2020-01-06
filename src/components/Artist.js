import React from "react";
import Modal from "./Modal";
import Youtube from "./Youtube";
import SimilarArtist from "./SimilarArtist";

class Artist extends React.Component {
  state = {
    lyrics: null,
    toggle: false,
    videoId: null,
    play: false
  };

  render() {
    let count = 1;
    if (count === 16) {
      count = 1;
    }

    const getLyrics = async track => {
      const fetchLyrics = await fetch(
        `https://api.lyrics.ovh/v1/${this.props.artistName}/${track}`
      );
      const lyrics = await fetchLyrics.json();

      this.setState({
        lyrics: lyrics.lyrics,
        toggle: true,
        track: track
      });
    };

    const getVideo = async track => {
      const KEY = "AIzaSyD5W6CH98T8nz9juTpuu9LproRU9LyM_qw";
      const fetchVideo = await fetch(
        `https://www.googleapis.com/youtube/v3/search/?q=${this.props.artistName}%20${track}&key=${KEY}&maxResults=1&part=snippet&type=video`
      );
      const video = await fetchVideo.json();
      const videoId = video.items[0].id.videoId;

      this.setState({ videoId: videoId, play: true });
    };

    const closeLyrics = () => {
      this.setState({ toggle: false });
    };

    return (
      <div>
        <Modal
          lyrics={this.state.lyrics}
          toggle={this.state.toggle}
          artistName={this.props.artistName}
          track={this.state.track}
          closeLyrics={closeLyrics}
        />
        <div className="music-container">
          <div className="bio-container">
            <h1>{this.props.artistName}</h1>
            <p className="tags">{this.props.artistTags}</p>
            <div className="img-bio">
              <img
                src={this.props.artistImage}
                alt="artist"
                height="150px"
                width="150px"
              ></img>
              <p className="bio">
                {this.props.artistBio}
                <a
                  className="bio-link"
                  href={`https://www.last.fm/music/${this.props.artistName}`}
                >
                  Read more on Last.fm
                </a>
              </p>
            </div>
          </div>
          <div className="youtube-container">
            <Youtube videoId={this.state.videoId} play={this.state.play} />
          </div>

          <div className="top-tracks-container">
            <div className="top-tracks-title">
              <div
                style={{
                  width: "150px",
                  paddingLeft: "2em"
                }}
              >
                Top Tracks
              </div>
              <div
                style={{
                  width: "50px",
                  paddingRight: "3.5em"
                }}
              >
                Lyrics
              </div>
            </div>
            <ol className="top-tracks-list">
              {this.props.topTracks.map(track => (
                <li className="songs" key={track}>
                  <div className="count" onClick={() => getVideo(track)}>
                    {count++}
                  </div>
                  <div className="track" onClick={() => getVideo(track)}>
                    {track}
                  </div>
                  <div className="lyrics-container">
                    <i
                      className="fa fa-align-right"
                      onClick={() => getLyrics(track)}
                    ></i>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <SimilarArtist
            similarArtist={this.props.similarArtist}
            similarImages={this.props.similarImages}
            similarTitle={this.props.similarTitle}
            onPhotoClick={this.props.onPhotoClick}
          />
        </div>
      </div>
    );
  }
}

export default Artist;
