/*IMPORTANDO OS PRODUTOS DO ARQUIVO SCRIPT_CARRINHO*/
import{produtos} from './script_carrinho.js'

/*PEGANDO ELEMNTOR DO DOM*/
const sectionCards= document.querySelector('#cards')

//CARREGAMDO PS CARDS
const listaProdutos = () => {

    sectionCards.innerHTML = ''

   //PERCORRENDO O ARRAY DE PRODUTOS
    produtos.forEach((elem,i)=> {

    //CRIANDO O ELEMENTO DIV E DEFININDO O ATRIBUTO CARD
        const divCard = document.createElement('div')
        divCard.setAttribute('class','card')

     //CRIANDO O ELEMENTO IMG E DEFININDO OS ATRIBUTOS SRC E ALT OS VALORES DO CAMINHO DAS IMAGENS E A DESCRIÇÃO DOS PRODUTOS 
        const imgCard=document.createElement('img')
        imgCard.setAttribute('src',elem.caminho_imagem)
        imgCard.setAttribute('alt',elem.descricao_produto)

     //CRIANDO O ELEMENTO P E ATRIBUINDO A DESCRIÇÃO DOS PRODUTOS 
        const pCard = document.createElement('p')
        pCard.innerHTML = elem.descricao_produto

     //CRIANDO O ELEMENTO H2 E A ATRIBUINDO O VALOR UNITÁRIO DEIXANDO EM DUAS CASAS DECIMAIS E SUBSTITUINDO PONTO POR VÍRGULA
        const h2Card = document.createElement('h2')
        h2Card.innerHTML `R$ ${parseFloat(elem.valor_unitario).
        toFixed (2).replace('.','.')}`

     //CRIANDO O ELEMNTO BUTTON E DEFININDO OS ATRIBUTOS CLASS E A DESCRIÇÃO ADICIONAR 
        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn-add')
        btnCard.innerHTML = 'Adicionar'

     //ADICIONANDO OS ELEMENTOS FILHOS AOS DIVCARD 
        divCard.appendChild(imgCard)
        divCard.appendChild(pCard)
        divCard.appendChild(h2Card)
        divCard.appendChild(btnCard)

    //ADICIONANDO O DIVCARD A SECTION CARDS
        sectionCards.appendChild(divCard)


})  
 
}
   //CHAMANDO A FUNÇÃO LISTAPRODUTOS
       listaProdutos()