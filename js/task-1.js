const items = document.querySelectorAll('.item');
const numberOfCategories = items.length;
console.log(`Number of categories: ${numberOfCategories}`);

items.forEach (item => {
    const header = item.querySelector("h2").textContent;
    const elementsInHeader = item.querySelectorAll("li").length;
    console.log(`Category: ${header}`);
    console.log(`Elements: ${elementsInHeader}`);
})