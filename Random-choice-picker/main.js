const tagsEle = document.getElementById('tags');
const inputEle = document.getElementById('input');

input.focus();

input.onkeyup = function(e) {
    createEle(e);
    if (e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 100);
        randomSelect()
    }
}

function createEle(e){
    const tags = e.target.value.split(',')
    .filter(function(tag){
        return tag.trim() !== ''
    }).map(function(tag){
       return tag.trim()
    })
    tagsEle.innerHTML = '';
    tags.forEach(function(tag){
       const tagEle= document.createElement('span');
       tagEle.innerText = tag;
       tagEle.classList.add('tag');
       tagsEle.appendChild(tagEle);
    })
}
function randomSelect(){
        const times = 30;
        var interval =  setInterval(() => {
              const tagRandom = pickRandom();
              if (tagRandom != undefined){
                highlight(tagRandom);
                setTimeout(function(){
                    removeHighlight(tagRandom)
                }, 100);
              }
          }, 100);
      
          setTimeout(() => {
              clearInterval(interval);
              const tagRandom = pickRandom();
              if (tagRandom != undefined){
              setTimeout(function(){
                  highlight(pickRandom())
              }, 100);}
          }, times *100);
    }

function pickRandom(){
    
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}   

function highlight(tag){
    tag.classList.add('highlight')
}
function removeHighlight(tag){
    tag.classList.remove('highlight')
}

