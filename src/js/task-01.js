const itemRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemRef.length}`);

itemRef.forEach(item => {
    const categoryName = item.querySelector('h2');
    console.log(`Category: ${categoryName.textContent}`);

    const categoryItem = item.querySelectorAll('li');
    console.log(`Elements: ${categoryItem.length}`)
});
