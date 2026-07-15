
const produtos = [
    {
      id_produto: 1,
      descricao_produto: "Bífe Acebolado Com Fritas",
      valor_unitario: 22.00,
      unidade: "prato",
      caminho_imagem: "imagens/bife_acebolado_fritas.png",
      id_secao: 1,
      secao: "Pratos"
    },
    {
      id_produto: 2,
      descricao_produto: "Coxinha",
      valor_unitario: 7.00,
      unidade: "unidade",
      caminho_imagem: "imagens/coxinha.png",
      id_secao: 2,
      secao: "Salgados"
    },
    {
      id_produto: 3,
      descricao_produto: "Empanado de Frango Com Fritas",
      valor_unitario: 20.00,
      unidade: "prato",
      caminho_imagem: "imagens/empanado_fritas.png",
      id_secao: 1,
      secao: "Pratos"
    },
    {
      id_produto: 4,
      descricao_produto: "PF com Feijoada",
      valor_unitario: 25.00,
      unidade: "prato",
      caminho_imagem: "imagens/feijoada.png.png",
      id_secao: 1,
      secao: "Pratos"
    },
    {
      id_produto: 5,
      descricao_produto: "PF com Frango e Farofa",
      valor_unitario: 22.00,
      unidade: "prato",
      caminho_imagem: "imagens/frango_com_farofa.png",
      id_secao: 1,
      secao: "Pratos"
    },
    {
      id_produto: 6,
      descricao_produto: "Carne Com Legumes",
      valor_unitario: 30.00,
      unidade: "prato",
      caminho_imagem: "imagens/carne_com_legumes.png",
      id_secao: 1,
      secao: "Pratos"
    },
    {
      id_produto: 7,
      descricao_produto: "Churrasco",
      valor_unitario: 10.00,
      unidade: "porção",
      caminho_imagem: "imagens/churrasco.png.png",
      id_secao: 1,
      secao: "Pratos"
    },
    {
      id_produto: 8,
      descricao_produto: "Hambúrguer com Fritas",
      valor_unitario: 19.00,
      unidade: "combo",
      caminho_imagem: "imagens/hamburguer_batata.jpg",
      id_secao: 3,
      secao: "Lanches"
    },
    {
      id_produto: 9,
      descricao_produto: "Lasanha",
      valor_unitario: 19.00,
      unidade: "prato",
      caminho_imagem: "imagens/lasanha.pnj.jpg",
      id_secao: 1,
      secao: "Pratos"
    },
    {
      id_produto: 10,
      descricao_produto: "Macarrão",
      valor_unitario: 20.00,
      unidade: "prato",
      caminho_imagem: "imagens/macarrao.png",
      id_secao: 1,
      secao: "Pratos"
    },
    {
      id_produto: 11,
      descricao_produto: "Macarrão na Pressão",
      valor_unitario: 25.00,
      unidade: "prato",
      caminho_imagem: "imagens/macarrao_na_pressão.png",
      id_secao: 1,
      secao: "Pratos"
    },
    {
      id_produto: 12,
      descricao_produto: "Panquecas",
      valor_unitario: 22.00,
      unidade: "prato",
      caminho_imagem: "imagens/panqueca.png",
      id_secao: 1,
      secao: "Pratos"
    },
    {
      id_produto: 13,
      descricao_produto: "PF com Bife",
      valor_unitario: 25.00,
      unidade: "prato",
      caminho_imagem: "imagens/prato_feito_bife.pnj.jpg",
      id_secao: 1,
      secao: "Pratos"
    },
    {
      id_produto: 14,
      descricao_produto: "Salada de Maionese",
      valor_unitario: 12.00,
      unidade: "porção",
      caminho_imagem: "imagens/salada_maionese.png",
      id_secao: 4,
      secao: "Saladas"
    },
    {
      id_produto: 15,
      descricao_produto: "Salada de Repolho",
      valor_unitario: 12.00,
      unidade: "porção",
      caminho_imagem: "imagens/salada_repolho.png",
      id_secao: 4,
      secao: "Saladas"
    },
    {
      id_produto: 16,
      descricao_produto: "Suco de Abacaxi",
      valor_unitario: 7.00,
      unidade: "copo",
      caminho_imagem: "imagens/suco_abacaxi.png",
      id_secao: 5,
      secao: "Bebidas"
    },
    {
      id_produto: 17,
      descricao_produto: "Suco de Laranja",
      valor_unitario: 7.00,
      unidade: "copo",
      caminho_imagem: "imagens/suco_laranja.png",
      id_secao: 5,
      secao: "Bebidas"
    },
    {
      id_produto: 18,
      descricao_produto: "Suco de Maracujá",
      valor_unitario: 7.00,
      unidade: "copo",
      caminho_imagem: "imagens/suco_maracuja.png",
      id_secao: 5,
      secao: "Bebidas"
    },
    {
      id_produto: 19,
      descricao_produto: "Suco de Morango",
      valor_unitario: 7.00,
      unidade: "copo",
      caminho_imagem: "imagens/suco_morango.png",
      id_secao: 5,
      secao: "Bebidas"
    },
    {
      id_produto: 20,
      descricao_produto: "Fatia Banoffe",
      valor_unitario: 16.50,
      unidade: "fatia",
      caminho_imagem: "imagens/fatia_banoffe.png",
      id_secao: 6,
      secao: "Sobremesas"
    },
    {
      id_produto: 21,
      descricao_produto: "Fatia Torta Alemã",
      valor_unitario: 16.50,
      unidade: "fatia",
      caminho_imagem: "imagens/fatia_torta_alema.png",
      id_secao: 6,
      secao: "Sobremesas"
    },
    {
      id_produto: 22,
      descricao_produto: "Fatia Torta Holandesa",
      valor_unitario: 16.50,
      unidade: "fatia",
      caminho_imagem: "imagens/fatia_torta_holandesa.png",
      id_secao: 6,
      secao: "Sobremesas"
    },
    {
      id_produto: 23,
      descricao_produto: "Brownie Recheado",
      valor_unitario: 8.00,
      unidade: "unidade",
      caminho_imagem: "imagens/brownie_recheado.png",
      id_secao: 6,
      secao: "Sobremesas"
    },
    {
      id_produto: 24,
      descricao_produto: "Coxinha de Morango com Chocolate",
      valor_unitario: 8.50,
      unidade: "unidade",
      caminho_imagem: "imagens/coxinha_de_morango.png",
      id_secao: 6,
      secao: "Sobremesas"
    },
    {
      id_produto: 25,
      descricao_produto: "Petit Gateau",
      valor_unitario: 12.00,
      unidade: "unidade",
      caminho_imagem: "imagens/petit_gateau.png",
      id_secao: 6,
      secao: "Sobremesas"
    },
    {
      id_produto: 26,
      descricao_produto: "Torta Gelada de Morango",
      valor_unitario: 16.50,
      unidade: "fatia",
      caminho_imagem: "imagens/torta_gelada_morango.png",
      id_secao: 6,
      secao: "Sobremesas"
    },
    {
      id_produto: 27,
      descricao_produto: "Coxinha de Ninho com Morango",
      valor_unitario: 8.50,
      unidade: "unidade",
      caminho_imagem: "imagens/coxinha_de_ninho.png",
      id_secao: 6,
      secao: "Sobremesas"
    },
    {
      id_produto: 28,
      descricao_produto: "Sobremesa na Taça",
      valor_unitario: 16.50,
      unidade: "taça",
      caminho_imagem: "imagens/sobremesa_taca.png",
      id_secao: 6,
      secao: "Sobremesas"
    },
   
  ];
export {produtos}
  

