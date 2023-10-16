// Variables
let yearsToInvest = 0,
  currentSalary = 0,
  currentSavings = 0,
  interest = 0,
  retirement = 0,
  lifetimeSalary = 0,
  retirementAge = 0,
  startingAge = 0,
  annualRaisePercent = 0,
  annualSavingsPercent = 0,
  interestRate = 0,
  totalRetirement = 0,
  totalInterest = 0,
  totalSavings = 0;

function resetInput() {
  // Reset input fields
  document.getElementById("startingAge").value = "";
  document.getElementById("retirementAge").value = "";
  document.getElementById("startingSalary").value = "";
  document.getElementById("annualSavings").value = "";
  document.getElementById("annualRaise").value = "";
  document.getElementById("interestRate").value = "";
}

function clearData() {
  // Clear the table
  var table = document.getElementById("amortization-table"); // Get the table by its id
  var rows = table.rows; // Get the rows in the table
  var i = rows.length; // Get the number of rows

  for (var j = i - 1; j > 0; j--) {
    table.deleteRow(j); // Remove each row in reverse order
  }

  // Clear the totals
  let summary = document.getElementById("summary-table");
  // Resets years to invest
  summary.rows[0].cells[0].innerHTML = 0;
  // Resets retirement fund
  summary.rows[1].cells[0].innerHTML = 0;
  // Resets lifetime salary
  summary.rows[2].cells[0].innerHTML = 0;
  // Resets total savings
  summary.rows[3].cells[0].innerHTML = 0;
  // Resets total interest
  summary.rows[4].cells[0].innerHTML = 0;

  event.preventDefault();
}

// Function for "Make Me Rich!" Button
function calculateRetirement() {
  // Clears the previous data
  clearData();

  // Reset the variables
  currentSalary = 0;
  currentSavings = 0;
  interest = 0;
  retirement = 0;
  lifetimeSalary = 0;
  totalRetirement = 0;
  totalInterest = 0;
  totalSavings = 0;

  // Get Values from HTML Input Fields
  startingAge = parseInt(document.getElementById("startingAge").value);
  retirementAge = parseInt(document.getElementById("retirementAge").value);
  startingSalary = parseFloat(document.getElementById("startingSalary").value);
  annualSavingsPercent = parseFloat(
    document.getElementById("annualSavings").value
  );
  annualRaisePercent = parseFloat(document.getElementById("annualRaise").value);
  interestRate = parseFloat(document.getElementById("interestRate").value);
  let amortizationTable = document.getElementById("amortization-table");
  console.log(startingAge);

  annualSavingsPercent = annualSavingsPercent / 100;
  annualRaisePercent = annualRaisePercent / 100;
  interestRate = interestRate / 100;

  // Validate Input

  // Check for valid starting age
  if (isNaN(startingAge) || startingAge <= 0) {
    alert("Starting age must be greater than 0");
  }

  // Check for valid retirement age
  if (
    isNaN(retirementAge) ||
    retirementAge <= 0 ||
    retirementAge <= startingAge
  ) {
    alert(
      "Retirement age must be greater than 0 and greater than starting age"
    );
  }

  // Check for valid starting salary
  if (isNaN(startingSalary) || startingSalary <= 0) {
    alert("Starting salary must be greater than 0");
  }

  // Check for valid annual savings
  if (
    isNaN(annualSavingsPercent) ||
    annualSavingsPercent < 0 ||
    annualSavingsPercent > 1
  ) {
    alert("Annual savings must be between 0 and 100");
  }

  // Check for valid annual raise
  if (
    isNaN(annualRaisePercent) ||
    annualRaisePercent < 0 ||
    annualRaisePercent > 0.5
  ) {
    alert("Annual raise must be between 0 and 50");
  }

  // Check for valid interest rate
  if (
    isNaN(interestRate) ||
    interestRate < 0 ||
    interestRate > 0.5 ||
    interestRate == ""
  ) {
    alert("Interest rate must be between 0 and 50");
  } else {
    yearsToInvest = retirementAge - startingAge;

    for (let year = startingAge; year <= retirementAge; year++) {
      currentSalary = currentSalary * annualRaisePercent + currentSalary;

      if (year == startingAge) {
        currentSalary = startingSalary;
      }

      // Calculate Current Savings for the Year
      currentSavings = currentSalary * annualSavingsPercent;

      // Calculate Total Savings for the Lifetime
      totalSavings = currentSavings + totalSavings;

      // Calculate the Total Retirement for the Year plus Previous Years
      totalRetirement = totalRetirement + currentSavings + interest;

      // Calculate the Interest for the Year
      interest = totalRetirement * interestRate;
      totalInterest = totalInterest + interest;

      retirement = totalSavings + totalInterest;

      var row = amortizationTable.insertRow(amortizationTable.rows.length);
      var cell1 = row.insertCell(0); // Add the first cell
      var cell2 = row.insertCell(1); // Add the second cell
      var cell3 = row.insertCell(2); // Add the third cell
      var cell4 = row.insertCell(3); // Add the fourth cell
      var cell5 = row.insertCell(4); // Add the fifth cell
      cell1.innerHTML = year; // Set the age
      cell2.innerHTML = formatNumberWithCommas(currentSalary); // Set the current salary
      cell3.innerHTML = formatNumberWithCommas(currentSavings); // Set the current savings
      cell4.innerHTML = formatNumberWithCommas(interest); // Set the interest
      cell5.innerHTML = formatNumberWithCommas(retirement); // Set the retirement

      lifetimeSalary = currentSalary + lifetimeSalary;
    }

    // Set the summary table
    let summary = document.getElementById("summary-table");
    // Sets years to invest
    summary.rows[0].cells[0].innerHTML = yearsToInvest;
    // Sets retirement fund
    summary.rows[1].cells[0].innerHTML = formatNumberWithCommas(retirement);
    // Sets lifetime salary
    summary.rows[2].cells[0].innerHTML = formatNumberWithCommas(lifetimeSalary);
    // Sets total savings
    summary.rows[3].cells[0].innerHTML = formatNumberWithCommas(totalSavings);
    // Sets total interest
    summary.rows[4].cells[0].innerHTML = formatNumberWithCommas(totalInterest);
  }
  event.preventDefault();
}
