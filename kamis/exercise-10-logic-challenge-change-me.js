function changeMe(arr) {
    // you can only write your code here!
    // console.log(arr.length)

    if (arr.length === 0 ){
       console.log("")
    } else {
        for ( var i = 0; i < arr.length; i++){
            // console.log(arr[i])
            // for ( var j = 0;  j < arr[i].length; j++) {
            //     // console.log (arr[i][j])
            // }
            var temp = {}

            console.log(i+1+'. '+arr[i][0]+' '+arr[i][1])

            temp.firstName = arr[i][0]
            temp.lastName = arr[i][1]
            temp.gender = arr[i][2]

            if (arr[i][3] !== undefined ){
                if (2019-arr[i][3] < 0){
                    temp.age = 'Invalid Birth Year'
                }else {
                    temp.age = 2019-arr[i][3]
                }
            } else {
                temp.age = 'Invalid Birth Year'
            }
            console.log (temp)
            // console.log(arr[i][3])
        }
    }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""