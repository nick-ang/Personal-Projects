

const moveCarP1 = (i) => {
  const p1 = document.querySelectorAll("#player1-race td");
  const activeRow = p1[i - 1];
  activeRow.classList.remove("active");
  const activeRow2 = p1[i];
  activeRow2.classList.add("active");
  return i;
};

const moveCarP2 = (j) => {
  const p2 = document.querySelectorAll("#player2-race td");
  const activeRow3 = p2[j - 1];
  activeRow3.classList.remove("active");
  const activeRow4 = p2[j];
  activeRow4.classList.add("active");
  return j;
};

const clear = () => {
  const del = document.querySelector(".active");
  del.classList.remove("active");
};

const reset = () => {
  clear();
  clear();
  const p2 = document.querySelectorAll("#player2-race td");
  const activeRow5 = p2[0];
  activeRow5.classList.add("active");
  const p1 = document.querySelectorAll("#player1-race td");
  const activeRow6 = p1[0];
  activeRow6.classList.add("active");
  const init = [0, 0];
  return init;
};
const listen = (init) => {
  let i = init[0];
  let j = init[1];
  document.addEventListener("keyup", (event) => {
    const result = event.key;
    if (result === "ArrowUp" && i < 10) {
      i += 1;
      moveCarP1(i);
    } else if (result === "ArrowDown" && j < 10) {
      j += 1;
      moveCarP2(j);
    }
  });
};

const start = document.querySelector("#clickme");
start.addEventListener("click", (event) => {
  // Do something (callback)
  let init = [0, 0];
  init = reset();
  listen(init);
});
