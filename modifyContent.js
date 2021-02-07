
/*function displaySignUp(){
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
*//*
function changeText(){
    let hidden = document.getElementById('content');

    return '';
}*/
//let modify = document.getElementById('hide-elements');
//^ the old code i may need it ;)

function displaySignUp(){
    let hidden = document.getElementById('content');
    let changeHeading= document.getElementById('heading-modify');
    let changeText = document.getElementById('modify2');
    let signUp_signIn = document.getElementById('sign-up');
    let displayForm = document.getElementById('display-form');

    if (hidden.style.opacity == '0') {
        hidden.style.transition = "opacity 0.5s ease-in";
        hidden.style.opacity = '1';
        hidden.style.display = "inline-flex";
        displayForm.style.display = "none";
        changeHeading.innerHTML = 'Welcome to website';
        changeText.innerHTML = 'New here?';
        signUp_signIn.innerHTML = 'SIGN UP';
    } else {
        hidden.style.transition = "opacity 0.5s ease-out";
        hidden.style.opacity = '0';
        //hidden.style.transition = "visibility 0s, opacity 0.5s linear";
        //hidden.style.display = "none";
        /*
        displayForm.style.display = "inline-flex";
        changeHeading.innerHTML = 'Already have an account?';
        changeText.innerHTML = '';
        signUp_signIn.innerHTML = 'SIGN IN';
        */
        //add a pull request then add this if the transition doesn't work
        //then work at the old version by modifying the display = 'none' etc...

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


