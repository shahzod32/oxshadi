let imeges = ["./m1.jfif","./m2.jfif","./m3.jfif"];


let currentIndex = 0;

function showImeges(index) {
    let slide = document.querySelector("#slide");
    slide.src = imeges[index];
}
let oldingi = document.querySelector("#oldingi");
let keyingi = document.querySelector("#keyingi");
oldingi.addEventListener("click", function (params) {
   currentIndex = (currentIndex - 1 + imeges.length)% imeges.length;
   showImeges(currentIndex)
})
    keyingi.addEventListener("click", function (params) {
   
        currentIndex = (currentIndex +1)% imeges.length;
        showImeges(currentIndex)
        
})