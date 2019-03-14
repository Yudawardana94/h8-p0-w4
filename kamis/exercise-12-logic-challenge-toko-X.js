function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                      ['Sweater Uniklooh', 175000, 1]
                   ];
  // you can only write your code here!
  if (shoppers.length === 0){
    return []
  } else {
    var output = []
    
    for (var i = 0; i < listBarang.length; i++){
      var product = listBarang[i][0]
      var buyers = []
      var leftOver = listBarang[i][2]
      
      for (var j = 0; j < shoppers.length; j++){
        
        if (shoppers[j].product === listBarang[i][0] && leftOver >= shoppers[j].amount ){
          buyers.push(shoppers[j].name);
          leftOver-=shoppers[j].amount
          }
        }
        
      var totalProfit = listBarang[i][1]*(listBarang[i][2]-leftOver)

      var temp = {}

      temp.product = product

      if (leftOver >= 0){
        temp.buyers = buyers
        temp.leftOver = leftOver
        temp.totalProfit = totalProfit
      } else {
        temp.buyers = []
        temp.leftOver = listBarang[i][2]
        temp.totalProfit = 0
      }

      output.push(temp)
        // console.log (product)
        // console.log (buyers)
        // console.log (leftOver)
        // console.log (totalProfit)
        // console.log (listBarang[i][1])
        // console.log ((listBarang[i][2])-leftOver)
    }
    // console.log (shoppers.length)
    // console.log (listBarang.length)
    return output
  }
}
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 12}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]

  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]