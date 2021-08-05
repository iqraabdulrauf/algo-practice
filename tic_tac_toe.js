// NxN matrix - Tic-Tac-Toe Win function

let board = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 1, 0],
];
let board2 = [
  [1, 1, 1, 0],
  [1, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
];

let board3 = [
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 1, 1],
];

let board4 = [
  [1, 1, 0],
  [0, 1, 1],
  [0, 0, 1],
];

let board5 = [
  [1, 1, 0],
  [0, 0, 1],
  [1, 0, 1],
];
const isWin = (board) => {
  // vertical check
  let k = 0;
  let found = false;
  while (k < board.length) {
    let element = board[0][k];
    for (let i = 1; i < board.length; i++) {
      found = false;
      if (element == board[i][k]) {
        element = board[i][k];
        found = true;
      } else {
        found = false;
        break;
      }
    }
    if (found) {
      console.log("vertical success");
      return true;
    }
    k++;
  }
  //horizontal check
  for (let i = 0; i < board.length; i++) {
    const boardElement = board[i];
    if (boardElement.every((val) => val === boardElement[0])) {
      console.log("horizontal success");
      return true;
    }
  }

  // first diagonal check
  let exists = false;
  for (let j = 1; j < board.length; j++) {
    exists = false;
    if (board[0][0] == board[j][j]) {
      exists = true;
    } else {
      exists = false;
      break;
    }
  }
  if (exists) {
    console.log("1st diagonal success");
    return true;
  }

  // second diagonal check
  let current_value = board.length - 2;
  let exist = false;
  for (let j = 1; j < board.length; j++) {
    exist = false;

    if (board[0][board.length - 1] == board[j][current_value]) {
      exist = true;
      current_value = current_value - 1;
    } else {
      exist = false;
      break;
    }
  }
  if (exist) {
    console.log("2nd diagonal success");
    return true;
  }
  return false;
};

if (isWin(board3)) {
  console.log("\n<====== You Won ============>  \n");
} else {
  console.log("\n<====== Draw ============>  \n");
}
