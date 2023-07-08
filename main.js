document.getElementById("registrationBtn").addEventListener("click", function(event) {
    event.preventDefault(); //предотвращаем отправку формы
    window.location.href = "reg/index.html";

});

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); //предотвращаем отправку формы

    let nameInput = document.getElementById("name");
    let passInput = document.getElementById("pass");
    if (nameInput.value === "" || passInput.value === "") {
        alert("Не все поля были заполнены");
    } else {
        //перенаправить на новую страницу
        window.location.href = "index2.html";
    }
});