function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    // var uppCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // var lowCase = 'abcdefghijklmnopqrstuvwxyz'
    var exch = ''

    // for (var i = 0; i < kalimat.length; i++){
    //     for (var j = 0; j < uppCase.length; j++){
    //         if (kalimat[i] === uppCase[j]){
    //             exch+=lowCase[j]
    //         } else if (kalimat [i] === lowCase[j]){
    //             exch+=uppCase[j]
    //         } else {}
    //     }
    // }
    // console.log(exch)

    for( var i = 0; i < kalimat.length; i++){
        if (kalimat[i].toUpperCase() !== kalimat[i]){
            exch+=kalimat[i].toUpperCase()
        } else {
            exch+=kalimat[i].toLowerCase()
        }
    }
    return exch
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
