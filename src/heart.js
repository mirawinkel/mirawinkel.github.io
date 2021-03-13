document.addEventListener("mousemove", (e)=>{
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x+'px';
    heart.style.top = y+'px';
    let size = Math.random() * 75;
    heart.style.width = 15+size+'px';
    heart.style.height = 15+size+'px';
    body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },1800);
  })