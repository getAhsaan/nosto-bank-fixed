// withdraw button event handler
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // get withdraw amount by using document.getElementById("withdraw-field").value
  const newWithdrawAmount = document.getElementById("withdraw-field").value;
  if (newWithdrawAmount === '') {
    alert('Please input an amount');
    return;
  }
  document.getElementById("withdraw-field").value = '';
  // get previous withdraw amount by using document.getElementById("withdraw-total").innerText
  const previousWithdrawTotal = document.getElementById("withdraw-total").innerText;
  // calculate new withdraw Total and set the value
  const newWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
  // set new withdraw total by using document.getElementById("withdraw-total").innerText
  document.getElementById("withdraw-total").innerText = newWithdrawTotal;
  // get previous balance total by using document.getElementById('balance-total').innerText
  const previousBalanceTotal = document.getElementById('balance-total').innerText;
  // calculate new balance total
  const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
  // set balance total using document.getElementById('balance-total').innerText
  document.getElementById('balance-total').innerText = newBalanceTotal;
});