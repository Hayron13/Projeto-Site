let time = 1000,
currentImageIndex = 0,
images=document
    .querySelectorAll("#spaceBanner img")
max = images.length;

function nextImage(){
    images[currentImageIndex]
    .classList.remove("selectBanner")
    currentImageIndex ++
    if(currentImageIndex>=max){
        currentImageIndex=0
    }
    images[currentImageIndex]
    .classList.add("selectBanner")
}
function start(){
    setInterval(()=>{
        nextImage()
    },time)
}
window.addEventListener("load",start)
