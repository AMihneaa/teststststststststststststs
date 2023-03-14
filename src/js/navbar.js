const onViewSection = [
  document.querySelector("#afis"),
  document.querySelector("#calendar"),
  document.querySelector("#recomandari"),
  document.querySelector("#informatii"),
  document.querySelector("#despre"),
];
let rect = new Array(5);
let isInViewport = new Array(5);
for (let element = 0; element < rect.lenght; element++) {
  rect[element].getBoundingClientRect();
  isInViewport[element] =
    rect[element].top >= 0 &&
    rect[element].left >= 0 &&
    rect[element].bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect[element].right <=
      (window.innerWidth || document.documentElement.clientWidth);
}

// const viewportNavbar = () => {
//   const navbarElem = document.querySelectorAll(".navbar-element");

//   for (let element = 0; element < isInViewport.length; element++) {
//     if (!isInViewport[element]) {
//       navbarElem[element].style.transform = "translateX(75%)";
//     } else {
//       console.log("Da");
//     }
//   }
// };

// const rect = onViewSection.getBoundingClientRect();

// const isInViewport =
//   rect.top >= 0 &&
//   rect.left >= 0 &&
//   rect.bottom <=
//     (window.innerHeight || document.documentElement.clientHeight) &&
//   rect.right <= (window.innerWidth || document.documentElement.clientWidth);

const sectiuni = [
  "#afis",
  "#calendar",
  "#recomandari",
  "#informatii",
  "#despre",
];

const handleNavbar = (id) => {
  const navbarElem = document.querySelectorAll(".navbar-element");

  navbarElem.forEach((element) => {
    element.style.transform = "translateX(75%)";
  });

  navbarElem[id].style.transform = "translateX(0)";
  location.href = sectiuni[id];
};
