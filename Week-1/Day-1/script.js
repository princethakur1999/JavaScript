/*
Cconsole

Built-in object provided by the browser's developer tools or the JavaScript runtime environment. 
It offers various methods for developers to interact with the console.

*/

console.log("It is used to log messages and data to the console for debugging purposes.");

console.info("It is used to log informational messages to the console.");

console.error("It is used to log error messages to the console.");

console.warn("It is used to log warning messages to the console.");

console.debug("It is used to log debug messages to the console.");




//alert()
//Used to displays a dialog box with a message and an "OK" button. 
//It is used to display information or notify the user about something important.

alert("Welcome");




//prompt()
//Used to take user input in the form of text. 
//It takes two arguments: a message displayed in the dialog box and an optional default value.
//It returns the input if the user clicks "OK" or null if the user cancels the prompt.

let name = prompt("Enter your name", "Prince Thakur");

console.log(name);




//confirm()
//Used to display a dialog box with two buttons: "OK" and "Cancel".
//It returns true if the user clicks "OK" and returns false if the user clicks "Cancel".


let userConfirmed = confirm("Do you want to proceed with the operation?");

if (userConfirmed) {

    alert("Operation successful.");

} else {

    alert("Operation canceled.");
}