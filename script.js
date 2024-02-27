function checkParticipantCode() {
    var participantCode = document.getElementById("participantCode").value;
    // Здесь может быть логика проверки кода участника, например, с помощью условных операторов или AJAX запроса к серверу
    // В данном примере просто показываем загадку, если код участника равен "12345"
    if (participantCode === "12345") {
        document.getElementById("riddleContainer").style.display = "block";
    } else {
        alert("Неправильный код участника!");
    }
}

function submitAnswer() {
    var answer = document.getElementById("answer").value;
    // Здесь может быть логика проверки ответа участника, например, сравнение с правильным ответом
    // В данном примере просто выводим ответ в консоль
    console.log("Ответ участника:", answer);
}