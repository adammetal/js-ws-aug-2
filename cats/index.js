const cats = document.querySelector("#cats");
const url = "https://api.thecatapi.com/v1/images/search";

const loadingStart = () => {
  cats.innerHTML = "";
  const loading = document.createElement("div");
  loading.innerText = "Loading....";
  cats.append(loading);
};

const preloadImage = (src) =>
  new Promise((resolve) => {
    const img = document.createElement("img");

    img.addEventListener("load", () => {
      resolve();
    });

    img.src = src;
  });

const loadingEnd = () => {
  cats.innerHTML = "";
};

const fetchCat = async () => {
  const res = await fetch(url);
  const cats = await res.json();
  const cat = cats[0];

  await preloadImage(cat.url);
  return cat;
};

const displayCatFromApi = () => {
  loadingStart();

  fetchCat().then((cat) => {
    loadingEnd();
    drawCat(cat);
  });
};

const drawCat = (cat) => {
  cats.innerHTML = "";
  const img = document.createElement("img");
  img.src = cat.url;
  cats.append(img);
};

displayCatFromApi();

cats.addEventListener("click", () => {
  displayCatFromApi();
});
