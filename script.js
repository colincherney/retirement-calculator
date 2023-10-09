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

startingAge = 25;
retirementAge = 30;
startingSalary = 50000;
annualSavingsPercent = 0.1;
annualRaisePercent = 0.01;
interestRate = 0.05;

yearsToInvest = retirementAge - startingAge;

console.log("Age  Salary  Savings  Interest  Retirement");

for (let year = startingAge; year <= retirementAge; year++) {
  currentSalary = currentSalary * annualRaisePercent + currentSalary;

  if (year == startingAge) {
    currentSalary = startingSalary;
  }

  currentSavings = currentSalary * annualSavingsPercent;

  totalSavings = currentSavings + totalSavings;

  totalRetirement = totalRetirement + currentSavings + interest;

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

  lifetimeSalary = currentSalary + lifetimeSalary;
}

console.log(yearsToInvest.toFixed(0), ": Years to invest");
console.log(retirement.toFixed(0), ": Retirement Fund");
console.log(lifetimeSalary.toFixed(0), ": Lifetime Salary");
console.log(totalSavings.toFixed(0), ": Total Saved");
console.log(totalInterest.toFixed(0), ": Earned Interest");
