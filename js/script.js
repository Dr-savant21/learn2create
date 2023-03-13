let learnBtn = document.getElementById('learn-btn');
let watchBtn = document.getElementById('Watch-btn');
let headerSection = document.querySelector('.header-section');

learnBtn.addEventListener('click', changeBg)
watchBtn.addEventListener('click', newBg)
function changeBg(){
    headerSection.style.background = "linear-gradient(#000a,#000a), url('../image/newImage.jpg')"
    headerSection.style.backgroundPosition = 'center';
    headerSection.style.backgroundSize = 'cover'
}
function newBg(){
    headerSection.style.background = "linear-gradient(#000a,#000a), url('../image/newImage2.png')"
    headerSection.style.backgroundPosition = 'center';
    headerSection.style.backgroundSize = 'cover'
}
let designer=['Nosa','Ofure','Israel','Philip']
function designerName(){
    for (let i = 0; i < designer.length; i++) {
        const element = designer[Math.floor(Math.random()*designer.length)];
        document.getElementById('designer').innerHTML = element;
    }
}
setInterval(designerName,1000)
// github/tonerozic1