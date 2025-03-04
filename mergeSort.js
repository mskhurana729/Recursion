/*
algorithm
if arr.length is <=1 return
get mid of the arr
call mergeSort with start to mid
call mergeSort with mid+1 to end
merge from start to mid to end
*/

const MergeSort = (arr) => {
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, mid));
    for (let i = 0; i < leftArr.length; i++) {
      arr[i] = leftArr[i];
    }
    let rightArr = mergeSort(arr.slice(mid, arr.length));
    let k = mid;
    for (let j = 0; j < rightArr.length; j++) {
      arr[k++] = rightArr[j];
    }
    let newArr = merge(arr, mid);

    return newArr;
  }
  /*
algorithm
it will take an array and join them in a sorted way, sorted way means it will make a new array and copy these array elements in an ascending order into the new array
Initialize a new array sortedArr
initialize j to 0 and k to mid
run a for loop till arr.length on condition i < arr.length
if arr[j]<=arr[k]
  sortedArr[i++]=arr[j++];
Else
  sortedArr[i++]=arr[k++];

if(j<mid-1)
  for(;j<mid;j++)
    sortedArr[i++]=arr[j]
if(k<arr.length-1)
  for(;k<mid;k++)
    sortedArr[i++]=arr[k]

  */
  function merge(arr, mid) {
    let newArr = [],
      arr1 = arr.slice(0, mid),
      arr2 = arr.slice(mid, arr.length),
      i = 0,
      j = 0,
      k = 0;
    for (i; arr1[j] && arr2[k]; ) {
      if (arr1[j] <= arr2[k]) {
        newArr[i++] = arr1[j++];
      } else {
        newArr[i++] = arr2[k++];
      }
    }

    for (; j < arr1.length; j++) {
      newArr[i++] = arr1[j];
    }

    for (; k < arr2.length; k++) {
      newArr[i++] = arr2[k];
    }
    return newArr;
  }
  mergeSort(arr);
  return arr;
};
// const merge = MergeSort();
console.log(MergeSort([1, 3, 2, 4, 6, 5, 13, 55, 23, 43, 66, 22]));
