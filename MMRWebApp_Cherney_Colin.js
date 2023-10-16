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

// Default Variable Settings
startingAge = 25;
retirementAge = 30;
startingSalary = 50000;
annualSavingsPercent = 0.1;
annualRaisePercent = 0.01;
interestRate = 0.05;

function clearData() {
  // Clear the table
  var table = document.getElementById("amortization-table"); // Get the table by its id
  var rows = table.rows; // Get the rows in the table
  var i = rows.length; // Get the number of rows

  for (var j = i - 1; j > 0; j--) {
    table.deleteRow(j); // Remove each row in reverse order
  }

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

  yearsToInvest = retirementAge - startingAge;

  console.log("Age  Salary  Savings  Interest  Retirement");

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

    console.log(
      year,
      currentSalary.toFixed(0),
      currentSavings.toFixed(0),
      interest.toFixed(0),
      retirement.toFixed(0)
    );

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
  event.preventDefault();
}
