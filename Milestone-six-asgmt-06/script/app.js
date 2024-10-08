
// =======================================================================// * dynamic button create here>;

const showButtonCategory = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    const Data = await res.json()
    displayCategoriesBtn(Data.categories);
}

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

            showButtonCategory()





// default all card ================================================================ //* default all card==>

const PetsCard = async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    const data = await res.json()
    // console.log(data.pets);
    displayAllPetsCard(data.pets);
}

        const displayAllPetsCard = (items) => {
            const cardContainer = document.getElementById('card-container');

            items.forEach(item => {
                // console.log(item);

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
                        onclick="likeBtn(like)"
                        class="border font-semibold py-1 text-[#0E7A81] px-3 rounded-md">like</button>

                        <button 
                        onclick="adoptBtn()"
                        class="border font-semibold py-1 text-[#0E7A81] px-3 rounded-md">Adopt</button>

                        <button 
                        onclick="detailsBtn('${item.petId}')"
                        class="border font-semibold py-1 text-[#0E7A81] px-3 rounded-md">Details</button>
                    </div>
                </div>
                `;
                cardContainer.append(allCardDiv)
            });

        }

        PetsCard()




// card category here by button ====================================================> //* (dog, cat, rabbit, bird )

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
                            onclick="likeBtn('${card.image}')"
                            class="border font-semibold py-1 text-[#0E7A81] px-3 rounded-md">like</button>
        
                            <button 
                            onclick="adoptBtn()"
                            class="border font-semibold py-1 text-[#0E7A81] px-3 rounded-md">Adopt</button>
        
                            <button 
                            onclick="detailsBtn('${card.petId}')"
                            class="border font-semibold py-1 text-[#0E7A81] px-3 rounded-md">Details</button>
                        </div>
                </div>
            `;
            cardContainer.append(cardDiv)
        
        });
        }


loadCardOnClick()









// card inside button =================================================================> // * (like, adopt, details)

// like btn here
    const likeBtn = (like) => {
        console.log(like);
    }

// adopt btn here
    const adoptBtn = () => {
        document.getElementById('my_modal_3').showModal();
        
            let sec = 5;
            setInterval(function() {
                if(sec >0 ){
                    sec--;
                }
          
              if (sec == 0) {
                document.getElementById('my_modal_3').close();
              } else{
                document.getElementById("contentContainer").innerHTML = sec;
                
              }
            }, 1000);
    }

// details 
        const detailsBtn = async (id) => {
            const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
            const data = await res.json()
            detailsBtnShowModal(data.petData);
        }

        const detailsBtnShowModal = (modals) => {
            console.log(modals);
            document.getElementById('my_modal_3').showModal();
        
            const contentContainer = document.getElementById('contentContainer')
            const div = document.createElement('div')
            div.innerHTML = `
                ${modals.category}
            `;
            contentContainer.appendChild(div);
        }


