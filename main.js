//define elements
let now_playing = document.querySelector(".now-playing");
let playpause_btn = document.querySelector(".playpause-track");
let track_name = document.querySelector(".track-name");

//universal elements
let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

let track_list = [
    {
      name: "1000 Reasons",
      artist:"Riles",
      path: "C:\Users\P4ROC\Desktop\stuff\coding stuff\kdst\music\Rilès - 1000 REASONS.mp3"
    },
    {
      name: "Sign of the Times",
      artist: "Harry Styles",
      path: "C:\Users\P4ROC\Desktop\stuff\coding stuff\kdst\music\Harry Styles - Sign of the Times (Audio).mp3"
    },
    {
      name: "Karma(feat. WoodKid)",
      artist: "Mahmood, WoodKid",
      path: "C:\Users\P4ROC\Desktop\stuff\coding stuff\kdst\music\Mahmood, Woodkid - Karma (Visual).mp3"
    },
    {
        name: "Run",
        artist: "One Republic",
        path: "C:\Users\P4ROC\Desktop\stuff\coding stuff\kdst\music\OneRepublic - Run (Official Music Video).mp3"
    },
];

function loadTrack(track_index) {
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();

    track_name.textContent = track_list[track_index].name;
    
    // Load a new track
    curr_track.src = track_list[track_index].path;
    curr_track.load();
    curr_track.addEventListener("ended", nextTrack);
}

function playpauseTrack() {
    // Switch between playing and pausing
    // depending on the current state
    if (!isPlaying) playTrack();
    else pauseTrack();
}
    
function playTrack() {
    // Play the loaded track
    curr_track.play();
    isPlaying = true;
    
    // Replace icon with the pause icon
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
  
function pauseTrack() {
    // Pause the loaded track
    curr_track.pause();
    isPlaying = false;
    
    // Replace icon with the play icon
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

// Load the first track in the tracklist
loadTrack(track_index);