//PEGANDO ELEMENTO DOM
const inputcep = document.querySelector('#cep')


//CAPTURANDO O EVENTO change
inputcep.addEventListener('change',(evt)=>{

    const numCep = evt.target.value.replace(/\D/g,"")

   
    if(numCep.length !== 8){
        alert('CEP inválido')

        return
    }

    consultaCEP(numCep)

})

//FUNÇÃO CONSULTAR CEP VIACEP
const consultaCEP = async(cep) =>{
    //TENTA CONECTAR A API
    try{
  //FAZ A COMUNICAÇÃO COM A API DO VIACEP POR MEIO DA FUNÇÃO fetch
  //AWAIT - AGUARDA ATÉ OBTER UM PROMISE
     const resposta = await fetch (`https://viacep.com.br/ws/${cep}/json/`)

     if(resposta.ok){
        throw new  Error("ERRO NA REQUISIÇÃO")
     }

     const dadosEndereco = await resposta.json()

     if(dadosEndereco.erro){
        alert ('CEP não localizado')

        return
     }

     carregaInput(dadosEndereco)


     }catch(erro){
        console.log('ERRO',erro.message)
     }

}
 const campos = {
    endereco: document.querySelector('#endereco'),
    bairro: document.querySelector('#bairro'),
    cidade: document.querySelector('#cidade'),
    uf: document.querySelector('#uf'),
 }
const carregaInput = (objEndereco)=>{

}