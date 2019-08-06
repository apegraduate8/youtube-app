import React from 'react';
import SearchBar from './SearchBar';
import Youtube from './api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null, calls: 0 };

    handleSearchText = async (text) => {
        if (this.state.calls < 10) {
            const res = await Youtube.get('/search', {
              params: {
                q: text
              }
            });

            this.setState( prev => ({ videos: res.data.items, calls: prev.calls + 1 }) )
        }
    }

  onVideoSelect = (video) => {
      this.setState({ selectedVideo: video });
  }

  render() {
      return(
          <div className="ui container">
              <SearchBar onFormSubmit={this.handleSearchText}/>
              <div className="ui grid">
                  <div className="ui row">
                      <div className="eleven wide column">
                          <VideoDetail video={this.state.selectedVideo} />
                      </div>
                      <div className="five wide column">
                          <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
}

export default App;
