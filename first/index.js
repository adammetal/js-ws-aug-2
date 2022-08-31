const blocking = document.querySelector("#blocking");
const nonBlocking = document.querySelector("#non-blocking");

blocking.addEventListener("click", () => {
  while (true) {
    console.log("loop");
  }
  console.log('done');
});

nonBlocking.addEventListener("click", () => {
  const loop = () => {
    console.log("loop");
    setTimeout(loop, 0);
  };

  loop();
});
