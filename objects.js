
const playlist = {artistName: "song1"};

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign(playlist, { [artistName] : songTitle});
  return playlist;
  
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
const playlist = {artist1: "song1"};
}

function updatePlaylist(playlist, artistName, songTitle){
 return Object.assign({}, playlist, { [artistName] : songTitle});

}