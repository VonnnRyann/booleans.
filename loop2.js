/* //1
let sum = 0;
for ( let i = 0; i <= 20; i++){
    sum = sum + i;
    console.log(sum);
} */

//2
/* for (let i = 1; i < 5; i++){
    if(i === 0){
    console.log(`there are ${i} bottles of beer on the wall`);
    }else {
        console.log('one bottle of beer');
    }
} */

//3
/* for (let i = 0; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i + ' is even');
    }else{
        console.log(i + ' is odd');
    }
} */

//4
/* for (let i = 1; i <= 10; i++){
    console.log(i * 9);
}
 */

//bonus
/* for(let j=0; j<10; j++) {
    console.log(i+"*"+(j+1)+"="+i*(j+1));
}  */

//5
/* for (let i = 1; i < 101; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
} */

//6

/* for (let i= 1; i < 1000; i++ ) {
    if (i % 3 === 0  || i % 5 === 0 ){
    }
    console.log(i);
} */
//7

/* for (let i = 0; i < 1001; i +=100) {
    if ( i === 0) continue;
    console.log(i);
}
for (let i = 0; i < 11; i +=2) {
    console.log(i);
}
for (let i = 3; i < 16; i +=3) {
    console.log(i);
}
for (let i = 9; i > -1; i -=1) {
    console.log(i);
}
for (let i = 0; i < 4; i++){
    for (q = 0; q < 3; q++);
    console.log(q);


}
//DCI code
let count = 1;

for (let i = 1; i <=4;) {
    console.log(i);
    if (count !== 0 && count % 3 === 0){
        i++;
        count = 0;
    }
    count++;
} */

//teacher code

/* for (let i = 1; i <= 4; i++) {
    for (let x = 0; x < 3; x++){
        console.log(i);
    }
}

for (let i = 0; i < 3; i++) {
    for (let x = 0; x < 5; x++){
        console.log(x);
    }
} */


//NEW TOPIC
/* var visitor = 'director'

var message = (visitor === 'employee')              
                ? 'hello'
                : (visitor === 'director')
                ? 'hello madam'
                : (visitor === 'delivery guy')
                ? 'let me take that'
                : 'can i help you?'
    console.log(message); */          
    
var temp = '-5'

var message = (temp<0)
            ? 'snow'
            : 'rain'
    console.log(message);