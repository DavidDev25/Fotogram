myImageArray = [
   "./assets/ContentImages/img1.jpg",
   "./assets/ContentImages/img2.jpg",
   "./assets/ContentImages/img3.jpg",
   "./assets/ContentImages/img4.png",
   "./assets/ContentImages/img5.jpg",
   "./assets/ContentImages/img6.jpg"
]

let currentIndex = 0;

function render(){
   let contentRef = document.getElementById('myContent');
   for (let index = 0; index < myImageArray.length; index++){
       contentRef.innerHTML +=  `
       <div onclick="createOverlay(${index});openModal();" class="myImages">
        <img class="cspointer" src="${myImageArray[index]}"></div>`;
   }
}

function createOverlay(index){
   currentIndex = index;
   showFullScreen(myImageArray[currentIndex]);
   let overlayRef = document.getElementById('overlay');
   overlayRef.classList.remove('d_None');
   
}

function showFullScreen(imagePath){
   let overlayRef = document.getElementById('overlay')
   overlayRef.src = imagePath;
}


function openModal() {
   document.getElementById("myModal").style.display = "block";
}

function closeModal(){
   document.getElementById("myModal").style.display = "none";
}

function changeImage(direction) {
   currentIndex += direction;
   if (currentIndex < 0) {
       currentIndex = myImageArray.length - 1;
   } else if (currentIndex >= myImageArray.length) {
       currentIndex = 0;
   }
   showFullScreen(myImageArray[currentIndex]);
}