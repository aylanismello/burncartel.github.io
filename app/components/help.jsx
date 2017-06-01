import React from "react";
import ReactMarkdown from "react-markdown";

const input = `
  # Hello 🌎!

  Thanks so much for trying out Fire Feed 🔥🎧❤️!

  **TIPS:**

   (for those on mobile 📱)

  - To traverse to the next track, swipe on the track name in the player bar to the left. 👈
  - To traverse to the previous track, swipe on the player to the right. 👉
  - Double-tap the track name in the player to like a track. 👍

  (in general)
  - Make sure to explore different curators' feeds and make serendipitous discoveries! 🎶💻

  Also, note that:
  * We are aware that feeds will not continue playing if you lock your IPhone. This is an IPhone issue and we're trying to fix that.
  * The mobile version of the website works better on Android devices

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
