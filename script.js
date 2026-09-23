document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os carrosséis da página
    const carouselContainers = document.querySelectorAll(".carousel-container");

    carouselContainers.forEach((container) => {
        const images = container.querySelectorAll(".carousel img");
        const prevBtn = container.querySelector(".prev-btn");
        const nextBtn = container.querySelector(".next-btn");
        
        let currentIndex = 0;

        // Função para atualizar qual imagem está visível
        function updateCarousel(newIndex) {
            images[currentIndex].classList.remove("active");
            currentIndex = newIndex;
            images[currentIndex].classList.add("active");
        }

        // Botão Avançar (Direita)
        nextBtn.addEventListener("click", () => {
            // Se for a última imagem, volta para o índice 0 (primeira)
            const nextIndex = (currentIndex + 1) % images.length;
            updateCarousel(nextIndex);
        });

        // Botão Voltar (Esquerda)
        prevBtn.addEventListener("click", () => {
            // Se for a primeira imagem, vai para o índice da última
            const prevIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel(prevIndex);
        });
    });
});