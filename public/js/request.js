'use strict';

document.getElementById('order').onsubmit = function(event) {
    event.preventDefault(); // Prevent page refresh
    const formData = new FormData(document.getElementById('order'));
    console.log(formData.get("email"));
};