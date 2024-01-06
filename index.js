var i = 0;
while (i<9){
    num1= document.querySelectorAll(".numBut")[i].addEventListener("click",entry);
    num2= document.querySelectorAll(".numBut")[i].addEventListener("click",entry);
    function entry(i){
    return i;
    }
    i++;
console.log(num1);
}
    function sum (num1,num2){
     var addition = num1+num2;
     return addition;
    }
    function sub (num1,num2){
    var subtraction = num1 - num2;
    return subtraction;
   }
   function multi (num1,num2){
    var multipliction = num1 * num2;
    return multipliction;
   }
   function division (num1,num2){
    var division= num1/num2;
    return division
   }
   function calculator (num1,num2,operator){
    console.log(operator(num1,num2));
    }
