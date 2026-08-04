const loginForm = document.getElementById('login-form');
const loginBox = document.querySelector('.login-box');
const dashboardBox = document.querySelector('.dashboard-box');

const incomeInputs = [
    document.getElementById('income1'),
    document.getElementById('income2'),
    document.getElementById('income3')
];
const expenseInputs = [
    document.getElementById('expense1'),
    document.getElementById('expense2'),
    document.getElementById('expense3')
];
const summaryIncome = document.getElementById('summary-income');
const summaryExpense = document.getElementById('summary-expense');
const summaryProfit = document.getElementById('summary-profit');
const incomeTotal = document.getElementById('income-total');
const expenseTotal = document.getElementById('expense-total');
const saveButton = document.getElementById('save-data');

function formatRupiah(number) {
    return 'Rp ' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function updateTotals() {
    const incomeSum = incomeInputs.reduce((sum, input) => sum + Number(input.value || 0), 0);
    const expenseSum = expenseInputs.reduce((sum, input) => sum + Number(input.value || 0), 0);
    const profit = incomeSum - expenseSum;

    incomeTotal.textContent = formatRupiah(incomeSum);
    expenseTotal.textContent = formatRupiah(expenseSum);
    summaryIncome.textContent = formatRupiah(incomeSum);
    summaryExpense.textContent = formatRupiah(expenseSum);
    summaryProfit.textContent = formatRupiah(profit >= 0 ? profit : 0);
}

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = loginForm.username.value.trim();
    const password = loginForm.password.value.trim();

    if (username === 'nazira' && password === 'darullibtida307') {
        loginBox.classList.add('hidden');
        dashboardBox.classList.remove('hidden');
        updateTotals();
    } else {
        alert('Username atau password salah.');
    }
});

saveButton.addEventListener('click', updateTotals);