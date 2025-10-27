// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
console.log("Triangle Pattern using # too display triangle that is 4 long at its peak");

let rows = 4;
let output = "";


//splitting the triangle into an ascending and descending part

//ascending
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        output = output + "#";
    }
    console.log(output);
}

//descending
for (let i = rows - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        output = output + "#";
    }
    console.log(output);
}