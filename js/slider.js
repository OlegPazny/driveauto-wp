const slides=document.querySelectorAll('.slide');
const sliderLine=document.querySelector('.slider-line');

let count=0;
let width;

function init(){
    console.log('resize');
    width=document.querySelector('.slider').offsetWidth;
    sliderLine.style.width=width*slides.length+'px';
    slides.forEach(item=>{
        item.style.width=width + 'px';
        if(window.screen.width>412){
            item.style.height='auto';
        }else{
            item.style.height='100%';
        }
        
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider-prev').addEventListener('click', function(){
    count--;
    if(count<0){
        count=slides.length-1;
    }
    rollSlider();
});

document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
    if(count>=slides.length){
        count=0;
    }
    rollSlider();
});

function rollSlider(){
    sliderLine.style.transform='translate(-'+count*width+'px)';
}