  const video = document.getElementById('background-video');


  video.addEventListener('loadedmetadata', () => {
 
    video.currentTime = Math.random() * video.duration;
    video.play();
  });