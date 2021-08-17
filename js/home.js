document.getElementById("submit-btn").addEventListener("click", function () {
    const emailField = document.getElementById("email-input").value;
    const passwordField = document.getElementById("password-input").value;
    if (emailField == "hellobank@mail.com" && passwordField == "please go") {
        window.location.href = "in-bank.html";
    }
});
