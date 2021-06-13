// const array = [];

// for (let i = 0; i < 10; i++) {
//   array.push(Math.floor(Math.random() * 100));
// }

// console.log(array);

const array = [29, 44, 34, 3, 61, 26, 52];

const bubbleSort = (arr) => {
  let didSwap = null;
  for (let i = 0; i < arr.length; i++) {
    didSwap = false;

    console.log('----------------------------------------');
    console.log(`\nStarting \x1b[36m${i + 1}\x1b[0m try:`);

    // Iterate again and again over the array
    for (let j = 0; j < arr.length - i - 1; j++) {
      // minus the current cycle num, 'cause the biggest num was moved at the end of the array already, minus one the last index num

      // Set values
      let swappedInThisIteration = false;
      const currentValue = arr[j];
      const nextValue = arr[j + 1];

      // Color the numbers about to be swapped in the array
      let coloredArr = arr.map((num, index) => {
        if ((index === j || index === j + 1) && arr[j + 1]) {
          return `\x1b[33m${num}\x1b[0m`;
        }
        return `${num}`;
      });

      // Show the iteration number and the operating array before transformations
      console.log(`\n\x1b[31m${j + 1}\x1b[0m iteration`);
      console.log('Swapping: ' + coloredArr.join(' '));

      // nextValue may be null when i is the last index
      // swap values
      if (currentValue > nextValue) {
        arr[j] = nextValue;
        arr[j + 1] = currentValue;
        didSwap = true;
        swappedInThisIteration = true;
      }

      // Color the swapped numbers in modified array
      coloredArr = arr.map((num, index) => {
        if ((index === j || index === j + 1) && arr[j + 1]) {
          return `\x1b[33m${num}\x1b[0m`;
        }
        return `${num}`;
      });

      // Set the operation result action
      const didSwapText = swappedInThisIteration ? 'Did swap' : `Didn't swap`;

      // Show the operation result action and array
      console.log('\x1b[32m%s\x1b[0m', didSwapText);
      console.log(`Result: ${coloredArr.join(' ')}`);
    }

    // Show the result of full iteration cycle
    console.log(
      `\nAfter \x1b[36m${i + 1}\x1b[0m try: \x1b[1m${arr.join(' ')} \x1b[0m\n`
    );
    if (!didSwap) break;
  }
};

console.log(`\n\x1b[1mOriginal: ${array.join(' ')}\x1b[0m \n`);
bubbleSort(array);
console.log('-----------------------------------------');
console.log(`\x1b[1mSorted: ${array.join(' ')}\x1b[0m \n`);

// Clean version
const bubbleSortClean = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let didSwap = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      const currentValue = arr[j];
      const nextValue = arr[j + 1];

      if (currentValue > nextValue) {
        arr[j] = nextValue;
        arr[j + 1] = currentValue;
        didSwap = true;
      }
    }
    if (!didSwap) break;
  }
};
