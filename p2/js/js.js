let mainImg = document.querySelector('#image-main');
console.log(mainImg.src);

let cartImagesArray = document.querySelectorAll('.item-image img');

let ImagesArray = document.querySelectorAll('.images-secondary__img img');

const imageMainRathReplacement = (array) => {
    array.forEach(e => {
        e.addEventListener('click', () => mainImg.src = e.src)
    });
}

imageMainRathReplacement(cartImagesArray);
imageMainRathReplacement(ImagesArray);

const plus = document.querySelector('#btn-plus');
const minus = document.querySelector('#btn-minus');

plus.addEventListener('click', () => +document.querySelector('#countProduct').innerText++)
minus.addEventListener('click', () => (
    +document.querySelector('#countProduct').innerText > 0 && +document.querySelector('#countProduct').innerText--)
)


