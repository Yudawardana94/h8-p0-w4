function checkAB(num) {
    // you can only write your code here!
    var count = []
    var a = []
    var b = []

    for (var i = 0; i < num.length; i++){
        if ( num[i] === 'a'){
            a.push(i)
        } else if  (num[i] === 'b'){
            b.push(i)
        } 
    }

    for (var i = 0; i < a.length; i++){
        for (var j = 0; j < b.length; j++){
            count.push(a[i]-b[j])
        }
    }

    var output = []

    for ( var i = 0; i < count.length; i++){
        var temp =[]
        temp += Math.abs(count[i])
        output.push(Number(temp))
    }
    var flag = false 

    for (var i = 0; i < output.length ; i++){
        if( output[i] === 4){
            flag = true
        }
    }

    if (flag === true) {
        return true
    } else {
        return false
    }
    console.log (a)
    console.log (b)
    console.log (count)
    console.log(output)
    console.log(output.length)
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false

  /*
  1. hitung jarak huruf 'a' ke 'b' dari inputnya
    1.1 buat var ABchekerdengan ini array data a dan b
    1.2 buat var counter
    1.3 buat variabel penampunCounter dengan isinya array kosong
    1.4 loop num dan ABcheker untuk menghuitung jarak a dan b
    1.5 
  2. jika jarak a ke b === 4 result true jika tidak maka false

  //alternatif
  1. cari dulu berapa banyak huruf a dan b dalam input  
  2.  
  */
