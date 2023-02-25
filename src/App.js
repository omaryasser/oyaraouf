import avatar from './avatar.png';
import './App.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link rel="canonical" href="http://" />

        <p> WIP </p>
        <img src={avatar} className="App-logo" alt="avatar" />
        <table>
          <tr>
          <td><SocialIcon url="https://www.linkedin.com/in/omar-morsi/" /></td>
          <td> <SocialIcon url="https://twitter.com/oyaraouf" /></td>
          {/* <td> <SocialIcon url="https://ask.fm/oyaraouf" /></td>
          <td> <SocialIcon url="https://curiouscat.live/oyaraouf" /></td> */}
          <td> <SocialIcon url="https://www.facebook.com/omar.yasser.morsi" /></td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
