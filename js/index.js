// Identificação de Elementos

const body                = document.querySelector('body');
const header              = document.querySelector('header');
const main                = document.querySelector('main');
const divVitrine           = document.querySelector('.vitrine');
const lista               = document.querySelector('ul');
const divPesquisaCarrinho = document.querySelector('.search-carrinho');
const divCarrinho         = document.querySelector('.shopping-cart');
const conteudoCarrinho = document.querySelector('.content-car-empty');

// Criação de Elementos

const logo = document.createElement('h1');
const menu = document.createElement('nav');
const linkTodos = document.createElement('a');
const linkAcessorios = document.createElement('a');
const linkCalcados = document.createElement('a');
const linkCamisetas = document.createElement('a');
const barraPesquisa = document.createElement('input');
const btnPesquisar  = document.createElement('button');
const titulo3 = document.createElement('h3');
const titulo2 = document.createElement('h2');
const small = document.createElement('small');

// Criaçao ids e classes

logo.id = "logo";
main.id = "conteúdo";
btnPesquisar.id = "search";





// inserindo conteúdo nas Tags      

// Header 
logo.innerText="Weartake";

linkTodos.href="#";
linkTodos.innerText="Todos";

linkAcessorios.href="#  ";
linkAcessorios.innerText="Acessórios";

linkCalcados.href="#";
linkCalcados.innerText="Calçados";

linkCamisetas.href="#";
linkCamisetas.innerText="Camisetas";
    
// colocar os elementos filhos nos pais

header.appendChild(logo)
menu.appendChild(linkTodos)
menu.appendChild(linkAcessorios)
menu.appendChild(linkCalcados)
menu.appendChild(linkCamisetas)
header.appendChild(menu)

// Main 
// Div vitrine

  const listaCards = document.querySelector('.lista-cards')
    function criarCardProduto(cardProduto){

      // 1 RECUPERANDO INFORMAÇÕES DO CARD
       const img       = cardProduto.img
       const categoria = cardProduto.tag
       const nome      = cardProduto.nameItem
       const descricao = cardProduto.description
       const preco     = cardProduto.value
       const botao     = cardProduto.addCart

      // 2 CRIANDO OS ELEMENTOS
      const tagLi          = document.createElement('li')
      const tagImg         = document.createElement('img')
      const tagMain        = document.createElement('main')
      const tagButton      = document.createElement('button')
      const tagNome        = document.createElement('h3')
      const tagdescricao   = document.createElement('p')
      const tagValor       = document.createElement('p')
      const tagAddCarrinho = document.createElement('button')
    
      // 3 ADICIONAR INFORMAÇÕES
      tagLi.classList.add('card')
      tagImg.src               = `./img/${img}`
      tagImg.alt               = "nameItem"
      tagImg.classList.add('card-product')
      tagMain.classList.add('text')
      tagButton.classList.add('categoria')
      tagButton.innerText      = cardProduto.tag
      tagNome.classList.add('Product_name')
      tagNome.innerText        = cardProduto.nameItem
      tagdescricao.innerText   = cardProduto.description
      tagValor.classList.add('Price')
      tagValor.innerText       = cardProduto.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      tagAddCarrinho.classList.add('add')
      tagAddCarrinho.innerText = cardProduto.addCart
      
      // 4 MONTAR O CARD
      tagLi.appendChild(tagImg)
      tagMain.appendChild(tagButton)
      tagMain.appendChild(tagNome)
      tagMain.appendChild(tagdescricao)
      tagMain.appendChild(tagValor)
      tagMain.appendChild(tagAddCarrinho)
      tagLi.appendChild(tagMain)
      
      // 5 RETORNAR CARD MONTADO
      return tagLi
      
    }
    
    // LISTANDO CARDS DE PRODUTOS
    function listarAllcards(allCards){
      
      // PERCORRENDO ARRAY DE CARDS
      for(let i = 0; i<allCards.length; i++){
        
        // ACESSANDO CADA CARD
        const kard = allCards[i]
        // CRIANDO CARD RETORNO
        const productsCard = criarCardProduto(kard)
        listaCards.appendChild(productsCard)
      }
    
    }
    
    
    
    listarAllcards(data) 
    
    // Main
    // Pesquisa e carrinho

    barraPesquisa.type ="search"
    barraPesquisa.placeholder ="Digite aqui sua pesquisa"

    btnPesquisar.innerText ="Pesquisar"

    
    
  //   // carrinho
    
    titulo3.classList.add('title3')
    titulo3.innerText="Carrinho de compras"
    
    // conteúdo carrinho
    
    titulo2.innerText="Carrinho vázio"
    small.innerText="Adicione itens"

    
    // colocar os elementos filhos nos pais
    divPesquisaCarrinho.appendChild(barraPesquisa)
    divPesquisaCarrinho.appendChild(btnPesquisar)
    divCarrinho.appendChild(titulo3)
    conteudoCarrinho.appendChild(titulo2)
    conteudoCarrinho.appendChild(small)
    divPesquisaCarrinho.appendChild(divCarrinho)
    divCarrinho.appendChild(conteudoCarrinho)


  // // carrinho de compras
  
  const add1 = document.querySelectorAll('.add')
  add1.forEach(element => { 
    element.addEventListener("click", addItem)
    
   
    // console.log(element)
  });
  function addItem(event){


    titulo2.innerText=""
    small.innerText=""
    let target = event.target.parentNode.parentNode
    
    // console.log(target)
    
    // 1 RECUPERANDO INFORMAÇÕES DO CARD 
    let imagemProduto = target.querySelector('.card-product').src
    let nomeProduto = target.querySelector('.Product_name').innerText
    let price = target.querySelector('.Price').innerText
    
    
    // 2 CRIANDO OS ELEMENTOS
    tagLiCarrinho    = document.createElement('li');
    tagDivCarrinho   = document.createElement('div');
    tagImgCarrinho   = document.createElement('img');
    tagNomeCarrinho  = document.createElement('h3');
    tagPriceCarrinho = document.createElement('p');
    tagBtnRemover    = document.createElement('button');
    tagTotal         = document.createElement('div');
    tagQtd           = document.createElement('p');
    tagSoma          = document.createElement('p');
    
    // 3 ADICIONAR INFORMAÇÕES
    
    tagLiCarrinho.classList.add('card_carrinho')
    tagDivCarrinho.classList.add('div_carrinho')
    tagImgCarrinho.classList.add('imagem_carrinho');
    tagImgCarrinho.src = imagemProduto
    tagImgCarrinho.alt = nomeProduto
    tagNomeCarrinho.classList.add('nome_carrinho')
    tagNomeCarrinho.innerText = nomeProduto
    tagPriceCarrinho.classList.add('preco_carrinho')
    tagPriceCarrinho.innerText = price
    tagBtnRemover.classList.add('remover_carrinho')
    tagBtnRemover.innerText = "Remover produto"
    
    // 4 MONTAR O CARD
    tagLiCarrinho.appendChild(tagImgCarrinho)
    tagDivCarrinho.appendChild(tagNomeCarrinho)
    tagDivCarrinho.appendChild(tagPriceCarrinho)
    tagDivCarrinho.appendChild(tagBtnRemover)
    tagLiCarrinho.appendChild(tagDivCarrinho)
    conteudoCarrinho.appendChild(tagLiCarrinho)
    
   //
    
   
   
  // 
    tagBtnRemover.addEventListener('click', function(){
      
      titulo2.innerText="Carrinho vázio"
      small.innerText="Adicione itens"
      
      let RemoverLi = conteudoCarrinho.removeChild(conteudoCarrinho.firstElementChild);
      
    })
    
    

  }
  


 