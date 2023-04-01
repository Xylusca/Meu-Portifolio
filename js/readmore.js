// Seleciona os botões "Ler mais" e "Ler menos"
const readMoreBtn = document.querySelectorAll('.read-more-btn');
const readLessBtn = document.querySelectorAll('.read-less-btn');

// Seleciona os elementos que serão modificados
const dots = document.getElementById("dots");
const moreText = document.getElementById("more");

// Função que alterna o estado do texto
function toggleText(button) {
    const cardBody = button.closest('.card-body');
    const dots = cardBody.querySelector('.dots');
    const moreText = cardBody.querySelector('.more');

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        button.innerHTML = "Ler Mais";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        button.innerHTML = "Ler Menos";
        moreText.style.display = "inline";
    }
}

readMoreBtn.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        toggleText(button);
    });
});

readLessBtn.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        toggleText(button);
    });
});
