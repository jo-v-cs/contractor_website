'use strict';
let button = document.getElementById('ham-button');
button.addEventListener('click', function() {
    console.log("Click");
    let hamMenu = document.getElementById('ham-menu');
    if (hamMenu.style.display === 'none') {
        hamMenu.style.display = 'block';
    }
    else {
        hamMenu.style.display = 'none';
    }
});