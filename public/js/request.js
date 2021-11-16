'use strict';

document.getElementById('order').onsubmit = function(event) {
    event.preventDefault(); // Prevent default behavior
    const formData = new FormData(document.getElementById('order'));
    let orderObj = {
        name: formData.get("name"),
        email: formData.get("email"),
        comments: formData.get("comments"),
        genre: formData.get("genre")
    }
    console.log(orderObj);
    axios
        .post('/request', orderObj)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};