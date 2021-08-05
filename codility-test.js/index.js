// const fibonacci = require('./fibonacci');
// // const linear_search = require('./linear_search');
// // const palindrome = require('./palindrome');
// // const tic_tac_toe = require('./tic_tac_toe');

// console.log(fibonacci(5));

const my = () => {
  const domTables = document.getElementsByTagName("table");
  let max = 0;

  if (!domTables.length) return max;

  for (const table of domTables) {
    let cells = 0;
    for (const row of table.rows) {
      cells += row.cells.length;
    }
    if (cells > max) max = cells;
  }

  return max;
};

my();
console.log(my());
