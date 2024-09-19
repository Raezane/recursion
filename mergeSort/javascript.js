function mergeSort(arr) {
  let subarr = []
 
  if (arr.length == 1) return arr
 
  let halves = divider(arr)
  let sorted = sort(mergeSort(halves[0]), mergeSort(halves[1]))
  return sorted
}

function divider(arr) {
  let halfway = arr.length/2
  if (halfway % 2 !== 0) halfway = Math.round(halfway)
 
  let firsthalf = arr.slice(0, halfway)
  let secondhalf = arr.slice(halfway, arr.length)
 
  return [firsthalf, secondhalf]
}

function sort(leftarr, rightarr) {
  let arr = []
  while (leftarr.length > 0 && rightarr.length > 0) {
   
    if (leftarr[0] < rightarr[0]) {
      arr.push(leftarr[0])
      leftarr = leftarr.slice(1)
    }
   
    else {
      arr.push(rightarr[0])
      rightarr = rightarr.slice(1)
    }

  }
 
  arr = arr.concat(leftarr, rightarr)
 
  return arr
}

console.log(mergeSort([3, 110, 2, 1, 99, 56, 82, 66]))