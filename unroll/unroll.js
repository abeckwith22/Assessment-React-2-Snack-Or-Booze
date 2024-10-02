function unroll(squareArray) {
    debugger;
    const memory = []; // empty array of arrays, saves position to memory [r, c]
    const unrolledArr = [];
    const outOfBounds = squareArray.length; // 3
    let r = 0; // rows position
    let c = 0; // columns position

    const length = squareArray.length**2; // every value in the array
    let direction = "right"; //start 'right'

    for(let i=0; i<length; i++){

        const no_memory = (r, c) => memory.every(pos => `${pos[0]}${pos[1]}` != `${r}${c}`); // Checks every position and matches it will pos of the string; returns true/false

        memory.push([r, c]); // saves current position to array
        unrolledArr.push(squareArray[r][c]); // push value to unrolled array (1D)

        // find direction, then increment/decrement (r,c);
        if(direction === "right"){ // if the direction is right and going right doesn't add to our array then change it 
            if(no_memory(r, c+1) && c+1 < outOfBounds){ // if incremented pos isn't in memory and isn't greater than or equal to outOfBounds, then increment away!
                c++;
            }
            if(!no_memory(r, c+1) || c+1 >= outOfBounds){ // check if we need to change direction and if new and incremented memory will overlap or go out of bounds; change direction if so.
                direction = "down";
            }
        } 
        else if(direction === "down"){ 
            if(no_memory(r+1, c) && r+1 < outOfBounds){ 
                r++;
            }
            if(!no_memory(r+1, c) || r+1 >= outOfBounds){ 
                direction = "left";
            }
        } 
        else if(direction === "left"){ 
            if(no_memory(r, c-1) && c-1 >= 0){ 
                c--;
            }
            if(!no_memory(r, c-1) || c-1 < 0){ 
                direction = "up";
            }
        } 
        else if(direction === "up"){ 
            if(no_memory(r-1, c) && r-1 >= 0){ 
                r--;
            }
            if(!no_memory(r-1, c) || r-1 < 0){ 
                direction = "right";
            }
        } 
    }

    return unrolledArr;
}

// const test_case = [
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i'],
// ]

// console.log(unroll(test_case));

module.exports = unroll;
