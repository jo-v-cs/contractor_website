'use strict';
const axios = require('axios');

document.getElementById('order').onsubmit = function(event) {
    //event.preventDefault(); // Prevent page refresh
    const formData = new FormData(document.getElementById('order'));
    let orderObj = {
        name: formData.get("name"),
        email: formData.get("email"),
        comments: formData.get("comments")
    }
    console.log(orderObj);
    /*axios
        .post('/request', orderObj)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })*/
};