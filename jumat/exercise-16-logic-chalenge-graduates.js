function graduates (students) {
    // Code disini
    if (students.length === 0){
        return []
    }

    var kelas = {}

    for (var i = 0; i < students.length; i++){
        var sekor = students[i].score
        var kelasNow = students[i].class
        var nama = students[i].name
        
        if (kelas[kelasNow] === undefined){  
            kelas[kelasNow] = []
        }
        
        if (sekor > 75) {
            var obj = {
                name : nama,
                score : sekor
            }
            kelas[kelasNow].push(obj)
        }
        // console.log (sekor)
        // console.log (kelasNow)
        // temp.push(tempArr)
        // kelas[kelasNow] = tempArr
    }
    console.log (kelas)
}
  
//   console.log(graduates([
//     {
//       name: 'Dimitri',
//       score: 90,
//       class: 'foxes'
//     },
//     {
//       name: 'Alexei',
//       score: 85,
//       class: 'wolves'
//     },
//     {
//       name: 'Sergei',
//       score: 74,
//       class: 'foxes'
//     },
//     {
//       name: 'Anastasia',
//       score: 78,
//       class: 'wolves'
//     }
//   ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
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
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    },
    {
        name: 'aloys',
        score: 70,
        class: 'kucing'
    },
    {
        name : 'lovy',
        score: 80,
        class: 'kucing'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
//   console.log(graduates([])); //{}