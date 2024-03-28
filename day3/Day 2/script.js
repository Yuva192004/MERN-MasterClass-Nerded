//To create a event to add the members
document.addEventListener('DOMContentLoaded', function() {
    const customerForm = document.getElementById('customerForm');
    const customerList = document.getElementById('customerList');
    const addCustomerBtn = document.getElementById('addCustomer');
    const deleteCustomerBtn = document.getElementById('deleteCustomer');

    addCustomerBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const customerName = document.getElementById('customerName').value;
        const contactInfo = document.getElementById('contactInfo').value;
        const membershipType = document.getElementById('membershipType').value;

        const customerEntry = document.createElement('li');
        customerEntry.innerHTML = `
            <input type="checkbox" class="customer-checkbox">
            <span>${customerName} - ${contactInfo} - ${membershipType}</span>
        `;
        customerList.appendChild(customerEntry);

        // Clear input fields
        customerForm.reset();
    });
    
    //to create a event when we have to delete the selected member
    deleteCustomerBtn.addEventListener('click', function() {
        const selectedCheckboxes = document.querySelectorAll('.customer-checkbox:checked');
        
        if (selectedCheckboxes.length === 0) {
            alert("Please select customers to delete.");
            return;
        }

        if (confirm("Are you sure you want to delete the selected customers?")) {
            selectedCheckboxes.forEach(function(checkbox) {
                const listItem = checkbox.parentNode;
                customerList.removeChild(listItem);
            });
        }
    });
});
