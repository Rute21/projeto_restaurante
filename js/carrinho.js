//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(localStorage.getItem('carrinhoSessao')) || []
//const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSessao')) || []
  
 
//FUNÇAO PARA ADICIONAR UM ITEM
const addItem = (ObjItem) => {
    itensCarrinho.push(ObjItem)


    sessionStorage.setItem('carrinhosessao',itensCarrinho)

    listItens()
}


const listItens = () => {
    const listaItens = JSON.parse(sessionStorage.get('carrinhoSessao'))


   const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    listaItens.forEach(elem,i => {
        alert(`elemento  ${i+1} - ${elem.descricao_produto} - ${elem.valor_unitario} ${elem.unidade}`)
        

        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', item)





    });
}







export {addItem}