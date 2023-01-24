# Badminton Organizer

<strong>Last year I got into a badminton club, and I've been having a lot of fun attending our trainings. I felt like I could help the team by writing a simple app that creates the schedule of the matches for the day instead having to spend 10 minutes figuring it out at the beginning of the sessions. So after gathering some requirements, I decided to use React and came up with the beta version of the app. You can check it out at <a href="http://groth.in/badminton-organizer" target="_blank">groth.in/badminton-organizer</a> or by clicking on the image below!</strong>

<p align="center">
  <a href="http://groth.in/badminton-organizer" target="_blank"><img src="http://georgeroth.eu/images/logo-article-inner.png" title="Badminton Organizer app"></a>
  <br>
  <a href="https://github.com/users/georgeroth/projects/1/views/1" target="_blank">Project Board</a> | <a href="https://github.com/georgeroth/react-badminton-organizer" target="_blank">GitHub Repository</a>
</p>

<p>
  The idea for the app is quite simple: enable the organizer to paste a list of players into a textbox, set up the amount of courts they have and the number of rounds they'd like to play, and the app gives them who is playing and not playing in which round. 
</p>

<p>The textbox, the amount of courts and the number of rounds are all controlled form items, so the state data updates with every change in real time. This presented an interesting challenge, as the app is converting all new lines into separate array items all the time using <code>event.target.value.split(/\r?\n/)</code> – initially I was converting the array back into new lines to have it displayed in the textarea, but that resulted in the mouse jumping back to the end of the textarea after every user modification. Finally I just ended up using two different states and the display one was left alone, while the data array was always being generated from the display one.</p>

<p>
The logic to generate the the rounds in JS also ended up to be an interesting challenge. My first idea was to have a <code>chanceToBePicked</code> property for all players, which would decrease each time a player is picked in a round, and increase when they weren't picked. This worked, but at the same time, due to being chance-based, it still ended up with some players sometimes playing 5 matches while different players were just playing 3 for example – which clearly goes against how this process should work. So after a bit of thinking I came up with a new logic, where the players are randomly pulled from another pool, from which players <i>disappear</i> once they are selected to play! This ensured that a player can't be selected again unless every other player was selected first. Once this new pool of players reaches zero, then it pulls all players again from the original array, and starts the random selection process again. This mechanism ended up working as intended.
</p>

<p>I also had an exciting time generating the table on the Rounds page, based on the random JS data that is generated – the code ended up needing two maps and a for loop to be able to pull it off, where the X is put into the table cell when the player's name is the same as the round they play in with the index of the for loop. You can check out the code <a href="https://github.com/georgeroth/react-badminton-organizer/blob/main/src/Rounds.js" target="_blank">here</a>.</p>

<p>
  Navigation inside the app is done with <code>useNavigate</code> and <code>React Router</code>. The only mild annoyance is that for a GitHub deploy the app needs a <code>basename</code> property inside <code>BrowserRouter</code>, while the localhost deploy doesn't – which means a line in <a href="https://github.com/georgeroth/react-badminton-organizer/blob/main/src/index.js" target="_blank">index.js</a> always needs to be commented and uncommented. I'll need to look for a better, more dynamic solution for this in the long term.
</p>

<p>In order to improve the app, I will still need to break the random rounds generator function into smaller steps as it's still quite a huge beast which is currently difficult to follow. Responsiveness is also something to be developed, while I have an idea for a "Matches" page where users can see all the players playing on all the different courts, and can potentially drag & drop them into different courts as well. You can see how I'm getting on with these on the <a href="https://github.com/users/georgeroth/projects/1/views/1" target="_blank">Project Board</a> of the app.</p>

<p>
  Thanks for reading along, if you have any questions or comments, just leave them here or on GitHub, any feedback is most welcome!
</p>
