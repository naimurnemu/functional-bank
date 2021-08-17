// collect value from input field
function getInputValue(inputId) {
    const collectInput = document.getElementById(inputId);
    const inputValueText = collectInput.value;
    const inputValueAmount = parseFloat(inputValueText);
    collectInput.value = "";
    return inputValueAmount;
}

// get and update total
function updateTotalValue(totalValueId, inputAmount) {
    if (inputAmount > 0) {
        const currentValue = document.getElementById(totalValueId);
        const currentAmountText = currentValue.innerText;
        const currentAmount = parseFloat(currentAmountText);
        currentValue.innerText = currentAmount + inputAmount;
    }
}

// update balance
function updateBalance(inputAmount, isAdd) {
    if (inputAmount > 0) {
        const totalBalance = document.getElementById("balance-total");
        const balanceText = totalBalance.innerText;
        const balanceAmount = parseFloat(balanceText);
        if (isAdd == true) {
            totalBalance.innerText = balanceAmount + inputAmount;
        } else {
            totalBalance.innerText = balanceAmount - inputAmount;
        }
    }
}

// deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
    // collect deposit
    const depositAmount = getInputValue("deposit-input");

    // update deposit
    updateTotalValue("deposit-total", depositAmount);

    // update Balance
    updateBalance(depositAmount, true);
});

// withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
    // collect withdraw
    const withdrawAmount = getInputValue("withdraw-input");

    // update withdraw
    updateTotalValue("withdraw-total", withdrawAmount);

    // update Balance
    updateBalance(withdrawAmount, false);
});
