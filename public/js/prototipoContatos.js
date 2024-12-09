import { Cursor } from './cursor.js';
import { Grid } from './grid.js';


const video = document.getElementById('video');
const overlay = document.getElementById('overlay');


const start = ()=>{

    // const botao = document.getElementById("botao");
    // const conteudo = document.getElementById("conteudo");
    // const fechar = document.getElementById("fechar");
  
    // let isExpanded = false;
  
    // // Botão click para expandir
    // botao.addEventListener("click", function () {
    //   if (!isExpanded) {
    //     isExpanded = true;
  
    //     // Exibir conteúdo e botão
    //     // conteudo.style.display = "flex";
  
    //     // Animação de expansão
    //     gsap.to(botao, {
    //       duration: 1,
    //     //   width: window.innerWidth,
    //     //   height: window.innerHeight,
    //     width: '800px',
    //     height: '400px',
    //       position: 'fixed',
    //       ease: "power2.inOut",
    //       onComplete: () => {
    //         fechar.style.display = "block";
    //         botao.classList.add('max');
    //       },
    //     });
    //   }
    // });
  
    // // Botão de fechar com clique
    // fechar.addEventListener("click", function () {
    //   fechar.style.display = "none";
  
    //   // Reversão da animação para voltar ao tamanho original
    //   gsap.to(botao, {
    //     duration: 1,
    //     width: 200,
    //     height: 50,
    //     position: 'absolute',
    //     ease: "power2.inOut",
    //     onComplete: () => {
    //     //   conteudo.style.display = "none";
    //       isExpanded = false;

    //       botao.classList.remove('max');
    //     },
    //   });
    // });


    const mainComponent = document.querySelector('main');
    const cursorComponent = document.querySelector('.cursor');
    const frame = document.querySelector(".frame");

    mainComponent.style.visibility = 'visible';
    cursorComponent.style.visibility = 'visible';
    frame.style.visibility = 'visible';

    const cursor = new Cursor(cursorComponent);
document.body.classList.remove('loading');
[...document.querySelectorAll('a, button, .grid__item')].forEach(link => {
    link.addEventListener('mouseenter', () => cursor.enter());
    link.addEventListener('mouseleave', () => cursor.leave());
});
const calcWinsize = () => {
    return {width: window.innerWidth, height: window.innerHeight};
};
const grid = new Grid(document.querySelector('.gridContatos'), calcWinsize());
grid.on('mouseEnterItem', itemTitle => {
    cursor.DOM.text.innerHTML = itemTitle;
});
grid.on('mouseLeaveItem', _ => {
    cursor.DOM.text.innerHTML = ''
});
}

video.addEventListener('ended', () => {
  // Fade out the video
  gsap.timeline()
    .to(video, { duration: 1.2, opacity: 0, ease: 'expo.inOut' })
    .to(overlay, { duration: 1.4, opacity: 1, ease: 'expo.inOut' }, "+=0.1");

    setTimeout(() => {
        start();
    }, 1000);


});




