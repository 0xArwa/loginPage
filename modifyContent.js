
function displaySignUp(){
    let hidden = document.getElementById('content');
    let changeHeading= document.getElementById('heading-modify');
    let changeText = document.getElementById('modify2');
    if (hidden.style.display === "none") {
        hidden.style.display = "inline-flex";
    } else {
        hidden.style.display = "none";
        document.getElementById('heading-modify').innerHTML = 'Already have an Account?';
        changeText.innerHTML = 'SIGN IN';
        //document.getElementById('sign-up').innerText = 'SIGN IN';
        //document.getElementById('heading-modify').innerHTML = 'Already have an Account?';
    }
}
/*
document.addEventListener('DOMContentLoaded', function(){
    changeText();
});
*/
function changeText(){
    let hidden = document.getElementById('content');

    return '';
}
//let modify = document.getElementById('hide-elements');

