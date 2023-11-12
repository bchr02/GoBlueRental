document.addEventListener('DOMContentLoaded', function () {
  // Find all galleries on the page
  const galleries = document.querySelectorAll('.gallery');

  galleries.forEach((gallery) => {
    // Add click event to each thumbnail within the gallery
    gallery.querySelectorAll('.thumbnails img').forEach((thumbnail) => {
      thumbnail.addEventListener('click', function () {
        const newSrc = this.src; // Get the source of the clicked thumbnail
        gallery.querySelector('.active-image').src = newSrc; // Update the main image's source
      });
    });
  });

  document
    .getElementById('galleryButtonLeft')
    .addEventListener('click', function () {
      navigateGallery(-1);
    });

  document
    .getElementById('galleryButtonRight')
    .addEventListener('click', function () {
      navigateGallery(1);
    });

  var imageSources = Array.from(
    document.querySelectorAll('.thumbnails img')
  ).map(function (img) {
    return img;
  });

  let currentImageIndex = 0; // Index of the currently displayed image

  function navigateGallery(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= imageSources.length) {
      currentImageIndex = 0; // Loop back to the first image
    } else if (currentImageIndex < 0) {
      currentImageIndex = imageSources.length - 1; // Loop back to the last image
    }
    document.querySelector('.active-image').src =
      imageSources[currentImageIndex].src;

    imageSources[currentImageIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  }
});
