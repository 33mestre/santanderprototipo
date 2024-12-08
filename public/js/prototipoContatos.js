import { Cursor } from './cursor.js';
import { Grid } from './grid.js';


const video = document.getElementById('video');
const overlay = document.getElementById('overlay');


const start = ()=>{
    const mainComponent = document.querySelector('main');
    const cursorComponent = document.querySelector('.cursor');

    mainComponent.style.visibility = 'visible';
    cursorComponent.style.visibility = 'visible';

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




