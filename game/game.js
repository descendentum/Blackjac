let vzad = document.getElementById("vzad");
let sebe = document.getElementById("emu");
let edvoit = document.getElementById("ydvoit");
vzad.disabled = true;
sebe.disabled = true;
edvoit.disabled = true;

document.getElementById("b1").addEventListener("click", function(event) {
    event.preventDefault();
    
    let nameInput = document.getElementById("coin");
    let stavka = document.getElementById("chislo");
    let stavkachislo = parseInt(stavka.innerText);  // преобразуем значение в числовой тип данных
    let coin = parseInt(nameInput.innerText);  // преобразуем значение в числовой тип данных
    coin = coin - 1;

    if (coin < 0) {
        alert("Нельзя");
    } else {
        nameInput.innerText = coin;
        stavka.innerText = stavkachislo + 1;  // увеличиваем значение переменной stavka на 1
    }
});
document.getElementById("b5").addEventListener("click", function(event) {
    event.preventDefault();
    
    let nameInput = document.getElementById("coin");
    let stavka = document.getElementById("chislo");
    let stavkachislo = parseInt(stavka.innerText);  // преобразуем значение в числовой тип данных
    let coin = parseInt(nameInput.innerText);  // преобразуем значение в числовой тип данных
    coin = coin - 5;

    if (coin < 0) {
        alert("Нельзя");
    } else {
        nameInput.innerText = coin;
        stavka.innerText = stavkachislo + 5;  // увеличиваем значение переменной stavka на 5
    }

})
document.getElementById("b10").addEventListener("click", function(event) {
    event.preventDefault();
    
    let nameInput = document.getElementById("coin");
    let stavka = document.getElementById("chislo");
    let stavkachislo = parseInt(stavka.innerText);  // преобразуем значение в числовой тип данных
    let coin = parseInt(nameInput.innerText);  // преобразуем значение в числовой тип данных
    coin = coin - 10;

    if (coin < 0) {
        alert("Нельзя");
    } else {
        nameInput.innerText = coin;
        stavka.innerText = stavkachislo + 10;  // увеличиваем значение переменной stavka на 10
    }

})
document.getElementById("b100").addEventListener("click", function(event) {
    event.preventDefault();
    
    let nameInput = document.getElementById("coin");
    let stavka = document.getElementById("chislo");
    let stavkachislo = parseInt(stavka.innerText);  // преобразуем значение в числовой тип данных
    let coin = parseInt(nameInput.innerText);  // преобразуем значение в числовой тип данных
    coin = coin - 100;

    if (coin < 0) {
        alert("Нельзя");
    } else {
        nameInput.innerText = coin;
        stavka.innerText = stavkachislo + 100;  // увеличиваем значение переменной stavka на 1
    }

})

document.getElementById("ybrat").addEventListener("click", function(event) {
    event.preventDefault();
    
    let nameInput = document.getElementById("coin");
    let stavka = document.getElementById("chislo");
    let stavkachislo = parseInt(stavka.innerText);  // преобразуем значение в числовой тип данных
    let coin_chislo = parseInt(nameInput.innerText);  // преобразуем значение в числовой тип данных
    nameInput.innerText = coin_chislo + stavkachislo
    stavka.innerText = 0
})


document.getElementById("polojit").addEventListener("click", function(event) {
    event.preventDefault();
    let coin1 = document.getElementById("chislo");
    let coin = parseInt(coin1.innerHTML);
    if (coin === 0 ){
        alert("Нужна ставка")
    }
    else{let b1 = document.getElementById("b1");
    let b5 = document.getElementById("b5");
    let b10 = document.getElementById("b10");
    let b100 = document.getElementById("b100");
    let ybrat = document.getElementById("ybrat");
    let polojit = document.getElementById("polojit")
    let vzad = document.getElementById("vzad")
    let sebe = document.getElementById("emu")
    let edvoit = document.getElementById("ydvoit")
    b1.disabled = true;
    b5.disabled = true;
    b10.disabled = true;
    b100.disabled = true;
    ybrat.disabled = true;
    polojit.disabled = true;
    vzad.disabled = false;
    sebe.disabled = false;
    edvoit.disabled = false;
    rr()
    setTimeout(() => {  rr(); }, 1000);
    setTimeout(() => {  diller(); }, 1000);
    setTimeout(() => {  diller(); }, 500);
    
}
    
})

function rr() {
    var chislo = document.getElementById("chisloKart");
    var currentNumber = parseInt(chislo.innerHTML); // Получаем текущее число
  
    // Создаем массив с возможными значениями карт в игре Блек-джек
    var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1];
  
    // Генерируем индекс для выбора случайного значения из массива
    var randomIndex = Math.floor(Math.random() * values.length);
  
    // Получаем случайное значение карты
    var randomValue = values[randomIndex];
  
    // Увеличиваем текущее число на значение карты
    var newNumber = currentNumber + randomValue;
  
    chislo.innerHTML = newNumber; // Обновляем число на странице
  }
  function diller() {
    var chislo = document.getElementById("diller");
    var currentNumber = parseInt(chislo.innerHTML); // Получаем текущее число
  
    // Создаем массив с возможными значениями карт в игре Блек-джек
    var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1];
  
    // Генерируем индекс для выбора случайного значения из массива
    var randomIndex = Math.floor(Math.random() * values.length);
  
    // Получаем случайное значение карты
    var randomValue = values[randomIndex];
  
    // Увеличиваем текущее число на значение карты
    var newNumber = currentNumber + randomValue;
  
    chislo.innerHTML = newNumber; // Обновляем число на странице
  }


  document.getElementById("vzad").addEventListener("click", function(event) {
    event.preventDefault();
    let chisloKart1 = document.getElementById("chisloKart");
    let chisloKart = parseInt(chisloKart1.innerHTML);
    rr();
    if (chisloKart>21){
        alert("Нельзя, ты проиграл")
        let vzad = document.getElementById("vzad")
        vzad.disabled = true;
    }
})


document.getElementById("ydvoit").addEventListener("click", function(event) {
    event.preventDefault();
    let stavka1 = document.getElementById("chislo");
    let coin1 = document.getElementById("coin");
    let stavka = parseInt(stavka1.innerHTML);
    let coin = parseInt(coin1.innerHTML); 
    
    if (coin < stavka){
        alert("Удвоение ставки невозможно.")
    }
    else{
        stavka1.innerHTML = stavka * 2;
        coin1.innerHTML = coin - stavka;
    }
})


document.getElementById("emu").addEventListener("click", function(event) {
    event.preventDefault();
    let stavka1 = document.getElementById("chisloKart");
    let diller1 = document.getElementById("diller");
    let stavka = parseInt(stavka1.innerHTML);
    let diller = parseInt(diller1.innerHTML); 
    
    function callDiller() {
        if (diller < stavka) {
            diller()
            callDiller();
        } else {
            alert("Я проиграл");
        }
    }
    
    callDiller();
})

