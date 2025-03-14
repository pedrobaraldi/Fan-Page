document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".img-hanger, .cartao").forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
            const folder = this.getAttribute("data-folder");
            const page = this.getAttribute("data-page");

            if (folder && page) {
                // Redireciona diretamente para a nova página
                window.location.href = `${folder}/${page}/index.html`;
            }
        });
    });
});

function loadPage(folder, page) {
    fetch(`${folder}/${page}/index.html/`)
        .then(response => response.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;
            loadCSS(folder, page);
        })
        .catch(() => {
            document.getElementById("content").innerHTML = "<p>Página não encontrada</p>";
        });
}

function loadCSS(folder, page) {
    document.getElementById("dynamic-style").href = `${folder}/${page}/style.css`;
}

window.onpopstate = (event) => {
    if (event.state) {
        loadPage(event.state.folder, event.state.page);
    }
};




document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.img-hanger-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    const scrollAmount = 370; // Ajuste conforme o tamanho das imagens + gap

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const text = "Welcome Lumon";
    const textContainer = document.getElementById("animated-text");

    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.classList.add("letter");

        // Adiciona a classe "space" ao espaço entre "Welcome" e "LUMON"
        if (index === 7) { // O espaço está no índice 7
            span.classList.add("space");
        }

        // Adiciona a classe "lumon-letter" para as letras de "LUMON"
        if (index >= 8) { // "LUMON" começa no índice 10
            span.classList.add("lumon-letter");
        }

        textContainer.appendChild(span);

        setTimeout(() => {
            span.style.transform = "translateX(0)";
        }, index * 200);
    });
});

