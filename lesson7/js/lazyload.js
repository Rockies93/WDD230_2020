/*Based on Mozzilla Instructions*/

let imageLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

imageLoad.forEach((img) => {
    loadImages(img);
  });


/*Based on video-- Keeping it here because I couldn't get it to work, but I would like to revisit it*/

/*const images = document.querySelectorAll("[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new InstersectionOberver((entries,imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

function preloadImg(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src= src;
}

images.forEach(image => {
    imgObserver.oberve(image);
})*/