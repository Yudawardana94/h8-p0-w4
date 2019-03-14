function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  if (arrPenumpang.length === 0) {
    return []
  }
  var customers = []

  for ( var i = 0; i < arrPenumpang.length; i++){
    var temp = {}
    var route = 0
    var start = 0
    var end = 0

    for (var j = 0; j < rute.length; j++){
      // console.log (arrPenumpang[i][j])  
      if (arrPenumpang[i][1] === rute[j]){
        start += j
      } else if ( arrPenumpang[i][2] === rute[j]){
        end += j
      }

      // if (route > 0){
      //   if (arrPenumpang[i][1] !== rute[j]){
      //     route++
      //   }
      // }
      // if (arrPenumpang[i][2] === rute[j]){
      //   break
      // }
    }
    route = Math.abs(end - start)
    var price = route*2000

    // console.log (price)
    // console.log (route)
    // console.log (arrPenumpang[i])
    // console.log (start)
    // console.log (end)
    // console.log ('')

    temp.penumpang = arrPenumpang[i][0]
    temp.naikDari = arrPenumpang[i][1]
    temp.tujuan = arrPenumpang[i][2]
    temp.bayar = price

    customers.push(temp)
    // console.log (temp)
  }
  // console.log (customers)
  return customers
  
  // console.log (arrPenumpang)
  // console.log (arrPenumpang[0])
  // console.log (arrPenumpang[0][1])
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));

// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([])); //[]