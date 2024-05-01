
const productContainers = document.querySelectorAll('.product-container');

// Loop through each product container
productContainers.forEach(productContainer => {
    const mainImage = productContainer.querySelector('.main-image');
    const thumbnails = productContainer.querySelectorAll('.thumbnail');

    // Add click event listener to each thumbnail
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });
});
