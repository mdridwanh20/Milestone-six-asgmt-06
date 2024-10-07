
// default card (cat pets)
const defaultCardPets = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/cat`)
    const data = await res.json()
    // console.log(data.data);
    activeCatPets(data.data);
}

const activeCatPets = (cats) =>{
    const cardContainer = document.getElementById('card-container')
    // cardContainer.innerHTML = "";

    cats.forEach(cat => {
    // console.log(cat);
    const activeCard = document.createElement('div')
    activeCard.innerHTML = `
    
    <div class=" rounded-md border bg-base-100 p-4">
                <figure>
                  <img class="w-full"
                    src="${cat.image}"
                    alt="Shoes" />
                </figure>
                <div class="my-4">
                    <h2 class="card-title">${cat.pet_name}</h2>
                    <p class="">Breed: ${cat.breed}</p>
                    <p class="">Birth: ${cat.date_of_birth}</p>
                    <p class="">Gender: ${cat.gender}</p>
                    <p class="">Price: ${cat.price}</p>
                </div>

                <div class="card-actions flex justify-between">
                    <button class="border font-semibold py-1 text-[#0E7A81] px-4 rounded-md ">like</button>
                    <button class="border font-semibold py-1 text-[#0E7A81] px-4 rounded-md ">Adopt</button>
                    <button class="border font-semibold py-1 text-[#0E7A81] px-4 rounded-md ">Detail</button>
                </div>
         </div>
    `
    cardContainer.append(activeCard)
    });
    
}


defaultCardPets()