//fibs function takes a num
//then it returns that many numbers from fibonacci sequence
// fib(0)=0 and fib(1)=1,
// after 1 the fib is sum of its last 2 sequences for eg
//fib(2)=fib(1)+fib(0)
//which is fib(n) = fib(n-1)+fib(n-2);

//so the algorithm for fibRec(num) will be
// If (num==0)
// return 0
// else if(num==1)
// return 1
// return fib(n-1)+fib(n-2);

//algo for fib(num) iterative
//  If (num==0)
// return [0]
// else if(num==1)
// return [0,1]
// let arr=[0,1];
// For (let i = 2; i<num;i++)
// arr[i]= arr[i-1]+arr[i-2];

// return arr
function fibs(num) {
  num = +num;
  if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else if (num < 1) {
    return [];
  }
  let arr = [0, 1];
  for (let i = 3; i <= num; i++) {
    arr[i - 1] = arr[i - 2] + arr[i - 3];
  }
  return arr;
}
console.log(fibs(8));

function fibsRec(num) {
  num = +num;
  if (num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else if (num < 1) {
    return;
  }
  return fibsRec(num - 1) + fibsRec(num - 2);

  // return 1
  // return fib(n-1)+fib(n-2);
}
//we want an array of fibonacci sequence till
function getFibArr(num, arr = []) {
  if (num === 0) {
    return;
  }
  arr.unshift(fibsRec(num--));
  getFibArr(num, arr);
  return arr;

  //   return arr.concat();
  //   for (let i = 1; i <= num; i++) {
  //     arr.push(fibsRec(i));
  //   }
  //   return arr;
}
console.log(getFibArr(10));
