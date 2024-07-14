const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li')
const deleteButton = document.createElement('del')
li.textContent = input.value;
deleteButton.textContent = 'X';
li.append('deleteButton');
list.append('li');

buttonElement.addEventListener('click', function() {
    // Get the input value
    const chapter = input.value;

    // Check if input is empty
    if (chapter.trim() === '') {
        alert('Please enter a book and chapter.');
        return;
    }

    // Create list item elements
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Set content of the list item and delete button
    li.textContent = chapter;
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete');

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the list
    list.appendChild(li);

    // Clear the input field
    input.value = '';

    // Add event listener to the delete button to remove the chapter
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
    });
});