var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21' },
        { title: 'Magenta', duration: '2:15' }
    ]
};

var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fit in pocket', duration: '3:21' },
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15' }
    ]
};

var albumPrimus = {
    title: 'Pork Soda',
    artist: 'Primus',
    label: 'Something something',
    year: '1993',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Pork Chops little ditty', duration: '0:21' },
        { title: 'My Name Is Mud', duration: '4:46' },
        { title: 'Welcome to This World', duration: '3:40' },
        { title: 'Bob', duration: '4:40' },
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
  var template = 
      '<tr class="album-view-song-item">'
        + ' <td class="song-item-number>' + songNumber + '</td>'
        + ' <td class="song-item-title>' + songName + '</td>'
        + ' <td class="song-item-duration>' + songLength + '</td>'
        + '</tr>'
        ;
        
    return template;
};

    var albumTitle = document.getElementByClassName('album-view-title')[0];
    var albumArtist = document.getElementByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElemntsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(album) {
    
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    
    albumSongList.innerHTML = '';
    
    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.song[i].duration);
    }
};

window.onload = function() {
    setCurrentAlbum(albumPicasso);
    
    var albums = [albumPicasso, albumMarconi, albumPrimus];
    var index = 1;
    albumImage.addEventListener("click", function(event){
        setCurrentAlbum(albums[index]);
        index++;
        if (index == albums.length) {
            index = 0;
        }
    });
};