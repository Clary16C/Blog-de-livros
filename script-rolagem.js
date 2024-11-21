
document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".recomendacoes-wrapper");
    const container = document.querySelector(".recomendacoes-container");

    // Configuração inicial
    let scrollSpeed = 1; // Velocidade da rolagem (pixels por frame)
    let isPaused = false;

    // Duplica os itens no container para criar o efeito infinito
    function duplicateItems() {
        const items = Array.from(container.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            container.appendChild(clone);
        });
    }

    duplicateItems();

    // Função para rolar o conteúdo
    function scrollContent() {
        if (!isPaused) {
            container.scrollLeft += scrollSpeed;

            // Quando atingir o final, reinicia a posição
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0;
            }
        }

        requestAnimationFrame(scrollContent);
    }

    // Pausar a rolagem ao passar o mouse
    wrapper.addEventListener("mouseover", () => {
        isPaused = true;
    });

    // Retomar a rolagem ao remover o mouse
    wrapper.addEventListener("mouseout", () => {
        isPaused = false;
    });

    // Inicia a rolagem
    scrollContent();
});
