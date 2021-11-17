'use strict';

// Returns a quote value based on number of players and duration
function getQuote(numPlayers, duration) {
    return numPlayers * 50 * duration;
}

document.getElementById('order').onsubmit = function(event) {
    event.preventDefault(); // Prevent default behavior
    const formData = new FormData(document.getElementById('order'));
    let quoteValue = getQuote(formData.get("numPlayers"), formData.get("duration"));
    let orderObj = {
        name: formData.get("name"),
        email: formData.get("email"),
        comments: formData.get("comments"),
        genre: formData.get("genre"),
        numPlayers: formData.get("numPlayers"),
        duration: formData.get("duration"),
        quote: quoteValue
    }
    console.log(orderObj);
    axios
        .post('/request', orderObj)
        .then((response) => {
            console.log(response);
            document.body.innerHTML = "Request saved!";
        })
        .catch((error) => {
            console.log(error);
        });
};
