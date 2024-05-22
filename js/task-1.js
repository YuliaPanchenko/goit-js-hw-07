const listElem = document.querySelectorAll(".item");
console.log(`Number of catigories: ${listElem.length}`);

listElem.forEach((elem) => {
  const listTitle = elem.querySelector("h2").textContent;
  console.log(`Category: ${listTitle}`);
  const listItems = elem.querySelectorAll("ul li").length;
  console.log(`Elements: ${listItems}`);
});

// listElem.forEach((elem) => {
//   const listTitle = elem.firstElementChild.textContent;
//   console.log(`Category: ${listTitle}`);
// });
