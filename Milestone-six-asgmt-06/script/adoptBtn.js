
// adopt category button here:
const adoptAllCategory = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    const data = await res.json()
    // console.log(data);
    showAllCategoryItem(data.categories);
}
// show adopt category ont the button:
const showAllCategoryItem = (categories) => {
    const adoptBtnContainer = document.getElementById('adopt-btn-container')

    categories.forEach(item => {
        console.log(item);

        // adopt btn container innerHtml button create here:
        const divBtn = document.createElement('div')
        divBtn.innerHTML = `
        <button class="border px-8 py-2 rounded-full hover:bg-[#0E7A811A] hover:border-indigo-300">${item.category}</button>
        `
        adoptBtnContainer.appendChild(divBtn)
    });
}

adoptAllCategory();


