function displaySignUp(){
    let hidden = document.getElementById('content');
    let modify = document.getElementById('hide-elements');
    if (hidden.style.display === "none") {
        hidden.style.display = "inline-flex";
    } else {

        hidden.style.display = "none";
        hidden.style.transition = '0.5s';
    }
}
