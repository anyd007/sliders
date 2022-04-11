const slideShow = () => {
//   const slides = document.getElementById(slidesId);
  const img = document.querySelectorAll(".sliderOne-images img");
  const sliderOneImages = document.querySelector(".sliderOne-images");
  
  let imageIndex = 0;

  setInterval(function() {
    imageIndex += 1;
    if(imageIndex === img.length){
            imageIndex = 0
    }
    sliderOneImages.style.transform = `translate3d(${imageIndex * -1200}px,0,0)`
  }, 3000);
};

slideShow();
