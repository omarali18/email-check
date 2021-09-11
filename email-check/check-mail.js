document.getElementById("submit-btn").addEventListener("click", () => {
    const emailField = document.getElementById("email").value;
    const res = checkEmail(emailField);
    console.log(res);
})
const validText = document.getElementById("valid")
const rongText = document.getElementById("rong")
const checkEmail = email => {
    filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email)) {
        email.focus;
        validText.classList.add("d-none")
        rongText.classList.remove("d-none")

        return false;
    }
    else {
        rongText.classList.add("d-none")
        validText.classList.remove("d-none")

    }
}
