// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
let size = 8;
let row = "";

console.log("8x8 Grid Pattern using # and space to display chessboard");

for (let i = 1; i < size; i++) {
    line = "";

    for (let j = 1; j <= size; j++) {
        if ((i + j) % 2 == 0) {
            line = line + "#";
        } else {
            line = line + " ";
        }
    }
    console.log(line);
}
