var userName = prompt('hi what is your name??','Please this is mandatory');
//var userName = 123
var initialUserName = userName.substring(0,1).toUpperCase();
console.log(initialUserName);

var restUserName = userName.substring(1).toLowerCase();
console.log(restUserName)
userName = initialUserName + restUserName;
console.log(userName)
//userName = userName.toLowerCase().trim();
userName += '.';
var testNumber = 1;
testNumber -= 5;
console.log(testNumber);

document.getElementById('metoo').innerHTML = userName; //Short cuts
document.getElementById('woot').innerHTML = userName.substring(0,1) + ' for ' + userName;


var userAge = prompt('how old are you?', 'Please type a number');
console.log(typeof(userAge), userAge);

userAge = parseInt(userAge);
console.log(typeof(userAge), userAge);

document.getElementById('age').innerHTML = userAge;

document.getElementById('luckyCasino').innerHTML = Math.ceil(Math.random()*6);

var number1 = prompt('Please give me a number');
var number2 = prompt('Please give me another number');
var number3 = prompt('Please give me last number');
var numMax = Math.max(number1, number2,   number3);
var numMin = Math.min(number1, number2,   number3);

alert(`Max: ${numMax} 
    Min: ${numMin}`);

document.getElementById('numbers').innerHTML =
`<tr>
    <td>${number1}</td>
    <td>${number2}</td>
    <td>${number3}</td>
</tr>`;

document.getElementById('maximal').innerHTML =
`<tr>
    <td>${numMin}</td>
    <td>${numMax}</td>
    `;

alert ('Hey'); //hot to make an alert!!
//typeof(userName);
/* 
prompt = //this is the way to pop up
var = //to assign the value or create value
document.getElementById('') // the way to call id or element on other like html*/ 