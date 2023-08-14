document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
    const continueButton = document.getElementById('continueButton');

    calculateButton.addEventListener('click', function () {
        updateSummaryTable();
        continueButton.disabled = !isFormComplete();
    });

    continueButton.addEventListener('click', function () {
        if (isFormComplete()) {
            // Process the payment and continue with the purchase
            // For demonstration purposes, alert a success message
            alert('Payment successful! Continuing with purchase.');
        } else {
            alert('Please complete all payment information fields.');
        }
    });

    function isFormComplete() {
        const name = document.getElementById('name').value;
        const cardNumber = document.getElementById('cardnumber').value;
        const expirationDate = document.getElementById('expirationdate').value;
        const securityCode = document.getElementById('securitycode').value;

        return name !== '' && cardNumber !== '' && expirationDate !== '' && securityCode !== '';
    }

    function updateSummaryTable() {
        // Update the summary table based on user selections
    }

    // Other functions for calculations and event listeners
    // ...
});


function toggleNav() {
    const navbarList = document.getElementById("navbarList");
    navbarList.classList.toggle("show");
  }