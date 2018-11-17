const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");
const computed = getComputedStyle(items);

right.addEventListener("click", function(e) {
  // напишите здесь код, который сдвигает items на 100px вправо
  // если items уже сдвинут на 5 элементов впарво, то больше элементы сдвигать не надо, т.к. вы достигли конца списка
  e.preventDefault();
  let currentRight = parseInt(computed.right);
  if (!currentRight){
    currentRight = 0;
  }
  if (currentRight < 500){
    items.style.right = currentRight + 100 + 'px';
  }
});

left.addEventListener("click", function(e) {
  // напишите здесь код, который сдвигает items на 100px влево
    // если item находится в самом начале, то больше элементы сдвигать влево не надо, т.к. вы достигли начала списка
    e.preventDefault();
    let currentRight = parseInt(computed.right);
    if (!currentRight){
      currentRight = 0;
    }
    if (currentRight > 0){
      items.style.right = currentRight - 100 + 'px';
    }
});
