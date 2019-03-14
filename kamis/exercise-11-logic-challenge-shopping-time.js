function shoppingTime(memberId, money) {

    if (memberId === undefined || money === undefined || memberId.length === 0){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'

    } else if (money < 50000){
        return 'Mohon maaf, uang tidak cukup'

    } else {
        var output = {}
        var listPurchased = []
        var saleItems = [
            {
                brand : 'Sepatu Stacattu',
                price : 1500000
            },
            {
                brand : 'Baju Zoro',
                price : 500000
            },
            {
                brand : 'H&N',
                price : 250000
            },
            {
                brand : 'Sweater Uniklooh',
                price : 175000
            },
            {
                brand : 'Casing Handphone',
                price : 50000
            }
        ]

        output.MemberId = memberId
        output.money = money
        var changeMoney = money
        
        for (var i = 0; i < saleItems.length; i ++){
            // console.log (saleItems[i].price)
            if (changeMoney >= saleItems[i].price){
                changeMoney -= saleItems[i].price ;
                listPurchased.push(saleItems[i].brand)
                // console.log (saleItems[i].price)
                // console.log (listPurchased)
            }
        }
        // console.log (changeMoney)
        // console.log (listPurchased)
    }
    output.listPurchased = listPurchased
    output.changeMoney = changeMoney
    // console.log (saleItems.length)
    return output
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja