//Prompt user to identify the unit they would like to calculate
let conversionType = prompt("This program is used to calculate distance, time, or speed. Please enter which unit you will like to calculate", "Distance, Time or Speed");

//Calculate Distance
if (conversionType === "Distance") {
try {
let time = Number(prompt("Please enter the time(s):"));
if (Number.isNaN(time)){
throw "Not a number.";
};
let speed = Number(prompt("Please enter the speed(m/s):"));
if (Number.isNaN(speed)){
throw "Not a number.";
};
let distance = (speed*time).toFixed(2);
console.log(`${speed}(m/s) * ${time}(s) = ${distance}(m)`);
}
catch(err) {
    console.error(err);
}
finally {
    conversionType = prompt("This program is used to calculate distance, time, or speed. Please enter which unit you will like to calculate", "Distance, Time or Speed");
};
}