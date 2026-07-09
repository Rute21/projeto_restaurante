/*IMPORTANDO OS PRODUTOS DO ARQUIVO SCRIPT_CARRINHO*/
import{produtos} from './script_carrinho.js'

/*PEGANDO ELEMNTOR DO DOM*/
const sectionCards= document.querySelector('#cards')

//CARREGAMDO PS CARDS
const listaProdutos = () => {

    sectionCards.innerHTML = ''

    produtos.forEach((elem,i)=> {
        const divCards = document.createElement('div')
        divCards.setAttribute('class','card')

        const imgCard=document.createElement('img')
        imgCard.setAttribute('src',elem.caminho_imagem)
        imgCard.setAttribute('alt',elem.descricao_produto)

        const pCard = document.createElement('p')
        pCard.innerHTML = elem.descricao_produto

        const h2Card = document.createElement('h2')
        h2Card.innerHTML `R$ ${parseFloat(elem.valor_unitario).
        toFixed (2).replace('.','.')}`

        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn-add')
        btnCard.innerHTML = 'Adicionar'

        divCards.appendChild(imgCard)
        divCards.appendChild(pCard)
        divCards.appendChild(h2Card)
        divCards.appendChild(btnCard)




})  
 

}