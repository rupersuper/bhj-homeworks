const board = document.getElementsByClassName("hole");
const deadElement = document.getElementById("dead");
const lostElement = document.getElementById("lost");
let lostCount = null;
let deadCount = null;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function clearCount() {
  deadCount = 0;
  lostCount = 0;
  deadElement.textContent = deadCount;
  lostElement.textContent = lostCount;
}

for (let i = 0; i < board.length; i++) {
  board[i].onclick = () => {
    const hole = getHole(i + 1);
    if (hole.classList.contains("hole_has-mole")) {
      deadCount++;
      deadElement.textContent = deadCount;
      if (deadCount >= 10) {
        alert("Победа!");
        clearCount();
      }
    } else {
      lostCount++;
      lostElement.textContent = lostCount;
      if (lostCount >= 5) {
        alert("Вы проиграли!");
        clearCount();
      }
    }
  };
}
