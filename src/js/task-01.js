const listCategories = document.querySelector("#categories");
const listItemCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${listItemCategories.length}`);

listItemCategories.forEach((item) => {
  const headerEl = item.querySelector("h2");
  const liEl = item.querySelectorAll("li");
  console.log(`Category: ${headerEl.textContent}`);
  console.log(`Elements: ${liEl.length}`);
});


