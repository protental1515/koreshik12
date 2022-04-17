const button = document.querySelector('.svg');
const leftbar = document.querySelector('#leftbar');


button.addEventListener('click', function() {
    leftbar.classList.toggle('hidden')
    
    
})
const accordi = document.querySelector('.accord');
const list = document.querySelector('.studentlist');

accordi.addEventListener('click', function() {
    list.classList.toggle('hiddenaccord')
    
    
})
const spancont = document.querySelector('.spancont');
const divcont = document.querySelector('.divcont');


spancont.addEventListener('click', function() {
    divcont.classList.toggle('hiddenaccord')
    
    
})