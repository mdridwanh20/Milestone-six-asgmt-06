
const loadCardOnClick = async (id) => {
    // alert(card)
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    const data = await res.json()
    // console.log(data.pets);
    showAllCard(data.data)

}

const showAllCard = (cards) => {
  const cardContainer = document.getElementById('card-container')

  cardContainer.innerHTML = "";
  cards.forEach(card => {
    const cardDiv = document.createElement('div')
    cardDiv.innerHTML = `

     <div class=" rounded-md border bg-base-100 p-4">
              <figure>
                <img class="w-full"
                  src="${card.image}"
                  alt="Shoes" />
              </figure>
              <div class="my-4">
                  <h2 class="card-title">${card.pet_name}</h2>
                  <p class="">Breed: ${card.breed}</p>
                  <p class="">Birth: ${card.date_of_birth}</p>
                  <p class="">Gender: ${card.gender}</p>
                  <p class="">Price: ${card.price}</p>
              </div>

              <div class="card-actions flex justify-between">

                  <button 
                  class="border font-semibold py-1 text-[#0E7A81] px-4 rounded-md">like</button>

                  <button 
                  class="border font-semibold py-1 text-[#0E7A81] px-4 rounded-md">Adopt</button>

                  <button 
                  onclick="detailsBtn('${card.petId}')"
                  class="border font-semibold py-1 text-[#0E7A81] px-4 rounded-md">Details</button>
              </div>
        </div>
    `;
    cardContainer.append(cardDiv)

});




    
}

loadCardOnClick()

//onclick="detailsBtn('${cards}')"
