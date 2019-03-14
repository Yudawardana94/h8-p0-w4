function angkaPrima(angka) {
    // you can only write your code here!
    var devider = [1,2,3,4,5,6,7,8,9,angka]

    if (angka < 10){
        //angka kurang dari 10
        var counter = 0
        for (var i = 0; i < devider.length-1; i++){
            if (angka % devider[i] === 0){
                counter++
            }
        }
            if (counter === 2){
                return true
            } else {
                return false
            }
    } else {
        //angka lebih dari 10
        var counter = 0
        for (var i = 0; i < devider.length; i++){
            if (angka % devider[i] === 0){
                counter++
            }
        }
            if (counter === 2){
                    return true
            } else {
                return false
            }
        }
}
  

//   TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
  console.log(angkaPrima(332));
  console.log(angkaPrima(2000));
  console.log(angkaPrima(210));
  console.log(angkaPrima(197));
  console.log(angkaPrima(97));