function getPin(){
    const pin = ((Math.random()*10000) + '').split('.')[0];
    if(pin.length === 4){
    return pin;
    }
    else{
    return getPin();
    }
}
function pinGenerate(){
    const generatePin = document.getElementById('generated-pin');
    generatePin.value = getPin();

}
const digitContainer = document.getElementById('digit-container');
digitContainer.addEventListener('click', function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
    // handle Backspace
    // handle clear
        if(digit === 'C'){
            const typed = document.getElementById('typed-pin');
            typed.value = ''; 
        }
        if(digit === 'B'){
           const result = elimination();
            const existValue = document.getElementById('typed-pin');
            //console.log('result',result);
            existValue.value = result;
        }
    }
    else{
        const typed = document.getElementById('typed-pin');
        typed.value = typed.value + digit;
    }

})
function verifyPin(){
    const pin = document.getElementById('generated-pin');
    const password = pin.value;
    console.log(password);
    const typedPin = document.getElementById('typed-pin');
    const otp = typedPin.value;
    if(password === otp){
        const correct = document.getElementById('correct-pin');
        correct.style.display = 'block';
        const incorrect = document.getElementById('incorrect-pin');
        incorrect.style.display = 'none';
    }
    else{
        notifie('none', 'block');
    }
}
const verify = document.getElementById('verify-pin');
verify.addEventListener('click', function(){
    verifyPin();
});
function notifie (new1, new2){
        const correct = document.getElementById('correct-pin');
        correct.style.display = new1;
        const incorrect = document.getElementById('incorrect-pin');
        incorrect.style.display = new2;

}
function elimination(){
    const existValue = document.getElementById('typed-pin');
    const str = existValue.value;
    //document.write((str.substring(0, str.length - 1)));
    const result = Math.floor(str / 10);
    return result;
    //console.log('result',result);
    //console.log(elimination);
}