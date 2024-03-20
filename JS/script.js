
//var digitThree = 0;
//console.log ('Digit Three TOP')
//console.log (digitThree);
//document.addEventListener ('DOMContentLoaded', function (){
   // document.getElementById('logo').innerHTML = 'NEW LOGO';

    // digitThree = 3; 

     //console.log ('Digit Three Bottom',);
    // console.log (digitThree);

//

//console.log ('Digit Three Outside');
//console.log (digitThree);


/*let length = 10;
let width = 5;

let area = length * width;
let perimetr = (length + width) * 2;

console.log ("length", length);
console.log ("width", width);
console.log ("area", area);
console.log ("perimetr", perimetr);
*/


/*let one = 1;
let two = '1';

console.log(one > two);

console.log(one < two);

console.log(one <= two);

console.log(one >= two);

console.log('jsut compare', one == two);

console.log('strict', one === two); */



/*let score = 75;

if (score >= 90) {
    console.log('score is more than 90')
}

if (score >= 90) {
    console.log('score is more than 90')
}
else {
    console.log('THIS IS ELSE STATEMENT')
}


if (score >= 75) {
    console.log('score is more or equal to 75')
}*/

/*let i = 1;


for(i; i <= 5; i++) {
    console.log('Itteration number', i)
}
*/


/*function greet () {
    console.log('Hello World')
}

greet (); */




document.addEventListener ('DOMContentLoaded', function () {
    console.log('DOM loaded');

    // DRY Do not repeat Youself
    
    let logo = document.getElementById('logo');

    logo.addEventListener('mouseover', function() {
        logo.style.color = "blue";
    });
    
    logo.addEventListener('click', function() {
        logo.style.backgroundColor = "black";
        console.log('click');
    

    logo.innerHTML = 'NEW TEXT';
    
    logo.style.color = "white";
   
    document.getElementById('logo')
    });

 

    document.getElementById('contactForm').addEventListener('submit',
    function(event){
        console.log(event);
        event.preventDefault()
  
        let emailInput = document.getElementById ('emailInput');
        let errorMessage = document.getElementById('errorMessage');
        if (emailInput.value === '') {
            errorMessage.textContent = 'Please do not leave empty';
            errorMessage.style.color = "red"
        }

        else {
            errorMessage.textContent = 'Hey! Thank you';
            errorMessage.style.color = "green"
        }

      
        
    }); 



});

