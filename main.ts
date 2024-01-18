// 2d array representing binary clock
let timeGrid = [
    [0, 0, 0, 0], //8
    [0, 0, 0, 0], //4
    [0, 0, 0, 0], //2
    [0, 0, 0, 0] //1
];

let seconds_passed = 0;
let digits = String(seconds_passed).split('').map(Number);
loops.everyInterval(1000, function() {
    seconds_passed++;
    // figure out binary value for each digit
    // 1st digit
     

})

// loop through each digit of the array
// calculate what numbers add to given number
// column  major order to set values for each digit
// start from the right and go left