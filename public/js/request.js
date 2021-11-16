'use strict';

function getQuote(numPlayers) {
    return numPlayers * 50;
}

document.getElementById('order').onsubmit = function(event) {
    event.preventDefault(); // Prevent default behavior
    const formData = new FormData(document.getElementById('order'));
    let quoteValue = getQuote(formData.get("numPlayers"));
    let orderObj = {
        name: formData.get("name"),
        email: formData.get("email"),
        comments: formData.get("comments"),
        genre: formData.get("genre"),
        numPlayers: formData.get("numPlayers"),
        quote: quoteValue
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
