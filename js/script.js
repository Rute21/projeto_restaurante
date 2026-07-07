const campoPesquisa = document.querySelector(".input-pesquisa");
const cards = document.querySelectorAll(".card");


campoPesquisa.addEventListener("input", function () {

    const pesquisa = campoPesquisa.value.toLowerCase();

    cards.forEach(card => {

        const nomeProduto = card.querySelector("p").textContent.toLowerCase();

        if (nomeProduto.includes(pesquisa)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});