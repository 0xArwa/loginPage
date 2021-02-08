
function displaySignUp(){
    let hidden = document.getElementById('content');
    let changeHeading= document.getElementById('heading-modify');
    let changeText = document.getElementById('modify2');
    let signUp_signIn = document.getElementById('sign-up');
    let displayForm = document.getElementById('display-form');

    if (hidden.style.display === 'none') {

        hidden.style.display = "inline-flex";
        displayForm.style.display = "none";
        changeHeading.innerHTML = 'Welcome to website';
        changeText.innerHTML = 'New here?';
        signUp_signIn.innerHTML = 'SIGN UP';
    } else {

        hidden.style.display = "none";
        displayForm.style.display = "inline-flex";
        changeHeading.innerHTML = 'Already have an account?';
        changeText.innerHTML = '';
        signUp_signIn.innerHTML = 'SIGN IN';

        //add a pull request then add this if the transition doesn't work
        //then work at the old version by modifying the display = 'none' etc...

    }
}

