import React from 'react';
import ReactMarkdown from 'react-markdown';


const input = `
  # Hello Wurld!


  Thanks so much for trying out Fire Feed 🔥🎧❤️!

  **TIPS:**

  1. To traverse to the next track, swipe on the track name in the player bar to the left. 👈
  2. To traverse to the previous track, swipe on the player to the right. 👉
  3. Login to like tracks 👍
  4. Make sure to explore different curators' feeds and make serendipitous discoveries! 🎶💻


  Also, note that:
  * We are aware that feeds will not continue playing if you lock your phone. We're trying to fix that.
  * The site, for the moment, is designed for mobile devices / tablets.

  For any suggestions, bugs, if you want to help, tunes you fuckin' dig and want to tell me all about,
  make sure to hit me up at <aylanismello@gmail.com>


  ##### Best,
  ##### *The Fire Feed Team*

`;


const Help = () => (
  <div className="help-page">
    <ReactMarkdown source={input} />
  </div>
);

export default Help;
