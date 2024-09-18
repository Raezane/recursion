function fibs(num) {
  let fibarr = [];
  for (let i = 0; i <= num; i++) {
    if (i == 0) fibarr.push(0)
    else if (i == 1) fibarr.push(1)
    else fibarr.push(fibarr[i - 1] + fibarr[i -2])
  }
  return fibarr
}

function fibsRec(num) {

  let arr = [];

  function fibbo(num) {
    console.log("This was printed recursively");
    if (num < 2) return arr[num] = num
    else return arr[num] = (fibbo(num-1) + fibbo(num-2))
  }
  fibbo(num)
  return arr
}

console.log(fibs(8))
console.log(fibsRec(8))
