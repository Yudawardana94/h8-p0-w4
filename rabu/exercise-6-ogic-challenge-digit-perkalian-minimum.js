

function digitPerkalianMinimum(angka) {

    var numLib = '1,2,3,4,5,6,7,8,9'
    var dvdAngka = []

    for (var i = 0; i < 10; i++){
        var temp = []

        if (angka % i === 0){
               temp.push(i),temp.push(angka/i)
        }
        if (temp.length !== 0){
        dvdAngka.push(temp)
        }
    }

    var max = [dvdAngka[dvdAngka.length-1][0],dvdAngka[dvdAngka.length-1][1]]
    var output = ''

    for (var i = 0; i <max.length; i++){
        output+= max[i]
    }
    
    console.log (dvdAngka[dvdAngka.length-1][0])
    console.log (dvdAngka)
    console.log (max)
    console.log (output)

    return output.length
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
//   console.log(digitPerkalianMinimum(90)); // 3
//   console.log(digitPerkalianMinimum(20)); // 2
//   console.log(digitPerkalianMinimum(179)); // 4
//   console.log(digitPerkalianMinimum(1)); // 2