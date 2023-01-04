body = document.getElementsByName('body')
themeicon = document.querySelector('.themeicon')
a = document.getElementsByTagName('a')

function animationend(){
    document.body.style.animationPlayState= 'paused';
}
function animationstart(){
    document.body.style.animationPlayState= 'running';
}
function dark(){
    document.body.style.backgroundColor= 'black';
    document.body.style.color= 'white';
}

function light(){
    document.body.style.backgroundColor= 'white';
    document.body.style.color= 'black';
}