const carousel = document.querySelector(".carousel");
primeiraImg = carousel.querySelectorAll("img")[0];
setas = document.querySelectorAll(".wrapper i");

let isDragStart = false,
    isDragging = false,
    prevPageX,
    prevScrollLeft,
    positionDiff;

const exibirIcone = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    setas[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    setas[1].style.display =
        carousel.scrollLeft == scrollWidth ? "none" : "block";
};

setas.forEach((icon) => {
    icon.addEventListener("click", () => {
         // Pega a largura da primeira imagem e adiciona 14 de margem
        let primeiraImgWidth = primeiraImg.clientWidth + 14;
        carousel.scrollLeft +=
            icon.id == "esquerda" ? -primeiraImgWidth : primeiraImgWidth;
        setTimeout(() => exibirIcone(), 60);
    });
});

const autoSlide = () => {
    if (carousel.scrollLeft == carousel.scrollWidth - carousel.clientWidth)
        return;

    positionDiff = Math.abs(positionDiff);
    let primeiraImgWidth = primeiraImg.clientWidth + 14;
    let ValDifference = primeiraImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
        return (carousel.scrollLeft +=
            positionDiff > primeiraImgWidth / 3 ? ValDifference : -positionDiff);
    }
    carousel.scrollLeft -=
        positionDiff > primeiraImgWidth / 3 ? ValDifference : -positionDiff;
};

const dragStart = (e) => {
    // Atualiza os valores das variaveis no mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
    // Arrasta as imagens do carousel para a esquerda conforme o ponteiro do mouse
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    exibirIcone();
};

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
};

window.ondragstart = function () {
    return false;
};
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);
