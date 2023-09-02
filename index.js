// Write your code here!

const main = document.getElementById('main');
main.remove();

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.textContent = 'Mohamed TCHOKETCH is the champion';

// Appending the element to the DOM for it to be displayed on the web page
document.body.appendChild(newHeader);