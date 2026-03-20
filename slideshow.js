 //  Define slides in an array
const slides = [
    { image: "slideshow-img/Beaches.png", text: "Beaches" },
    { image: "slideshow-img/eliphants.png", text: "Eliphants" },
    { image: "slideshow-img/historical.png", text: "Historical" },
    { image: "slideshow-img/party.png", text: "Party" },
    { image: "slideshow-img/tourists.png", text: "Wellcome Sri Lanka" },
];

let slideIndex = 0;
const container = document.getElementById("slideshow-container");
const dotContainer = document.getElementById("dot-container");

//  Generate slides and dots dynamically
slides.forEach((slide, i) => {
    // Slide div
    const slideDiv = document.createElement("div");
    slideDiv.className = "slide";
    
    const img = document.createElement("img");
    img.src = slide.image;
    slideDiv.appendChild(img);
    
    const textDiv = document.createElement("div");
    textDiv.className = "slide-text";
    textDiv.innerText = slide.text;
    slideDiv.appendChild(textDiv);
    
    container.appendChild(slideDiv);
    
    // Dot
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.addEventListener("click", () => currentSlide(i));
    dotContainer.appendChild(dot);
});

// Generate arrows dynamically
const prev = document.createElement("a");
prev.className = "prev";
prev.innerHTML = "&#10094;";
prev.addEventListener("click", () => plusSlides(-1));
container.appendChild(prev);

const next = document.createElement("a");
next.className = "next";
next.innerHTML = "&#10095;";
next.addEventListener("click", () => plusSlides(1));
container.appendChild(next);

//  Functions
function showSlides(index){
    const allSlides = document.getElementsByClassName("slide");
    const allDots = document.getElementsByClassName("dot");
    
    if(index >= slides.length) slideIndex = 0;
    if(index < 0) slideIndex = slides.length - 1;
    
    // Hide all slides and remove active class
    for(let s of allSlides) s.classList.remove("active");
    for(let d of allDots) d.classList.remove("active");
    
    allSlides[slideIndex].classList.add("active");
    allDots[slideIndex].classList.add("active");
}

function plusSlides(n){
    slideIndex += n;
    showSlides(slideIndex);
}

function currentSlide(n){
    slideIndex = n;
    showSlides(slideIndex);
}

//  Auto slide
showSlides(slideIndex);
setInterval(() => { plusSlides(1); }, 5000);