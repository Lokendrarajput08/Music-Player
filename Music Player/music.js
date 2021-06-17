let x = document.querySelector("#myAudio");
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let img=document.querySelector("#m_img");

let isPlaying = false;

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  x.play();
  isPlaying = true;

  x.ontimeupdate = function() {myFunction()};
  
  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
  img.style.animation="round_img 5s linear infinite";

  function myFunction() {
    // console.log(x.currentTime);
    document.getElementById("current-time").innerHTML = x.currentTime;
  }

}

function pauseTrack() {
  x.pause();
  isPlaying = false;

  // Replace icon with the play icon
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
  img.style.animation="stop";
}

// function nextTrack() {
//   if (track_index < track_list.length - 1)
//     track_index += 1;
//   else track_index = 0;
//   loadTrack(track_index);
//   playTrack();
// }

// function prevTrack() {
//   if (track_index > 0)
//     track_index -= 1;
//   else track_index = track_list.length;
//   loadTrack(track_index);
//   playTrack();
// }

