<<<<<<< HEAD
const playlist = {artistName: "song1"};

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign(playlist, { [artistName] : songTitle});
  return playlist;
  
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
=======
const playlist = {artist1: "song1"};

function updatePlaylist(playlist, artistName, songTitle){
 return Object.assign({}, playlist, { [artistName] : songTitle});
>>>>>>> bb41ce23b7d9d91a459587a424991dd3b81c6caa
}