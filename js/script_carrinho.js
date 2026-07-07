const botoes = document.querySelectorAll(".btn-add");


// ===============================
// ADICIONAR PRODUTO AO CARRINHO
// ===============================

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


if (botoes.length > 0) {

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            const card = botao.parentElement;

            const nome = card.querySelector("p").textContent;

            const precoTexto = card.querySelector("h3").textContent;

            const preco = Number(
                precoTexto.replace("R$", "").replace(",", ".")
            );


            const produtoExistente = carrinho.find(
                item => item.nome === nome
            );


            if (produtoExistente) {

                produtoExistente.quantidade++;

            } else {

                carrinho.push({
                    nome: nome,
                    preco: preco,
                    quantidade: 1
                });

            }


            localStorage.setItem(
                "carrinho",
                JSON.stringify(carrinho)
            );


            const mensagem = document.createElement("div");

            mensagem.textContent =
                "✅ " + nome + " adicionado ao carrinho!";

            mensagem.className = "mensagem-carrinho";

            document.body.appendChild(mensagem);


            setTimeout(() => {

                mensagem.remove();

            }, 2000);


        });

    });

}





// ===============================
// MOSTRAR CARRINHO
// ===============================


const listaCarrinho = document.getElementById("lista-carrinho");

const totalElemento = document.getElementById("total");

const freteSelect = document.getElementById("frete-select");

const freteElemento = document.getElementById("valor-frete");



if (listaCarrinho) {

    atualizarCarrinho();

}





function atualizarCarrinho() {


    if (!listaCarrinho) return;


    listaCarrinho.innerHTML = "";


    let subtotal = 0;



    carrinho.forEach((item, index) => {


        subtotal += item.preco * item.quantidade;



        const li = document.createElement("li");



        li.innerHTML = `

            <strong>${item.nome}</strong>

            <br>

            Quantidade:

            <button onclick="diminuirQuantidade(${index})">
                -
            </button>


            ${item.quantidade}


            <button onclick="aumentarQuantidade(${index})">
                +
            </button>


            <br>


            Preço:
            R$ ${(item.preco * item.quantidade)
            .toFixed(2)
            .replace(".", ",")}


            <br>


            <button class="btn-remover" onclick="removerItem(${index})">
                🗑️ Remover
            </button>


            <hr>

        `;



        listaCarrinho.appendChild(li);


    });



    // ===============================
    // CALCULAR FRETE
    // ===============================

    let valorFrete = 0;


    if (freteSelect) {

        valorFrete = Number(freteSelect.value);

    }



    if (freteElemento) {

        freteElemento.textContent =
            "R$ " + valorFrete.toFixed(2).replace(".", ",");

    }




    // ===============================
    // TOTAL FINAL
    // ===============================


    let total = subtotal + valorFrete;



    if (totalElemento) {

        totalElemento.textContent =
            "R$ " + total.toFixed(2).replace(".", ",");

    }



    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );


}





// ===============================
// AUMENTAR QUANTIDADE
// ===============================


function aumentarQuantidade(index) {


    carrinho[index].quantidade++;


    atualizarCarrinho();


}





// ===============================
// DIMINUIR QUANTIDADE
// ===============================


function diminuirQuantidade(index) {


    if (carrinho[index].quantidade > 1) {


        carrinho[index].quantidade--;


    } else {


        carrinho.splice(index, 1);


    }


    atualizarCarrinho();


}





// ===============================
// REMOVER PRODUTO
// ===============================


function removerItem(index) {


    carrinho.splice(index, 1);


    atualizarCarrinho();


}





// ===============================
// ATUALIZAR FRETE AO TROCAR OPÇÃO
// ===============================


if (freteSelect) {

    freteSelect.addEventListener(
        "change",
        atualizarCarrinho
    );

}



