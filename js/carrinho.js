//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhoSessao'))
//const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSessao')) || []
  
 
//FUNÇAO PARA ADICIONAR UM ITEM
const addItem = (ObjItem) => {
    itensCarrinho.push(ObjItem)


    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))

    listItens()
}

//FUNÇÃO  PARA LISTAR OS ITENS DO CARRINHO 
const listItens = () => {
    return JSON.parse(sessionStorage.getItem('carrinhoSessao')) || [];
}
  
const removeItem = (pos) => {
    itensCarrinho.splice(pos,1)


    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))
}




export {addItem,listItens,removeItem}