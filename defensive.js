// Calculate distance, time, or speed

// Define the formulas for calculating distance, time, and speed
function calcDistance(time, speed) {
    return speed * time;
  }
  
  function calcTime(distance, speed) {
    return distance / speed;
  }
  
  function calcSpeed(distance, time) {
    return distance / time;
  }
  
  // Ask the user to choose which quantity to calculate
  const choice = prompt("Would you like to calculate distance, time, or speed?");
  
  try {
    // Use defensive programming to handle invalid input
    if (choice === "distance") {
      // Prompt the user for time and speed
      const time = parseFloat(prompt("Enter time (hours):"));
      const speed = parseFloat(prompt("Enter speed (miles per hour):"));
  
      // Calculate the distance
      const distance = calcDistance(time, speed);
      console.log(`Distance: ${distance} miles`);
    } else if (choice === "time") {
      // Prompt the user for distance and speed
      const distance = parseFloat(prompt("Enter distance (miles):"));
      const speed = parseFloat(prompt("Enter speed (miles per hour):"));
  
      // Calculate the time
      const time = calcTime(distance, speed);
      console.log(`Time: ${time} hours`);
    } else if (choice === "speed") {
      // Prompt the user for distance and time
      const distance = parseFloat(prompt("Enter distance (miles):"));
      const time = parseFloat(prompt("Enter time (hours):"));
  
      // Calculate the speed
      const speed = calcSpeed(distance, time);
      console.log(`Speed: ${speed} miles per hour`);
    } else {
      // Throw an error for invalid input
      throw new Error("Invalid input. Please enter 'distance', 'time', or 'speed'.");
    }
  } catch (error) {
    // Handle the error
    console.error(error.message);
  } finally {
    // This block of code will always be executed, regardless of whether an error occurs or not
    console.log("Calculation complete.");
  }