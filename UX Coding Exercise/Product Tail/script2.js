
const mainImage = document.querySelector('.main-image');
const thumbnails = document.querySelectorAll('.thumbnail');


// event listener to each thumbnail
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
    });
});
