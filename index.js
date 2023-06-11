let id = 0;

// Add event listener to the 'add' button
document.getElementById('add').addEventListener('click', () => {
    
    // Check if any of the required fields are empty
    if(document.getElementById('trainer-name').value == '' || 
        document.getElementById('pokemon-name').value == '' || 
        document.getElementById('pokemon-level').value == '' || 
        document.getElementById('pokemon-type').value == '' || 
        document.getElementById('pokemon-ability').value == ''
    ) {
        // Display an alert message if any field is empty
        let alert = document.createElement('div');
        let close = document.createElement('button');
        let alertText = document.createElement('p');
        alert.className = 'alert alert-warning alert-dismissible fade show col-sm-3';
        alert.setAttribute('role', 'alert');
        close.className = 'btn-close';
        close.setAttribute('data-bs-dismiss', 'alert');
        alertText.innerText = 'All fields must be filled!';
        close.setAttribute('aria-label', 'Close');
        close.setAttribute('type', 'button');        
        alert.appendChild(alertText);
        alert.appendChild(close);
        document.body.appendChild(alert);
        
    } else {
        // Add a new row to the table with the entered data
        let table = document.getElementById('list');
        let row = table.insertRow(1);
        row.setAttribute('id', `item-${id}`);
        row.insertCell(0).innerHTML = document.getElementById('trainer-name').value;
        row.insertCell(1).innerHTML = document.getElementById('pokemon-name').value;
        row.insertCell(2).innerHTML = document.getElementById('pokemon-level').value;
        row.insertCell(3).innerHTML = document.getElementById('pokemon-type').value;
        row.insertCell(4).innerHTML = document.getElementById('pokemon-ability').value;
        let actions = row.insertCell(5);
        actions.append(createDeleteButton(id++));
        
        // Clear the input fields after adding a new entry
        document.getElementById('trainer-name').value = '';
        document.getElementById('pokemon-name').value = '';
        document.getElementById('pokemon-level').value = '';
        document.getElementById('pokemon-type').value = '';
        document.getElementById('pokemon-ability').value = '';
    }
});

// Function to create a delete button for each row
function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        // Log the row deletion and remove it from the table
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}
