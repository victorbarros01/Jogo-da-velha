let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#menu-container button");
let message = document.querySelector("#win-message p");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

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

function checkWinCondition() {}

buttons.forEach((button) => {
  button.addEventListener("click", function () {});
});
