
function urutkanAbjad(str) {
    // you can only write your code here!
    var letterLib = 'abcdefghijklmnopqrstuvwxyz'
    var cont = []

    for (var i = 0; i < letterLib.length; i++){
      for (var j = 0; j < str.length ; j++){
        if (letterLib[i] === str[j]){
          cont.push(str[j])
        }
      }  
      // console.log (i)
    }
    var result = ''

    for (var i = 0; i < cont.length; i++){
      result+= cont[i]
    }
    // console.log(letterLib.length)
    // console.log(cont)
    return result
}
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'