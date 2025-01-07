const imageUrls = [
    "./slider0.jpg",
    "./slider1.jpg",
    "./slider2.jpg",
    "./slider3.jpg",
    "./slider4.jpg"
  ];

var imageContainer = document.getElementById("image-container");
var nextButton = document.getElementById("next-button");
var previousButton = document.getElementById("previous-button");

var currentIndex = 1;
var length = imageUrls.length;
imageContainer.src = imageUrls[currentIndex];

nextButton.addEventListener("click", function() {
    currentIndex++;
    if(currentIndex>length-1){
        currentIndex=0;
        imageContainer.src = imageUrls[currentIndex];
        console.log(currentIndex);
    }
    else{
        imageContainer.src = imageUrls[currentIndex];
        console.log(currentIndex);
    }
});

previousButton.addEventListener("click", function(){
    currentIndex--;

    if(currentIndex<0){
        currentIndex = length-1;
        imageContainer.src = imageUrls[currentIndex];
        console.log(currentIndex);
    }
    else{
        imageContainer.src = imageUrls[currentIndex];
        console.log(currentIndex);
    }
})