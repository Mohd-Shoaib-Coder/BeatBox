let songName=document.querySelector("#song-name")
let songSinger=document.querySelector("#song-singer")
let songImage=document.querySelector(".song-image")
let playPauseImg=document.querySelector("#play-pause")
let volumeRange=document.querySelector("#volume-range")
let volSvg=document.querySelector("#vol-svg")

let index=0;

let playingSong=false;

let track=document.createElement("audio")
track.volume=1;



let songs=[{

    name:"Be Sabrian",
    path:"songs/Be-Sabrian.mp3",
    image:"Images2/music1.jpg",
    singer:"Arijit Singh"

},

{

    name:"Ve-Kamleya",
    path:"songs/Ve-Kamleya.mp3",
    image:"Images2/music2.jpg",
    singer:"Arijit Singh"

},
{

    name:"Jaadu Teri Nazar",
    path:"songs/Jadu-Teri-Nazar.mp3",
    image:"Images2/music3.jpg",
    singer:"shreya ghoshal"

},
{

    name:"Millionaire",
    path:"songs/Millionaire.mp3",
    image:"Images/music4.jpg",
    singer:"Honey Singh"

},
{

    name:"Laal Pari",
    path:"songs/Laal-Pari.mp3",
    image:"Images2/music5.jpg",
    singer:"Honey Singh"

},
{

    name:"Dope Shope",
    path:"songs/Dope-Shope.mp3",
    image:"Images2/music6.jpg",
    singer:"Honey Singh"

},
{

    name:"Dhadkan",
    path:"songs/Dhadkan.mp3",
    image:"Images2/music7.jpg",
    singer:"Arijit Singh"

},
{

    name:"Falak tak chal sath mere",
    path:"songs/Falak-tak-chal.mp3",
    image:"Images2/music8.jpg",
    singer:"udit narayan"

},







]


function loadTrack(){

    track.src=songs[index].path;
    songName.innerHTML=songs[index].name;
    songSinger.innerHTML=songs[index].singer;
    songImage.style=`background-image:url("${songs[index].image}")`
    volume()
}

loadTrack(index)


function playPause(){

if(playingSong==false){

    playSong()
}else{

    pauseSong()
}

}

function playSong(){

    track.play();
    playingSong=true;
    playPauseImg.src="Images/pause.svg"
}


function pauseSong(){

    track.pause();
    playingSong=false;
    playPauseImg.src="Images/play.svg"
}

function nextSong(){


    if(index<songs.length-1){

        index++;
        loadTrack(index)
        playSong()
    }else{

        index=0;
        loadTrack(index)
        playSong()
    }
}

function previousSong(){


    if(index>0){

        index--;
        loadTrack(index)
        playSong()
    }else{

        index=songs.length-1;
        loadTrack(index)
        playSong()
    }
}

function volume(){

    track.volume=volumeRange.value/100;
    if(volumeRange.value==0){
        volSvg.style.fill = "white";
        volSvg.src="Images/mute.svg"
    }else{

        volSvg.src="/Images/volume.svg"
    }

}

