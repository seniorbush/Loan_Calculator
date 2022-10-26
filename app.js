//
document.querySelector("#loanForm").addEventListener("submit", (e) => {
  // INIT FORM VARIABLES
  let loanAmount = document.getElementById("loan-amount").value;
  const duration = document.getElementById("duration").value;
  const apr = document.getElementById("apr").value;
  //
  //LOAN CALCULATIONS
  let percentage = (loanAmount / 100) * parseInt(apr);
  let totalCost = parseInt(loanAmount) + percentage;
  let monthlyPayments = totalCost / parseInt(duration);
  let interest = (percentage / parseInt(duration)).toFixed(2);
  //
  document.getElementById("m-payments").innerHTML = `£${monthlyPayments.toFixed(
    2
  )}`;
  document.getElementById("tp").innerHTML = `£${loanAmount}`;
  document.getElementById("ti").innerHTML = `£${percentage}`;
  document.getElementById("tc").innerHTML = `£${totalCost}`;
  //
  //
  const tableBody = document.querySelector(".table-body");
  //
  tableBody.innerHTML = "";
  //
  for (let i = 1; i <= parseInt(duration); i++) {
    //CREATE NEW TABLE ROW
    const tableRow = document.createElement("tr");
    //CREATE ROWS & COLUMNS
    tableRow.innerHTML = `
    <td data-label="Month">${i}</td>
    <td data-label="Payment">£${monthlyPayments.toFixed(2)}</td>
    <td data-label="Prinicpal">£${(monthlyPayments - interest).toFixed(2)}</td>
    <td data-label="Interest">£${interest}</td>
    <td data-label="Total Interest">£${(interest * i).toFixed(2)}</td>
    <td data-label="Balance">£${(totalCost - monthlyPayments * i).toFixed(
      2
    )}</td>
  `;

    tableBody.appendChild(tableRow);
  }

  e.preventDefault();
});
//
//
//
//CLEAR FORM AND TABLE
document.getElementById("resetForm").addEventListener("click", (e) => {
  document.getElementById("loanForm").reset();
  document.querySelector(".table-body").innerHTML = "";
  document.getElementById("m-payments").innerHTML = "";
  document.getElementById("tp").innerHTML = "";
  document.getElementById("ti").innerHTML = "";
  document.getElementById("tc").innerHTML = "";
  e.preventDefault();
});
