//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhosessao'))
//const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSessao')) || []
  
 
//FUNÇAO PARA ADICIONAR UM ITEM
const addItem = (ObjItem) => {
    itensCarrinho.push(ObjItem)


    sessionStorage.setItem('carrinhosessao', JSON.stringify(itensCarrinho))

    listItens()
}

//FUNÇÃO  PARA LISTAR OS ITENS DO CARRINHO 
const listItens = () => {
    const listaItens = JSON.parse(sessionStorage.getItem('carrinhosessao'))

   return listaItens
  
}




export {addItem,listItens}