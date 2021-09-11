document.getElementById("submit-btn").addEventListener("click", () => {
    const emailField = document.getElementById("email").value;
    const res = checkEmail(emailField);
    console.log(res);
})
const checkEmail = email => {
    filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    }
    return "gum"
}


/* var pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";

function isEmailAddress(str) {

    str = "azamsharp@gmail.com";

    let bbb = alert(str.match(pattern));
    console.log(bbb);
    return str.match(pattern);


} */