

function fpb(angka1, angka2) {
  // you can only write your code here!
  var deviderAngka1 = []
  var deviderAngka2 = []

  for ( var i = 0; i <= angka1; i++){
    if (angka1 % i === 0) {
      deviderAngka1.push(i)
    }
  }

  for (var i = 0; i <= angka2; i++){
    if (angka2 % i === 0) {
      deviderAngka2.push(i)
    }
  }

  var sameDevider = []
  for (var i = 0; i < deviderAngka1.length; i++){
    for (var j = 0; j < deviderAngka2.length; j++){
      if (deviderAngka1[i] === deviderAngka2[j]){
        sameDevider.push(deviderAngka1[i])
      }
    }
  }

  var max = sameDevider[0]
  for (var i = 1; i < sameDevider.length; i++){
    if (sameDevider[i] > max){
      max =sameDevider[i]
    }
  }

console.log(deviderAngka1)
console.log(deviderAngka2)
console.log(sameDevider)
console.log(max)

return max
}

// TEST CASES
// console.log(fpb(12, 16)); // 4
// console.log(fpb(50, 40)); // 10
// console.log(fpb(22, 99)); // 11
// console.log(fpb(24, 36)); // 12
// console.log(fpb(17, 23)); // 1
console.log(fpb(16, 16))



