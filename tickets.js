function incrementGuest(category) {
  const guestInput = document.getElementById(category);
  guestInput.value = parseInt(guestInput.value) + 1;
  calculateTotal();
}

function decrementGuest(category) {
  const guestInput = document.getElementById(category);
  const currentValue = parseInt(guestInput.value);
  if (currentValue > 0) {
    guestInput.value = currentValue - 1;
    calculateTotal();
  }
}

function isFormComplete() {
  const date = document.getElementById('date').value;
  const slAdult = parseInt(document.getElementById('slAdult').value);
  const slChild = parseInt(document.getElementById('slChild').value);
  const foreignerAdult = parseInt(document.getElementById('foreignerAdult').value);
  const foreignerChild = parseInt(document.getElementById('foreignerChild').value);
  const durationSelect = document.getElementById('duration').value;

  return date !== '' && (slAdult > 0 || slChild > 0 || foreignerAdult > 0 || foreignerChild > 0) && durationSelect !== 'normal';
}

function calculateTotal() {
  const slAdult = parseInt(document.getElementById('slAdult').value);
  const slChild = parseInt(document.getElementById('slChild').value);
  const foreignerAdult = parseInt(document.getElementById('foreignerAdult').value);
  const foreignerChild = parseInt(document.getElementById('foreignerChild').value);

  const durationSelect = document.getElementById('duration');
  const selectedDuration = durationSelect.value;
  const isPeak = durationSelect.options[durationSelect.selectedIndex].classList.contains('peak');

  const chargeSLAdult = isPeak ? 6 : 4;
  const chargeSLChild = isPeak ? 3 : 2;
  const chargeForeignerAdult = isPeak ? 13 : 10;
  const chargeForeignerChild = isPeak ? 8 : 5;

  const totalSLAdult = slAdult * chargeSLAdult;
  const totalSLChild = slChild * chargeSLChild;
  const totalForeignerAdult = foreignerAdult * chargeForeignerAdult;
  const totalForeignerChild = foreignerChild * chargeForeignerChild;

  const totalPayable = totalSLAdult + totalSLChild + totalForeignerAdult + totalForeignerChild;

  const totalDiv = document.getElementById('total');
  totalDiv.innerText = `Total Payable: ${totalPayable} USD`;
  
}
function isFormComplete() {
  const date = document.getElementById('date').value;
  const slAdult = parseInt(document.getElementById('slAdult').value) || 0;
  const slChild = parseInt(document.getElementById('slChild').value) || 0;
  const foreignerAdult = parseInt(document.getElementById('foreignerAdult').value) || 0;
  const foreignerChild = parseInt(document.getElementById('foreignerChild').value) || 0;
  const durationSelect = document.getElementById('duration').value;

  return date !== '' && (slAdult > 0 || slChild > 0 || foreignerAdult > 0 || foreignerChild > 0) && durationSelect !== 'normal';
}

function calculateTotal() {
  const slAdult = parseInt(document.getElementById('slAdult').value);
  const slChild = parseInt(document.getElementById('slChild').value);
  const foreignerAdult = parseInt(document.getElementById('foreignerAdult').value);
  const foreignerChild = parseInt(document.getElementById('foreignerChild').value);

  const durationSelect = document.getElementById('duration');
  const selectedDuration = durationSelect.value;
  const isPeak = durationSelect.options[durationSelect.selectedIndex].classList.contains('peak');

  const chargeSLAdult = isPeak ? 6 : 4;
  const chargeSLChild = isPeak ? 3 : 2;
  const chargeForeignerAdult = isPeak ? 13 : 10;
  const chargeForeignerChild = isPeak ? 8 : 5;

  const totalSLAdult = slAdult * chargeSLAdult;
  const totalSLChild = slChild * chargeSLChild;
  const totalForeignerAdult = foreignerAdult * chargeForeignerAdult;
  const totalForeignerChild = foreignerChild * chargeForeignerChild;

  const totalPayable = totalSLAdult + totalSLChild + totalForeignerAdult + totalForeignerChild;

  const totalDiv = document.getElementById('total');
  totalDiv.innerText = `Total Payable: ${totalPayable} USD`;
  

  const continueButton = document.getElementById('continueButton');
  if (isFormComplete()) {
    continueButton.disabled = false;
  } else {
    continueButton.disabled = true;
  }
}

function updateSummaryTable() {
  const date = document.getElementById('date').value;
  const selectedTime = document.getElementById('duration').value;
  const duration = getDuration(selectedTime);
  const ticketData = getTicketData();

  document.getElementById('summary-date').innerText = date || '-';
  document.getElementById('summary-time').innerText = selectedTime || '-';
  document.getElementById('summary-duration').innerText = duration || '-';
  document.getElementById('summary-tickets').innerHTML = ticketData || '-';
  document.getElementById('summary-total').innerText = calculateTotalPayable() || '-';
}

