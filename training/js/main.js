/**
 * Created by oscardelgadillo on 11/5/2015.
 */

//var age=20;

var sayHello = function(age, name) {
    if (age < 20)
        console.log('Hello ' + name + ' you are young');
    else
        console.log('Hello ' + name + ' you are old');

}

// Functions and definitions
/**
 * Gets the average....
 * @param {Number}a,
 * @param {Number}b,
 * @param {Number}c,
 * @returns {number}
 */
function getAverage(a, b, c){
    console.log(arguments);
    var numArguments = arguments.length;
    var total = 0;
    for(var index = 0; index < numArguments; index++)
    {
        total = arguments[index] + total;
    }
    return total/numArguments;
    //return (a + b  + c)/3;
};
console.log('Average: ', getAverage(20,20,20));

var getFullName = function(firsName, lastName){
    console.log('Arguments: '+arguments.length);
    return firsName + ' ' + lastName;
};

//console.log(getFullName('oscar','oz'));

// Var and Context

//var age = '';

var calculateAge = function (bornYear) {
    age = 2015 - bornYear;
    return age;
}

//console.log('Age: ',calculateAge(2000));

var getMax = function () {

};
var getMin = function () {

};
var getSum = function (tamanio) {
    if (tamanio > arguments.length)
    {
        var sum = getSum(arguments);
    }
    return sum;
};
var getAvg = function () {

};
/*
var evaluate = function() {
    var sum = getSum(arguments);

    console.log('SUM is: ', sum);
    console.log('MAX is: ',);
    console.log('MIN is: ',);
    console.log('AVG is: ',);
}*/

Person = function(name){
    this.name = name;
    this.eat = function(){
        console.log(this.name, 'is eating');
    }
    this.run = function(){
        console.log(this.name, 'is running');
    }
};

Person.prototype.cry=function(){
    console.log(this.name,'is crying...');
};

var pedro = new Person('Pedro');

//count number of words in a paragraph

var paragraph = 'This is an example of a paragraph ';

var countWords = function(paragraph) {
    var count = paragraph.split(' ');
    return count.length;

};

console.log('Paragraph has', countWords(paragraph), 'words.');



var operator = function(arg){
    console.log('The sum is: ',sumNumbers(arg));

}

var sumNumbers = function(){
    var sum = 0;
    for(var index = 0; index > arg.length; index++)
    {
        //if (arg[0].)
        sum = sum + arg[index];
    }
    return sum;
};


//Today is: Friday
//Current time is: 4pm : 15 : 00

//ctrl + alt + v
var printDate = function(){
    var now = new Date();
    var days = ['Sun','Mon','Tue','Wen','Thu','Fri','Sat'];
    var hours = now.getHours();

    console.log('Today is: ', days[now.getDay()]);
    console.log('Current time is:', hours, ':' , now.getMinutes(), ':' , now.getSeconds());
    console.log('Current time is:', hours > 12 ? hours - 12 : hours, hours > 12 ? 'PM' : 'AM', ':' , now.getMinutes(), ':' , now.getSeconds());
};

var pattern = new RegExp(/^[0-9]{5}$/);

//isValidDate('2014-06-06'); ==> true
//isValidDate('2014-06-46'); ==> false


var isValidDate = new RegExp(/^[0-9]{4}$/);


//^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[/\\/](19|20)\d{2}$


