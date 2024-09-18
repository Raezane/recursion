function mergeSort(arr1, arr2) {
 
  let arr = []
 
  if (arr1.length == 2 && arr2.length == 1) {
    let sorted = [compare(arr1, arr2)]
    return sorted
  }
 
  if (arr1.length > 1) {
    let [firsthalf, secondhalf] = divider(arr1)
    arr = arr.concat(mergeSort(firsthalf, secondhalf))
  }
 
  if (arr2 != undefined && arr2.length > 1) {
    let [firsthalf, secondhalf] = divider(arr2)
    arr = arr.concat(mergeSort(firsthalf, secondhalf))
  }
 
  if (arr1 !== undefined && arr2 !== undefined) {
    let sorted = [compare(arr1, arr2, arr)]
    return sorted
  }

 
  //if none of the above statements apply, the merge sorting is considered completed
  return arr[0]
}

function divider(arr) {
  let halfway = arr.length/2
  if (halfway % 2 !== 0) halfway = Math.round(halfway)
 
  let firsthalf = arr.slice(0, halfway)
  let secondhalf = arr.slice(halfway, arr.length)
 
  return [firsthalf, secondhalf]
}

function compare(val1, val2, arr) {
 
  function singles(val1, val2) {
      if (val1[0] < val2[0]) return [val1[0], val2[0]]
      else return [val2[0], val1[0]]
  }
 
  let subarr = [];
 
  function longerArrays(arr1, arr2) {
   
    if (arr1.length == 0) {
      let sortedArr = subarr.concat(arr2)
      return sortedArr
     
    } else if (arr2.length == 0){
        let sortedArr = subarr.concat(arr1)
        return sortedArr
      }
   
    let arr1_val = arr1.shift();
    let arr2_val = arr2.shift();
   
    if (arr1_val < arr2_val) {
      subarr.push(arr1_val)
      arr2.unshift(arr2_val)
    }
    else {
      subarr.push(arr2_val)
      arr1.unshift(arr1_val)
    }
    return longerArrays(arr1, arr2)
  }
 
  if (val1.length == 1 && val2.length == 1) return singles(val1, val2)
 
  /*if comparable arrays are of different length, we need to first sort
  the first array, which is always the longer one with length of two*/
  else if (val1.length == 2 && val2.length == 1) {
    let sortedFirstArr = singles([val1[0]], [val1[1]])
    return longerArrays(sortedFirstArr, val2)
  }
  else return longerArrays(arr[0], arr[1])

}

console.log(mergeSort([3, 2, 110, 13, 45, 24]))