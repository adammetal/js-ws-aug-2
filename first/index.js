const blocking = document.querySelector("#blocking");
const nonBlocking = document.querySelector("#non-blocking");

blocking.addEventListener("click", () => {
  let i = 0;
  while (i < 100000000) {
    i++;
  }
  console.log('done');
});

nonBlocking.addEventListener("click", () => {
  let i = 0;

  const loop = () => {
    console.log(i++);
    setTimeout(loop, 72);
  };

  loop();
});
