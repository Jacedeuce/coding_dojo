function changer(cents){
    var change = {
    }
    var coin_values = {
        'dollars' : 100,
        'quarters' : 25,
        'dimes' : 10,
        'nickels' : 5,
        'pennies' : 1
    }
    var coins = ['dollars', 'quarters', 'dimes', 'nickels', 'pennies']
    // function get_remainder(coin, cent_value){
    //     remainder = cent_value % coin_values[coin] 
    // }
    function get_value(i, cent_value){
        if (cent_value === 0){
            return
        }
        change[coins[i]] = parseInt(cent_value / coin_values[coins[i]])
        remainder = cent_value % coin_values[coins[i]]
        return get_value(i+1, remainder)
    }
    get_value(0, cents)
    return change
}

console.log(changer(141))