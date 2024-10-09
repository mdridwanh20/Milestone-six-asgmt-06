

//////////////////////////// * dynamic button ;
//////////////////////////// * click =========> cat, dog, rabbit, bird

const showButtonCategory = async () => {

    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    const Data = await res.json()
    // console.log(Data.categories);
    displayCategoriesBtn(Data.categories);
}

    const displayCategoriesBtn = (pets) => {
    // card container
    const adoptCtnContainer = document.getElementById('adopt-btn-container')
    pets.forEach((pet) => {
    // console.log(pet);
       
    
        
        // dynamic button create
        const divBtn = document.createElement('div')
        divBtn.innerHTML = `

        <div class="flex justify-center">
            <button
                onclick="loadCardOnClick('${pet.category}')"
                class="border petBtn btn px-8 py-2 rounded-md hover:bg-[#0E7A811A]">
                <img class="w-6"src="${pet.category_icon}"/>${pet.category}
            </button>
        </div>
        `;
        adoptCtnContainer.append(divBtn)

    });


};
showButtonCategory()




 //////////////////// * Sort by price button ////////////////////////////
//  const sortPriceBtn = async (id)  => {
//     const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
//     const data = await res.json();
//     console.log(data.pets);
//  }




 //////////////////// * default all card ///////////////////////////////
 //////////////////// * (innerHtml = card > with ternary use in the card )
 //////////////////// * innerHtml = card > with ternary use in the card
 //////////////////// * innerHtml = card inside button > like, adopt , details.


    const PetsCard = async() => {
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        const data = await res.json()
        // console.log(data.pets);
        displayAllPetsCard(data.pets);
    }
    
    const displayAllPetsCard = (items) => {
            const cardContainer = document.getElementById('card-container');
            
    // problem here: 
              // sort by button;
            //   const petId = [
            //     {name: "pet_name"},
            //     {price:  1200},
            //  ];
             
            //  petId.sort((a, b) => a.name - b.price)
             

            cardContainer.innerHTML = "";
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
    
                                    ${item.pet_name === null || item.pet_name === undefined ? 'Not available:' :
                                    `<h2 class="card-title">${item.pet_name}</h2>`}
    
                                    ${item.breed === null || item.breed === undefined ? 'Not available:' :
                                    `<p class="flex items-center"> 
                                        <i class='text-xl pr-2 bx bx-grid-small'></i>
                                        Breed: ${item.breed}</p>`}
    
                                        ${item.date_of_birth === null || item.date_of_birth === undefined ? 'Not available:' :
                                    `<p class="flex items-center">
                                        <i class='text-xl pr-2 bx bxs-bookmark-star'></i> 
                                        Birth: ${item.date_of_birth}</p>`}
                                        
                                    ${item.gender === null || item.gender === undefined ? 'Not available:' :
                                    `<p class="flex items-center">
                                        <i class='text-xl pr-2 bx bx-female-sign'></i>
                                        Gender: ${item.gender}</p>`}
    
                                    ${item.price === null || item.price === undefined ? 'Not available:' :
                                    `<p class="flex items-center"> 
                                        <i class='text-xl pr-2 bx bx-money-withdraw'></i>
                                        Price: ${item.price}</p>`}
                    </div>
    
                        <div class="card-actions flex justify-between">
                            <button
                            onclick="likeBtn('${item.image}')"
                            class="border font-semibold py-1 text-[#0E7A81] px-3 rounded-md"><i class='bx bx-like'></i></button>
    
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
        
        



//*///////// ( card ====> click > dog, cat, rabbit, bird ) /////////////
////////////////////////////////////////////// * * spinner.
////////////////////////////////////////////// * undefine data = condition 
////////////////////////////////////////////// * innerHtml = card > with ternary use in the card
////////////////////////////////////////////// * card inside button > like, adopt , details.


const loadCardOnClick = async (id) => {
    const spinner = document.getElementById('spinner');
    const mainContainer = document.getElementById('main-container');

    spinner.classList.remove('hidden')
    mainContainer.classList.add('hidden')


    setTimeout(() => {
        spinner.classList.add('hidden')
        mainContainer.classList.remove('hidden')

    }, 1000);

    
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    const data = await res.json()
    showAllCard(data.data)
}
        const showAllCard = (cards) => {
            const cardContainer = document.getElementById('card-container')
            cardContainer.innerHTML = "";

        // undefine data condition:                                                  // problem : undefine content.
           if(cards.length === 0){
                cardContainer.classList.remove('grid')
                cardContainer.innerHTML = `
                
                    <div class="w-full lg:w-10/12 m-auto flex flex-col h-[400px] items-center justify-center">
                        <img src="./images/error.webp" alt="">
                        <h2 class="font-bold text-3xl">No Information Available </h2>
                        <p class="text-center py-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                        its layout. The point of using Lorem Ipsum is that it has a.</p>

                    </div>
                `;
                return;

           } else{
                cardContainer.classList.add('grid')
                cardContainer.innerHTML = "";
           }


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

                                ${card.pet_name === null || card.pet_name === undefined ? 'Not available:' :
                                `<h2 class="card-title">${card.pet_name}</h2>`}


                                ${card.breed === null || card.breed === undefined ? 'Not available:' :
                                `<p class="flex items-center"> 
                                    <i class='text-xl pr-2 bx bx-grid-small'></i>
                                    Breed: ${card.breed}</p>`}


                                 ${card.date_of_birth === null || card.date_of_birth === undefined ? 'Not available:' :
                                `<p class="flex items-center">
                                    <i class='text-xl pr-2 bx bxs-bookmark-star'></i> 
                                    Birth: ${card.date_of_birth}</p>`}

                                    
                                ${card.gender === null || card.gender === undefined ? 'Not available:' :
                                `<p class="flex items-center">
                                    <i class='text-xl pr-2 bx bx-female-sign'></i>
                                    Gender: ${card.gender}</p>`}

                                ${card.price === null || card.price === undefined ? 'Not available:' :
                                `<p class="flex items-center"> 
                                    <i class='text-xl pr-2 bx bx-money-withdraw'></i>
                                    Price: ${card.price}</p>`}

                        </div>
        
                        <div class="card-actions flex justify-between">
        
                            <button 
                            onclick="likeBtn('${card.image}')"
                            class="border font-semibold py-1 text-[#0E7A81] px-3 rounded-md"><i class='bx bx-like'></i></button>
        
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
// loadCardOnClick()







//*////////////////////// card inside ///////////////////////////////
/////////////////////////////////////////////////////// * like function 
/////////////////////////////////////////////////////// * adopt function  with modals
/////////////////////////////////////////////////////// * details function  with modals

// like btn here
    const likeBtn = (like) => {
        console.log(like);
        
        // like container;
        const likeImageContainer = document.getElementById('likeImageContainer');

        const likeDiv = document.createElement('div')
        likeDiv.innerHTML = `
            <img class="p-2 border rounded-md" src="${like}"/>
        `;
        
        likeImageContainer.append(likeDiv);
    }



// * adopt Button here.
    // let num = 0 ;
    // const timeOut = setInterval(() => {
    //     num++;
        
    //     if(timeOut > 5){
    //         clearInterval(timeOut)
    //     }
    // }, 1000)


    // const adoptBtn = () =>{

    //     document.getElementById('my_modal_2').showModal();
    //     const adoptContainer = document.getElementById('adoptModal');

    //     const adoptDiv = document.createElement('div');
    //     adoptDiv.innerHTML = `
        
    //             <div class="modal-box flex justify-center items-center flex-col p-10">
    //                 <h3 class="text-2xl font-bold">Congrats</h3>
    //                 <p class="py-1 capitalize text-center">adoption process is start for your pet</p>
                    
    //             </div>
    //     `;
    //     adoptContainer.appendChild(adoptDiv);
        
    // } 

 
 


// details modals here.
    const detailsBtn = async (id) => {
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
        const data = await res.json()
        detailsBtnShowModal(data.petData);
    }
        //const {petId, category, date_of_birth, 
        //price, image, gender, pet_details, vaccinated_status, pet_name } = modals;

        const detailsBtnShowModal = (modals) => {
            console.log(modals);
            document.getElementById('my_modal_3').showModal();
        
            const detailsModalContainer = document.getElementById('detailsModalContainer')
            detailsModalContainer.innerHTML = " ";
            const div = document.createElement('div')
            div.innerHTML = `

                <div class="pt-5 pb-1  ">
                    <img class="w-full"src="${modals.image}" alt="" />

                    <div class="my-4 border-b-2">
                        <h2 class="card-title">${modals.pet_name}</h2>

                                ${modals.breed === null || modals.breed === undefined ? 'Not available:' : 
                                `<p class="flex items-center"> 
                                    <i class='text-xl pr-2 bx bx-grid-small'></i>
                                    Breed: ${modals.breed}</p>` }  
                                
                                
                                ${modals.date_of_birth === null || modals.date_of_birth === undefined ? 'Not available:' : 
                                `<p class="flex items-center">
                                    <i class='text-xl pr-2 bx bxs-bookmark-star'></i> 
                                    Birth: ${modals.date_of_birth}</p>`}


                                ${modals.gender === null || modals.gender === undefined ? 'Not available:' :
                                `<p class="flex items-center">
                                    <i class='text-xl pr-2 bx bx-female-sign'></i>
                                    Gender: ${modals.gender}</p>`}
                                

                                ${modals.vaccinated_status === null || modals.vaccinated_status === undefined ? 'Not available:' :
                                `<p class="flex items-center">
                                    <i class='text-xl pr-2 bx bx-move'></i>
                                    vaccinated_status: ${modals.vaccinated_status}</p>`}


                                ${modals.vaccinated_status === null || modals.vaccinated_status === undefined ? 'Not available:' :
                                `<p class="flex items-center"> 
                                    <i class='text-xl pr-2 bx bx-money-withdraw'></i>
                                    Price: ${modals.price}</p>`}

                    </div>

                    <div>
                        <p class=""> <span class="font-semibold"> Details Information </span> : <br> ${modals.pet_details}</p>
                           <div class="flex justify-center items-center border-1 border-[#0E7A81] rounded-md mt-4 bg-[#0E7A811A]">
                             <form method="dialog">
                                <button class="petBtn px-8 py-2 font-semibold text-[#0E7A81]  ">Cancel</button>
                            </form>
                           </div>

                    </div>

                </div>


            `;

        detailsModalContainer.appendChild(div);
}


