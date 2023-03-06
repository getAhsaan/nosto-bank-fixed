// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = document.getElementById("deposit-field").value;
  if (newDepositAmount === '') {
    alert('Please input an amount')
    return;
  }
  document.getElementById("deposit-field").value = '';
  /* 
    1. get previous deposit total by id

    */
  const previousDepositTotal = document.getElementById("deposit-total").innerText;

  // calculate new deposit total
  const newDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
  console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  // set deposit total value
  document.getElementById("deposit-total").innerText = newDepositTotal;

  // get previous balance by using the function
  const previousBalanceTotal = document.getElementById("balance-total").innerText;
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});