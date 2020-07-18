var number=79;
number=90;
console.log(number);

let a=90;
a=87;
a=80;
console.log(a);

const name="nayeem";
console.log(name);

var marks=[60,70,80,90,100];
for(var i=0;i<marks.length;i++){
    console.log(marks[i]);
}

function addition(num1,num2){
    var total=num1+num2;
    return total;
}
console.log(addition(50,60));

//function e return thakle console.log dite hoy ar jodi return na thake tahole just functioner name dilei hbe


function largest(numbers){
    var larger=numbers[0];
    for(var i=0;i<numbers.length;i++){
    var element=numbers[i];
    if(element>larger){
        larger=element;
     }
    }
    return larger;
}
console.log(largest([34,100,17]));

function factorial(num){
    var fact=1;
    for(var i=1;i<=num;i++){
        fact=fact*i;
        console.log(i,fact);
    }
    
}
factorial(5);