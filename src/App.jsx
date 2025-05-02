import { useState } from 'react'
import Card from './Card.jsx'
import AddSite from './AddSite.jsx'
import youTubeLogo from './assets/youtube.png'
import youTubeMusicLogo from './assets/youtube-music.png'
import googleLogo from './assets/google.png'
import './App.css'

/**
 * Add database to store the sites and fetch the sites from it.
 * Add a way for users to upload an image as a logo or get logo from the icon of the web page.
 */

function App() {

  const [sites, setSites] = useState([
    ['YouTube', 'https://www.youtube.com/', youTubeLogo],
    ['YouTube Music', 'https://music.youtube.com/', youTubeMusicLogo],
    ['Google', 'https://www.google.com/', googleLogo]
  ]);

  const addASite = (siteValue) => {
    setSites(prevSites => [...prevSites, siteValue]);
  };

  return (
    <>
      <div>
        <div className='card-holder'>
          {
            sites.map(site => (
              < Card
                key={site.index}
                siteName={site[0]}
                siteUrl={site[1]}
                siteLogo={site[2]} />
            ))
          }
        </div>
        <div>
          <AddSite addSiteFunc={addASite} />
        </div>
      </div >
    </>
  );
}

export default App;
