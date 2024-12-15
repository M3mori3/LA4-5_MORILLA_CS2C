// an array of the queueing costumers
let queue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to let user add a customer to the queue
function addCustomer() {
  // Ask the user to enter their name
  let name = prompt("Enter your name to join the queue:");

  // Validate input to ensure it's not empty
  if (name && name.trim() !== "") {
    queue.push(name.trim()); // if name is valid, name will be added to the end of the queue
    alert(name + " has entered the queue.");
    console.log("Updated Queue: ", queue); //logs updated queue
  } else {
    alert("Invalid name! Please try again."); //logs when user inputs invalid name
  }
}

// Function to service a customer based on the number entered by the user
function serviceCustomer() {
  // Ask the user for a number
  let number = prompt("Enter the customer number to service (1 to " + queue.length + "):");

  // Convert to integer to ensure input is a number
  number = parseInt(number); 
 
  // Validate the number
  if (number >= 1 && number <= queue.length) {
    let servicedCustomer = queue[number - 1]; // Gets customers name
    alert("Servicing customer: " + servicedCustomer); //display customer name
    queue.splice(number - 1, 1); // Remove customer from queue

    // Display the updated queue
    console.log("Updated Queue: ", queue);
  } else {
    alert("Invalid number! Please enter a valid customer number.");
  }
}

//calls functions
addCustomer(); // User enters their name
serviceCustomer(); // services a customer