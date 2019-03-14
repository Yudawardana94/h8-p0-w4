function cariMedian(arr) {
    // you can only write your code here!
    if (arr.length % 2 === 0){
        //jika jumlah data genap disini
        // console.log('disini genap')
        var medianTry = Math.floor(arr.length/2)
        var median = (arr[medianTry-1]+arr[medianTry])/2
        // console.log(arr[medianTry])
        // console.log(arr[medianTry+1])
        // console.log(median)
        return median
    } else {
        //jika jumlah data ganjil disini
        // console.log (('disini ganjil'))
        var medianTry = Math.floor(arr.length/2)
        var median = arr[medianTry]
        // console.log(median)
        // console.log(medianTry) 
        return median
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5