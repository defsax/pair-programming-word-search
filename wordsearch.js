const wordSearch = (letters, word) => {
  let visitedLetters = [];
  const HEIGHT = letters.length;
  const WIDTH = letters[0].length;
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  
  // for horizontal check
  for (let l of horizontalJoin) {
    if (l.includes(word))
      return true;
    else if (l.split('').reverse().join('').includes(word))
      return true;
  }
  
  //for vertical check
  let arr = [];
  //loop each column
  for (let column = 0; column < letters[0].length; column++) {
    arr.push([]);
    //loop each row
    for (let row = 0; row < letters.length; row++) {
      //create array with letters being added using row/column indices
      arr[column].push(letters[row][column]);
    }
    
    //check if array contains word after all rows have been added
    if (arr[column].join('').includes(word)) {
      return true;
    } else if (arr[column].reverse().join('').includes(word)) {
      return true;
    }
  }

  /*
       VVV DIAGONAL CHECK VVV
  */

  //recursive function that goes to edge of array and records letters
  const checkCells = function(cell, direction) {
    let x = cell.x;
    let y = cell.y;
    
    //check bounds of array
    if (x < 0 || y < 0)
      return false;
    //here too
    if (x > WIDTH || y > HEIGHT)
      return false;
    else {
      //if within bounds, push to array and call recursively updated to new direction
      visitedLetters.push(letters[x][y]);
      checkCells({x: x + direction.upDown, y: y + direction.leftRight}, direction);
    }
  };

  //direction list
  const DIRS = [
    {x:  1, y:  1},
    {x:  1, y: -1},
    {x: -1, y:  1},
    {x: -1, y: -1},
  ];
  
  //loop through direction list
  for (let i = 0; i < DIRS.length; i++) {
    //loop over each row for first column and last column
    for (let row = 0; row < HEIGHT; row++) {
      let column = WIDTH - 1;
      if (i < 2)
        column = 0;
      
      //start checkCells recursive function from loop indices.
      checkCells({x: row, y: column}, {leftRight: DIRS[i].x, upDown: DIRS[i].y});

      //check if checkCells' vector caught our word, if not reset and loop
      if (visitedLetters.join('').includes(word)) {
        //console.log(visitedLetters);
        return true;
      }
      visitedLetters = [];
    }
  }
  return false;
};
module.exports = wordSearch;