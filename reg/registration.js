document.getElementById("registrationBtn").addEventListener("click", function(event) {
    event.preventDefault(); // предотвращаем отправку формы
  
    let nameInput = document.getElementById("name").value;
    let emailInput = document.getElementById("email").value;
    let passInput = document.getElementById("pass").value;
    let passInputNov = document.getElementById("passNov").value;
    
    if (nameInput === "" || emailInput === "" || passInput === "" || passInputNov === "") {
      alert("Не все поля были заполнены");
    } else {
      let fileContent = "Имя: " + nameInput + "\n" +
                        "Email: " + emailInput + "\n" +
                        "Пароль: " + passInput + "\n" +
                        "Новый пароль: " + passInputNov;
      let fileName = nameInput + emailInput;
      saveFile(fileContent, fileName);
      
      // перенаправить на новую страницу
      window.location.href = "index.html";
    }
  });
  
  document.getElementById("back").addEventListener("click", function(event) {
    event.preventDefault(); // предотвращаем отправку формы
    window.location.href = "../index.html";
  });
  
  function saveFile(data, filename) {
    var blob = new Blob([data], { type: 'text/plain' });
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }
  }