// Function to calculate the duration based on the selected time
function getDuration(selectedTime) {
const durationMap = {
  '7-8': '1 hour',
  '8-9': '1 hour',
  '10-11': '1 hour',
  '11-12': '1 hour',
  '12-1': '1 hour',
  '3-4': '1 hour',
  '4-5': '1 hour',
  '5-6': '1 hour',
};

return durationMap[selectedTime] || '-';
}



// Function to calculate the total payable amount based on selected tickets
function calculateTotalPayable() {
const charges = {
  'slAdult': 4,
  'slChild': 2,
  'foreignerAdult': 10,
  'foreignerChild': 5,
  'infant': 0 // Assuming infants have no charge
};

let totalPayable = 0;
for (const ticketType in charges) {
  const count = parseInt(document.getElementById(ticketType).value);
  totalPayable += count * charges[ticketType];
}

return totalPayable;
}
function calculateTotalPayable() {
  const slAdult = parseInt(document.getElementById('slAdult').value);
  const slChild = parseInt(document.getElementById('slChild').value);
  const foreignerAdult = parseInt(document.getElementById('foreignerAdult').value);
  const foreignerChild = parseInt(document.getElementById('foreignerChild').value);

  const durationSelect = document.getElementById('duration');
  const selectedDuration = durationSelect.value;
  const isPeak = durationSelect.options[durationSelect.selectedIndex].classList.contains('peak');

  const chargeSLAdult = isPeak ? 6 : 4;
  const chargeSLChild = isPeak ? 3 : 2;
  const chargeForeignerAdult = isPeak ? 13 : 10;
  const chargeForeignerChild = isPeak ? 8 : 5;

  const totalSLAdult = slAdult * chargeSLAdult;
  const totalSLChild = slChild * chargeSLChild;
  const totalForeignerAdult = foreignerAdult * chargeForeignerAdult;
  const totalForeignerChild = foreignerChild * chargeForeignerChild;

  const totalPayable = totalSLAdult + totalSLChild + totalForeignerAdult + totalForeignerChild;

  return totalPayable;
}
// Function to get the total number of tickets for a given category
function getTotalTickets(category) {
const ticketCount = parseInt(document.getElementById(category).value);
const ticketName = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
const ticketCharge = calculateTicketCharge(category);
return ticketCount ? `${ticketCount} ${ticketName}: $${ticketCount * ticketCharge}` : '';
}

function calculateTotal() {
const slAdult = parseInt(document.getElementById('slAdult').value);
const slChild = parseInt(document.getElementById('slChild').value);
const foreignerAdult = parseInt(document.getElementById('foreignerAdult').value);
const foreignerChild = parseInt(document.getElementById('foreignerChild').value);

const durationSelect = document.getElementById('duration');
const selectedDuration = durationSelect.value;
const isPeak = durationSelect.options[durationSelect.selectedIndex].classList.contains('peak');

const chargeSLAdult = isPeak ? 6 : 4;
const chargeSLChild = isPeak ? 3 : 2;
const chargeForeignerAdult = isPeak ? 13 : 10;
const chargeForeignerChild = isPeak ? 8 : 5;

const totalSLAdult = slAdult * chargeSLAdult;
const totalSLChild = slChild * chargeSLChild;
const totalForeignerAdult = foreignerAdult * chargeForeignerAdult;
const totalForeignerChild = foreignerChild * chargeForeignerChild;

const totalPayable = totalSLAdult + totalSLChild + totalForeignerAdult + totalForeignerChild;

const totalDiv = document.getElementById('total');
totalDiv.innerText = `Total Payable: ${totalPayable} USD`;

}





// Function to get the ticket data in the desired format
function getTicketData() {
const ticketCategories = ['foreignerAdult', 'foreignerChild', 'slAdult', 'slChild', 'infant'];
let ticketDataHTML = '';

ticketCategories.forEach(category => {
  const ticketCount = parseInt(document.getElementById(category).value);
  const ticketName = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  
  if (ticketCount > 0) {
    ticketDataHTML += `<div>${ticketCount} ${ticketName}</div>`;
  }
});

return ticketDataHTML;
}
const inputs = document.querySelectorAll('input, select');
inputs.forEach(input => input.addEventListener('input', () => {
updateSummaryTable();
saveSummaryToLocalStorage();
}));

const selectDuration = document.getElementById('duration');
selectDuration.addEventListener('change', () => {
updateSummaryTable();
saveSummaryToLocalStorage();
});

function toggleNav() {
  const navbarList = document.getElementById("navbarList");
  navbarList.classList.toggle("show");
}
