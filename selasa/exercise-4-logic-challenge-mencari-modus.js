function cariModus(arr) {
    // you can only write your code here!
    var unixNum = []

    for (var i = 0; i < arr.length; i++){
       if (unixNum.length === 0){
           unixNum.push(arr[i])
       } else  {
           var count = 0
            for (j = 0; j < unixNum.length; j++){
                if (unixNum[j] === arr[i]){
                    count++
                }
            }
            if (count === 0){
                unixNum.push(arr[i])
            }
       }
    }

    var cont = []
    for (var i = 0; i < unixNum.length; i++){
        var temp = []

        for (var j = 0; j < arr.length; j++){
            if (unixNum[i] === arr[j]){
                temp.push(arr[j])
            }
        }
        cont.push(temp)
    }

    var max = []
    for( var i = 0; i < cont.length; i++ ){
        if (cont[i].length > max.length){
            max = cont[i]
        }
    }

    console.log(unixNum)
    console.log(unixNum.length)
    console.log(cont)
    console.log(max)
    if (max.length === 1 || unixNum.length === 1){
        return -1
    } else {
        return max[0]
    }
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1