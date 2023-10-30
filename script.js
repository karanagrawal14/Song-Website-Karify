console.log("Welcome to Spotify");

// Initialise the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3')
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById("myProgressBar")
let gif=document.getElementById("gif")
let songItems=Array.from(document.getElementsByClassName('songItem'))
let masterSongName=document.getElementById("masterSongName");
let t=document.getElementById('t');


let song=[
    {
        songName:"Warriyo - Mortals (feat. Laura Brehm) [NCS Release]",
        filePath:"songs/1.mp3",
        coverPath:"covers/1.jpg"
    },
    {
        songName:"Cielo - Huma Huma",
        filePath:"songs/2.mp3",
        coverPath:"covers/2.jpg"
    },
    {
        songName:"DEAF KEV - Invincible [NCS Release]",
        filePath:"songs/3.mp3",
        coverPath:"covers/3.jpg"
    },
    {
        songName:"Different Heaven & EH!DE - My Heart [NCS Release]",
        filePath:"songs/4.mp3",
        coverPath:"covers/4.jpg"
    },
    {
        songName:"Janji - Heroes Tonight [NCS Release]",
        filePath:"songs/5.mp3",
        coverPath:"covers/5.jpg"
    },
    {
        songName:"Rabba",
        filePath:"songs/6.mp3",
        coverPath:"covers/6.jpg"
    },
    {
        songName:"Ae dil hai mushkil",
        filePath:"songs/7.mp3",
        coverPath:"covers/7.jpg"
    },
    {
        songName:"Naina",
        filePath:"songs/8.mp3",
        coverPath:"covers/8.jpg"
    },
    {
        songName:"Ashiqui",
        filePath:"songs/9.mp3",
        coverPath:"covers/9.jpg"
    },
    {
        songName:"Bulleya",
        filePath:"songs/10.mp3",
        coverPath:"covers/10.jpg"
    }
]


songItems.forEach((element,i) => {
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src=song[i].coverPath
    element.getElementsByClassName("songName")[0].innerText=song[i].songName
    // element.getElementsByClassName('timestamp')[0].innerText="Karan"
});
// audioElement.play();

// audioElement.addEventListener("loadedmetadata",(e)=>
// {
//         song.forEach((element,i) => {
//             document.getElementsByClassName('timestamp')[i].innerText=audioElement.duration
        
//             audioElement.src=`songs/${i+1}.mp3`;
//             console.log(audioElement.duration)
//         });
//     })
    
    
    

// Handle play/Pause Click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        gif.style.opacity="1"
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity="1"
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        gif.style.opacity='0'
    }
})


// Event listener
audioElement.addEventListener("timeupdate",()=>{
    // console.log("timeUpdate")
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    // console.log(progress);
    myProgressBar.value=progress
    t.innerText=`${audioElement.currentTime/60}:${audioElement.currentTime%60}`;
    console.log(audioElement.currentTime)
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
        element.classList.add("fa-play-circle")
        // e.target.classList.remove("fa-pause-circle")
    });
    
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
    element.addEventListener('click',(e)=>{
        songIndex=parseInt(e.target.id);
        console.log(e)
        makeAllPlays();
        
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle")
        audioElement.src=`songs/${songIndex+1}.mp3`
        masterSongName.innerText=song[songIndex].songName;    
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity="1"
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    })
});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9)
    {
        songIndex=0;
    }
    else{
        songIndex+=1

    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterSongName.innerText=song[songIndex].songName;  
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<0)
    {
        songIndex=9;
    }
    else{
        songIndex-=1

    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterSongName.innerText=song[songIndex].songName;    
    audioElement.currentTime=0;

        audioElement.play();
        gif.style.opacity="1"
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        
})
