// show pet category fetch:
const showButtonCategory = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    const Data = await res.json()
    displayCategoriesBtn(Data.categories);
    
}


// button create function here;
const displayCategoriesBtn = (pets) => {

    // card container
    const adoptCtnContainer = document.getElementById('adopt-btn-container')
    pets.forEach((pet) => {
    
    // dynamic button create
    const divBtn = document.createElement('div')
    divBtn.innerHTML = `
    
        <div class="flex justify-center">
            <button
                onclick="loadCardOnClick('${pet.category}')"
                class="border petBtn btn px-8 py-2 rounded-md hover:bg-[#0E7A811A]">${pet.category}
            </button>
        </div>
    `;
    adoptCtnContainer.append(divBtn)

   });

};

// const removeClassButton = () => {
//     const buttons = document.getElementsByClassName('petBtn')
//     for (let btn of buttons){
//         btn.
//     }
    
// }



showButtonCategory()