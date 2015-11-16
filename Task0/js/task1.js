/**
 * Created by oscardelgadillo on 11/16/2015.
 */

var sumNumbers = function(a, b, c){
    var sum = 0;
    for(var index = 0; index < arguments.length; index++)
    {
        //if (arg[0].)
        sum = sum + arguments[index];
    }
    return sum;
};



var sum = function(arg, index)
{
    if(index <= 0)
    {
        if(index < 0)
            return "Dont exist arguments";
        else
            return arg[index];
    }
    else
        return arg[index] + sum(arg, index-1);
}

function sumaRecursiva(numeros, l){
    if(numeros.length == 1){
        return numeros[0];
    }
    //var primero = numeros.shift();
    return numeros[l] + sumaRecursiva(numeros, l-1);
}

var evaluate = function(){
    //var sum = 0;

    console.log('The sum is: ',sum(arguments, arguments.length))
    console.log('The sum is: ',sumaRecursiva(arguments,arguments.length))
}