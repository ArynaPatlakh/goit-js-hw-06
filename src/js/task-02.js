const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemIngredients = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const itemListIngredients = document.createElement("li");
  itemListIngredients.textContent = ingredient;
  itemListIngredients.classList.add("item");
  itemIngredients.appendChild(itemListIngredients);
}
