const container = document.querySelector('.container');
var sounds = ['applause','boo','gasp','tada','victory','wrong'];

sounds.forEach(function(sound){
   const btn = document.createElement('button');
   btn.classList.add('btn')
   btn.innerText = sound;
   container.appendChild(btn)
   btn.onclick = function(){
       stopSongs()
       document.getElementById(sound).play()
   }
})

function stopSongs(){
    sounds.forEach(function(sound){
        document.getElementById(sound).pause();
        document.getElementById(sound).currentTime=0})
}