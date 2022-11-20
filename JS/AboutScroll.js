
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const images = document.querySelector('.ProjectsContainer');

var Width = document.getElementById('card').offsetWidth;
let Height = document.getElementById('card').offsetHeight;

const first_card_clone = images.children[0].cloneNode(true);
const last_card_clone = images.children[images.children.length -1 ].cloneNode(true);
const second_card_clone = images.children[1].cloneNode(true);
const secondlast_card_clone = images.children[images.children.length -2 ].cloneNode(true);
images.insertBefore(last_card_clone,images.children[0]);
images.appendChild(first_card_clone)
images.insertBefore(secondlast_card_clone,images.children[0]);
images.appendChild(second_card_clone)


images.style.transitionDuration = "0.0s"
images.style.transform = `translate(-${(Width * 2)}px)`

let current_card = 1;
function resized(){
    Width = document.getElementById('card').offsetWidth;
    images.style.transform = `translate(-${(Width * current_card)}px)`
}
window.onresize = resized;
next.addEventListener('click', () => {

if (current_card < images.children.length - 1 ){
    current_card++;

    images.style.transitionDuration = "0.25s"
    images.style.transform = `translate(-${current_card*Width}px)` 

if(current_card === images.children.length - 3 ){
    setTimeout(() =>{
    images.style.transitionDuration ="0.0s"
    images.style.transform = `translate(-${(Width * 1)}px)`
    current_card = 1;
    },250)
}

}else{
    return;
}
})

prev.addEventListener('click', () => {

    if (current_card >= 0 ){
        current_card--;
    
        images.style.transitionDuration = "0.25s"
        images.style.transform = `translate(-${current_card*Width}px)` 

        if(current_card === 0 ){
            setTimeout(() =>{
            images.style.transitionDuration ="0.0s"
            images.style.transform = `translate(-${(images.children.length - 4)*Width}px)`
            current_card = images.children.length - 4;
            },250)
        }

    }else{
        return;
    }
    })