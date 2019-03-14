function ubahHuruf(kata) {
    // you can only write your code here!
    var lib = 'abcdefghijklmnopqrstuvwxyz'
    var output= ''

    for (var i = 0; i < kata.length; i++){
        for (var j = 0; j < lib.length; j++ ){
            if ( kata[i] === lib[j]){
                if (kata[i] === 'z'){
                    output += 'a'
                } else {
                    output+= lib[j+1]
                }
            }
        }
    }
    return output
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
  console.log(ubahHuruf('zabuza')); // tfnbohbu