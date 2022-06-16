const elbody = document.querySelector('.body');
const lightButton = document.querySelector('.site-header-top__light');
const darkButton = document.querySelector('.site-header-top__dark');


lightButton.addEventListener('click', function(){
    elbody.style.backgroundColor = '#fff'
});

darkButton.addEventListener('click', function(){
    elbody.style.backgroundColor = '#000'
});

