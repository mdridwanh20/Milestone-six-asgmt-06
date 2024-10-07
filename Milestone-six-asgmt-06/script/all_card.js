
const PetsCard = async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    const data = await res.json()
    // console.log(data.pets);
    displayAllPetsCard(data.pets);
}


const displayAllPetsCard = (items) => {
    const cardContainer = document.getElementById('card-container');

    items.forEach(item => {
        console.log(item);

        const allCardDiv = document.createElement('div')
        allCardDiv.innerHTML = `

             <div class=" rounded-md border bg-base-100 p-4">
              <figure>
                <img class="w-full"
                  src="${item.image}"
                  alt="Shoes" />
              </figure>
              <div class="my-4">
                  <h2 class="card-title">${item.pet_name}</h2>
                  <p class="">Breed: ${item.breed}</p>
                  <p class="">Birth: ${item.date_of_birth}</p>
                  <p class="">Gender: ${item.gender}</p>
                  <p class="">Price: ${item.price}</p>
              </div>

              <div class="card-actions flex justify-between">

                  <button 
                  class="border font-semibold py-1 text-[#0E7A81] px-4 rounded-md">like</button>

                  <button 
                  class="border font-semibold py-1 text-[#0E7A81] px-4 rounded-md">Adopt</button>

                  <button 
                  onclick="detailsBtn('${item.petId}')"
                  class="border font-semibold py-1 text-[#0E7A81] px-4 rounded-md">Details</button>
              </div>
        </div>
        `;
        cardContainer.append(allCardDiv)
    });

}


PetsCard()