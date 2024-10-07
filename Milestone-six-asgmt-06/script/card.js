
// card data:
// const cardDataShow = async(id) => {
//     const res =
//     await fetch(`https://openapi.programming-hero.com/api/peddy/category${id}`)
//     const data = await res.json()
//     console.log(data);
    
//     
// }

const loadCardOnClick = async (card) => {
    // alert(card)
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${card}`)
    const data = await res.json()
    console.log(data);
}


// cardDataShow()