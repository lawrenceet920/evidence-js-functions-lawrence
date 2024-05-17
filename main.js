// Mike Jenkins
// 05 OCT 20XX
// EVIDENCE: JS Functions

// Starter Function 1
    // function metersToMiles() {
    //   // Prompt user for a distance in meters
    //   const distanceInMeters = parseFloat(prompt("Enter a distance in meters:"));

    //   // Check if user entered a number
      // if (isNaN(distanceInMeters)) {
      //   alert("Please enter a valid number!");
      //   return;
      // }

    //   // Conversion factor: 1 meter = 0.000621371 miles (approximately)
    //   const conversionFactor = 0.000621371;

    //   // Calculate distance in miles
    //   const distanceInMiles = distanceInMeters * conversionFactor;

    //   // Display the results using a template string
    //   console.log(`${distanceInMeters} meters is equal to approximately ${distanceInMiles.toFixed(2)} miles.`);
    // }

    // // Call the function that converts meters to miles
    // metersToMiles();
const metersThenMiles = (startingMeasure) => startingMeasure * 0.000621371;

const meter = parseFloat(prompt("Enter a distance in meters:"))
if (isNaN(meter)) {
  alert("Please enter a valid number!");
  console.error ("Enter a NUMBER please")
} else {
  console.log(metersThenMiles(meter));
  document.getElementById('output-dist').innerHTML = `${meter}m is approximently ${metersThenMiles(meter)}mi`
}



// Starter Function 2
// Define the current exchange rate (Euros to dollars)
// const exchangeRate = 1.08; 

// function euroToUSD(euroAmount) {
//   """Converts Euros to U.S. dollars.

//   Arguments:
//       euroAmount: The number of Euros to be converted to dollars

//   Returns:
//       The equivalent number of U.S. dollars.
//   """

//   // Input validation 
//   if (euroAmount < 0) {
//     console.error("Error: Please enter a number of Euros that is greater than zero!");
//     return null;
//   }

//   const dollarAmount = euroAmount * exchangeRate;
//   return dollarAmount.toFixed(2); // Round output to 2 decimal places
// }

// // Example usage (assuming the exchange rate listed at the top of this script)
// const euroValue = 100;
// const numUSDollars = euroToUSD(euroValue);

// console.log(`${euroValue} Euros is equivalent to ${numUSDollars} U.S. dollars.`);

const euroThenUSD = (euro) => euro * 1.08;

const euroCount = prompt("How many Euros? :   ");
if (euroCount < 0) {
  console.error("Error: Please enter a number of Euros that is greater than zero")
  alert("Please enter a positive number!");
} else {
  console.log(euroThenUSD(euroCount));
  document.getElementById('output-euro').innerHTML = `The value of &euro;${euroCount} is $${euroThenUSD(euroCount)}`;
}