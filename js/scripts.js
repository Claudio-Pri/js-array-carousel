console.log('js collegato');

// `

//dichiarazione array url immagini
let myImage = ["img/fantasy-1.jpeg", "img/fantasy-2.jpeg", "img/fantasy-3.jpeg", "img/fantasy-4.jpeg", "img/fantasy-5.jpeg",];

const myContainer = document.querySelector('.img-container');


for (i = 0; i < myImage.length; i++) {
    console.log(myImage[i]);

    myContainer.innerHTML += `
    <div class="item">

    <img src="${myImage[i]}" class="image" alt="image">

    </div>
    `;
}


