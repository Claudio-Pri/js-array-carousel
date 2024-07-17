console.log('js collegato');

// `
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico
//e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito
//e un semplice ciclo for che concatena un template literal.

let myImage = ["img/fantasy-1.jpeg", "img/fantasy-2.jpeg", "img/fantasy-3.jpeg", "img/fantasy-4.jpeg", "img/fantasy-5.jpeg",];

const myContainer = document.querySelector('.img-container');


for (i = 0; i < myImage.length; i++) {
    console.log(myImage[i]);

}

myContainer.innerHTML += `
<div class="item">

  <img src="${myImage[0]}" class="image" alt="image">

</div>
`;

//perchè non vede la regola css di .image?
console.log('mycontainer', myContainer, typeof myContainer);