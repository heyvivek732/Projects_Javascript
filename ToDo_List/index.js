// Get references to the input field, button, and item container
const writeText = document.querySelector('.write-text');
const addContentButton = document.querySelector('.btn');
const itemContainer = document.querySelector('.item');


// Load saved value from local storage when the page loads
window.addEventListener('load', () => {
    const savedValues = JSON.parse(localStorage.getItem('savedValues')) || [];

    for (const value of savedValues) {
        createItem(value);
    }
});

// Add an event listener to the button to create and add content
addContentButton.addEventListener('click', () => {
    const valueToSave = writeText.value.trim();
    if (valueToSave !== '') {
        const savedValues = JSON.parse(localStorage.getItem('savedValues')) || [];
        savedValues.push(valueToSave);

        // Save the updated array to local storage
        localStorage.setItem('savedValues', JSON.stringify(savedValues));

        // Create and append the new item
        createItem(valueToSave);
        writeText.value = '';
    }
});

// Function to create a new item and append it to the container
function createItem(content) {
    const newItem = document.createElement('div');
    newItem.className = 'Check-box';
    newItem.innerHTML = `
    <input type="checkbox" class="custom-checkbox">
    <div class="Lists">
      <span class="span-text">${content}</span>
      <i class="fa-solid fa-xmark cancel"></i>
    </div>
  `;
    itemContainer.appendChild(newItem);

    newItem.offsetHeight;
    newItem.classList.add('show');
    
    const cancel = newItem.querySelector('.cancel');
    cancel.addEventListener('click', () => {
        itemContainer.removeChild(newItem);

        const savedValues = JSON.parse(localStorage.getItem('savedValues')) || [];
        const index = savedValues.indexOf(content);
        if (index !== -1) {
            savedValues.splice(index, 1);
            localStorage.setItem('savedValues', JSON.stringify(savedValues));
        }
    });
}

document.addEventListener('click', function (event) {
    // Check if the clicked element has the custom-checkbox class
    if (event.target.classList.contains('custom-checkbox')) {
      // Get the associated span element
      const span = event.target.parentElement.querySelector('.span-text');
      if (event.target.checked) {
        span.style.textDecoration = 'line-through';
      } else {
        span.style.textDecoration = 'none';
      }
    }
  });