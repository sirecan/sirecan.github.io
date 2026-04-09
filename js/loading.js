// GAME STYLE LOADING

let progress = 0;
const bar = document.getElementById('loading-progress');
const loader = document.getElementById('loading-screen');

const loadingInterval = setInterval(()=>{

  progress += Math.random()*18;

  if(progress >= 100){
      progress = 100;
      bar.style.width = progress + '%';

      clearInterval(loadingInterval);

      setTimeout(()=>{
          loader.style.opacity = '0';
          loader.style.transition = 'opacity 0.6s';

          setTimeout(()=>{
              loader.style.display='none';
          },600);
      },400);

  }else{
      bar.style.width = progress + '%';
  }

},180);