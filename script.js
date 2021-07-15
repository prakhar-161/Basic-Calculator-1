let screen = document.getElementById('screen');
var buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){                               //for of loop
    item.addEventListener('click',function(event){
        //.target.innerText
        buttonText = event.target.innerText;           //captures the button text of the button which we click.
        console.log("Button Text is ",buttonText);
        
        if(buttonText=='X')
        {
            buttonText = "*"; 
            screenValue += buttonText;
            screen.value = screenValue;                  //.value in js
        }
        else if(buttonText == "C")
        {
            screenValue = "";
            screen.value = screenValue; 
        }
        else if(buttonText == "=")
        {
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}