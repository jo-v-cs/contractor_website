'use strict';
 
// Import logic
import { getQuote } from "./requestFunctions.mjs";

// POST form
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
            document.querySelector('section').innerHTML = "Request saved!";
        })
        .catch((error) => {
            console.log(error);
        });
};

// Get order History
document.getElementById('orderhistory-button').onclick = (event) => {
    event.preventDefault();
    axios
        .get('/request/orderData')
        .then((response) => {
            displayResponse(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
}

// Delete Order history
document.getElementById('deletehistory-button').onclick = (event) => {
    event.preventDefault();
    if (confirm("This will delete your order history permanently. Proceed?")) {
        clearResponseArea();
        axios
        .delete('/request/orderData')
        .then((response) => {
            if (response.status === 204) {
                console.log("Order history deleted successfully.");
            }
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

}

function displayResponse(responseObject) {
    clearResponseArea(); // Clear response area to avoid clutter
    let parsedResponse = [];
    responseObject.forEach((entry) => {
        parsedResponse.push(entry);
    });
    console.log(parsedResponse);
    let responseArea = document.getElementById('orderhistory-response');
    let newHeading = document.createElement('h2');
    newHeading.appendChild(document.createTextNode('Order History'));
    responseArea.appendChild(newHeading);
    let newUl = document.createElement('ul');
    responseArea.appendChild(newUl);
    parsedResponse.forEach((object) => {
        let newLi = document.createElement('li');
        let newLiContent = document.createTextNode(JSON.stringify(object));
        newLi.appendChild(newLiContent);
        newUl.appendChild(newLi);
    })
}

function clearResponseArea() {
    document.getElementById('orderhistory-response').innerHTML = "";
}