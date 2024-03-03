let initialAllowance = 0;
let remainingBalance = 0;
let isAuthenticated = false;

function login(event) {
    event.preventDefault();

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Basic username and password check (Replace with secure authentication in a real application)
    if (enteredUsername === 'user' && enteredPassword === 'password') {
        isAuthenticated = true;
        showExpenseTracker();
        setInitialAllowance(); // Call setInitialAllowance when the user is authenticated
    } else {
        alert('Invalid username or password. Please try again.');
    }

    // Clear the login form
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function showExpenseTracker() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('expenseTracker').style.display = 'block';
}

function setInitialAllowance() {
    const allowanceInput = prompt("Enter your initial allowance:");
    initialAllowance = parseFloat(allowanceInput) || 0;
    remainingBalance = initialAllowance;
    updateRemainingBalance();
}

function addTransaction(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid positive amount.");
        return;
    }

    if (amount > remainingBalance) {
        alert("You do not have sufficient funds for this transaction.");
        return;
    }

    // Prompt for the transaction date
    const transactionDate = prompt("Enter the transaction date (YYYY-MM-DD):");
    if (!transactionDate) {
        alert("Please enter a valid transaction date.");
        return;
    }

    const transactionList = document.getElementById('transactions');
    const totalAmountElement = document.getElementById('totalAmount');
    const remainingBalanceElement = document.getElementById('remainingBalanceAmount');

    // Create new transaction item
    const transactionItem = document.createElement('li');
    transactionItem.className = 'transaction';
    transactionItem.innerHTML = `<span>${description}</span><span>${amount.toFixed(2)}</span><span>${transactionDate}</span>`;

    // Append new transaction to the list
    transactionList.appendChild(transactionItem);

    // Update total expenses
    const totalAmount = parseFloat(totalAmountElement.textContent);
    totalAmountElement.textContent = (totalAmount + amount).toFixed(2);

    // Update remaining balance
    remainingBalance -= amount;
    updateRemainingBalance();

    // Clear the form fields
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}


function updateRemainingBalance() {
    const remainingBalanceElement = document.getElementById('remainingBalanceAmount');
    remainingBalanceElement.textContent = remainingBalance.toFixed(2);
}
