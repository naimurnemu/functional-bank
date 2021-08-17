// deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
    // collect deposit
    const depositInput = document.getElementById("deposit-input");
    const addDepositText = depositInput.value;
    const addDepositAmount = parseFloat(addDepositText);
    depositInput.value = "";

    // previous deposit
    const currentDeposit = document.getElementById("deposit-total");
    const currentDepositText = currentDeposit.innerText;
    const currentDepositAmount = parseFloat(currentDepositText);

    // total new deposit
    const totalDeposit = currentDepositAmount + addDepositAmount;

    // adding new deposit
    currentDeposit.innerText = totalDeposit;

    // current Balance
    const currentBalance = document.getElementById("balance-total");
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);

    // new total balance
    const totalBalance = currentBalanceAmount + addDepositAmount;

    // add balance
    currentBalance.innerText = totalBalance;
});

// withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
    // collect deposit
    const withdrawInput = document.getElementById("withdraw-input");
    const addWithdrawText = withdrawInput.value;
    const addWithdrawAmount = parseFloat(addWithdrawText);
    withdrawInput.value = "";

    // previous deposit
    const currentWithdraw = document.getElementById("withdraw-total");
    const currentWithdrawText = currentWithdraw.innerText;
    const currentWithdrawAmount = parseFloat(currentWithdrawText);

    // total new deposit
    const totalWithdraw = currentWithdrawAmount + addWithdrawAmount;

    // adding new deposit
    currentWithdraw.innerText = totalWithdraw;

    // current Balance
    const previousBalance = document.getElementById("balance-total");
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    // new total balance
    const nowBalance = previousBalanceAmount - addWithdrawAmount;

    // add balance
    previousBalance.innerText = nowBalance;
});
