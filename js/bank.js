// collect value from input field
function getInputValue(inputId) {
    const collectInput = document.getElementById(inputId);
    const inputValueText = collectInput.value;
    const inputValueAmount = parseFloat(inputValueText);
    collectInput.value = "";
    return inputValueAmount;
}

// get and update total
function updateTotalValue(totalValueId, newAmount) {
    const currentValue = document.getElementById(totalValueId);
    const currentAmountText = currentValue.innerText;
    const currentAmount = parseFloat(currentAmountText);
    currentValue.innerText = currentAmount + newAmount;
}

// deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
    // collect deposit
    const depositAmount = getInputValue("deposit-input");

    // previous deposit
    updateTotalValue("deposit-total", depositAmount);

    // current Balance
    const currentBalance = document.getElementById("balance-total");
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);

    // new total balance
    const totalBalance = currentBalanceAmount + depositAmount;

    // add balance
    currentBalance.innerText = totalBalance;
});

// withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
    // collect deposit
    const withdrawAmount = getInputValue("withdraw-input");

    // previous deposit
    updateTotalValue("withdraw-total", withdrawAmount);

    // current Balance
    const previousBalance = document.getElementById("balance-total");
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    // new total balance
    const nowBalance = previousBalanceAmount - withdrawAmount;

    // add balance
    previousBalance.innerText = nowBalance;
});
