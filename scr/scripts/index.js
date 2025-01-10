let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#menu-container button");
let bgWinmsg = document.querySelector("#background-winmsg");
let message = document.querySelector("#win-message p");
let scorex = document.querySelector("#score-x");
let scoreo = document.querySelector("#score-o");
let secondPlayer;

// contador de jogadas

let player1 = 0;
let player2 = 0;

// Modo 2 jogadores
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    let el = checkEl(player1, player2);

    // Condição para verificar se já foi usado x ou o na caixa.
    if (this.childNodes.length == 0) {
      let cloneEL = el.cloneNode(true);

      this.appendChild(cloneEL);

      // Alterna quem está jogando
      if (player1 == player2) {
        player1++;
        console.log(player1);
        if (secondPlayer == "ia") {
          iaPlayed();
          player2++;
          console.log(player2);
        }
      } else {
        player2++;
      }

      checkWinCondition();
    }
  });
}

// Função para verificar de quem é a vez.
function checkEl(player1, player2) {
  if (player1 == player2) {
    el = x;
  } else {
    el = o;
  }

  return el;
}

// checador de vitória
function checkWinCondition() {
  let b1 = document.querySelector("#block1");
  let b2 = document.querySelector("#block2");
  let b3 = document.querySelector("#block3");
  let b4 = document.querySelector("#block4");
  let b5 = document.querySelector("#block5");
  let b6 = document.querySelector("#block6");
  let b7 = document.querySelector("#block7");
  let b8 = document.querySelector("#block8");
  let b9 = document.querySelector("#block9");

  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child == b2Child && b2Child == b3Child) {
      if (b1Child == "x") {
        message.textContent = "Player 1 ganhou!";
        newRound(b1Child);
      } else {
        message.textContent = "Player 2 ganhou!";
        newRound(b1Child);
      }
      displayWinMsg();
    }
  }
  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child == b5Child && b5Child == b6Child) {
      if (b4Child == "x") {
        message.textContent = "Player 1 ganhou!";
        newRound(b4Child);
      } else {
        message.textContent = "Player 2 ganhou!";
        newRound(b4Child);
      }
      displayWinMsg();
    }
  }
  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b7Child == b8Child && b8Child == b9Child) {
      if (b7Child == "x") {
        message.textContent = "Player 1 ganhou!";
        newRound(b7Child);
      } else {
        message.textContent = "Player 2 ganhou!";
        newRound(b7Child);
      }
      displayWinMsg();
    }
  }
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b1Child == b4Child && b4Child == b7Child) {
      if (b1Child == "x") {
        message.textContent = "Player 1 ganhou!";
        newRound(b1Child);
      } else {
        message.textContent = "Player 2 ganhou!";
        newRound(b1Child);
      }
      displayWinMsg();
    }
  }
  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if (b2Child == b5Child && b5Child == b8Child) {
      if (b2Child == "x") {
        message.textContent = "Player 1 ganhou!";
        newRound(b2Child);
      } else {
        message.textContent = "Player 2 ganhou!";
        newRound(b2Child);
      }
      displayWinMsg();
    }
  }
  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b3Child == b6Child && b6Child == b9Child) {
      if (b3Child == "x") {
        message.textContent = "Player 1 ganhou!";
        newRound(b3Child);
      } else {
        message.textContent = "Player 2 ganhou!";
        newRound(b3Child);
      }
      displayWinMsg();
    }
  }
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b1Child == b5Child && b5Child == b9Child) {
      if (b1Child == "x") {
        message.textContent = "Player 1 ganhou!";
        newRound(b1Child);
      } else {
        message.textContent = "Player 2 ganhou!";
        newRound(b1Child);
      }
      displayWinMsg();
    }
  }
  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b3Child == b5Child && b5Child == b7Child) {
      if (b3Child == "x") {
        message.textContent = "Player 1 ganhou!";
        newRound(b3Child);
      } else {
        message.textContent = "Player 2 ganhou!";
        newRound(b3Child);
      }
      displayWinMsg();
    }
  }

  let counter = 0;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  if (counter == 9) {
    newRound();
    message.textContent = "Deu velha!";
    displayWinMsg();
  }
}

// Iniciador de nova partida
function newRound(winplayer = "a") {
  if (winplayer == "x") {
    scorex.textContent = parseInt(scorex.textContent) + 1;
  } else if (winplayer == "o") {
    scoreo.textContent = parseInt(scoreo.textContent) + 1;
  }
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      boxes[i].removeChild(boxes[i].childNodes[0]);
    }
  }
}

// Exibir janela de vencedor
function displayWinMsg() {
  bgWinmsg.className = "show";
}

// Fechar janela de vencedor
function stopWinMsg() {
  bgWinmsg.className = "hide";
}

bgWinmsg.addEventListener("click", stopWinMsg);
setTimeout(stopWinMsg, 10000);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (buttons[i].id == "2p") {
      secondPlayer = buttons[i].id;
    } else {
      secondPlayer = buttons[i].id;
    }
    console.log(secondPlayer);
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.add("hide");
    }
    let container = document.querySelector("#container");
    let sair = document.querySelector("#sair");
    sair.classList.remove("hide");
    container.classList.remove("hide");
  });
}

// Máquina fazendo sua jogada
function iaPlayed() {
  let cloneO = o.cloneNode(true);
  counter = 0;
  filled = 0;

  for (let i = 0; i < boxes.length; i++) {
    console.log(boxes[i].id);
    let randomPosition = Math.floor(Math.random() * 5);
    if (boxes[i].childNodes[0] == undefined) {
      if (randomPosition <= 1) {
        boxes[i].appendChild(cloneO);
        counter++;
        break;
      }
    } else {
      filled++;
    }
  }
  if (counter == 0 && filled < 9) {
    iaPlayed();
  }
}

function sair() {
  location.reload();
}
