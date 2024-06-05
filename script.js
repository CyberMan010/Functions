const num = prompt("enter a number");
function reverseGivenInteger(num){
    var reversed = 0
    while(num > 0){
        let lastnumber = num %10;
        reversed = reversed * 10 + 
lastnumber;
        num = Math.floor(num/10)

    }

   return reversed
}
console.log(`Reversed integr is : ${reverseGivenInteger(num)}`)
