
  function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let retVal = [];

    while (i < arr1.length && j < arr2.length) {
      console.log('i= ' + i);
      console.log('j= ' + j);
      console.log(retVal);
      if (arr1[i] < arr2[j]) {
        retVal.push(arr1[i]);
        i++;
      } else {
        retVal.push(arr2[j]);
        j++;
      }
    }
    
    if (i < arr1.length) {
      console.log('***i= ' + i);
      for (let index=i ; index < arr1.length ; index++) {
        retVal.push(arr1[index]);
      }
    }
    if (j < arr2.length) {
      console.log('***j= ' + j);
      for (let index=j ; index < arr2.length ; index++) {
        retVal.push(arr2[index]);
      }
    }
    return retVal;
  }
  
  function mergeSort(arr) {

  if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    console.log('left ' + left);
    console.log('right ' + right);

    const l = mergeSort(left);
    const r = mergeSort(right);
    return merge(l, r);
    
  }
  
  mergeSort([1,3,5,7,2,4,6,8]);