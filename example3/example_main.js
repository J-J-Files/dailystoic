import { myArray } from './test_array.js';

const listContainer = document.getElementById('list');
myArray.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listContainer.appendChild(listItem);
});