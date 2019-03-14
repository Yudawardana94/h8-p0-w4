function highestScore (students) {
    // Code disini
    if (students.length === 0){
        return {}
    }
    var kelas = {
    }
    //kelas = { fox: {}, wolv: {}, tiger: {}}
    
    for (var i = 0; i < students.length; i++){
        var classNow = students[i].class
        var name = students[i].name
        var score = students[i].score

        //console.log('i ke',i, 'student ', students[i], 'class ',classNow)
        if(kelas[classNow] === undefined) {
            //console.log('+++', students[i], kelas)
            kelas[classNow] = {name : name, score : score}
        } else if(students[i].score > kelas[classNow].score) {
            kelas[classNow] = {name : name, score : score}
        }
    }
    return kelas
    
}
  
  // TEST CASE
 /*
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
*/
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 50,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 81,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  // {
      //   foxes: { name: 'Alexander', score: 100 },
      //   wolves: { name: 'Alisa', score: 76 },
      //   tigers: { name: 'Viktor', score: 80 }
      // }
      
  
//   console.log(highestScore([])); //{}