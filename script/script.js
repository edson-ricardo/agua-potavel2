/* **************************************************
SCRIPT PARA USUÁRIO LOGADO
************************************************** */

const usuarioLogado = localStorage.getItem("usuarioLogado");
if (!usuarioLogado) {
    alert("Você precisa estar logado para entrar nesta página!");
    window.location.href = "index.html";
}

//Script para limpar e sair do formulário
document.addEventListener("DOMContentLoaded", function() {

    const botaoSair = document.getElementById('botao-sair');

    botaoSair.addEventListener('click', function() {
        const confirmar = window.confirm("Deseja realmente sair do formulário?");
        
        if (confirmar) {
            localStorage.removeItem('token'); //Limpar a seção do usuário
            formularioProduto.reset();
            //window.location.href = "index.html";
            window.location.replace('index.html'); //Não permitirá voltar à página anterior
        }
    });
});


/* **************************************************
CAMPO: NOME DO PRODUTO
- IMPEDIR NUMEROS
************************************************** */

document.getElementById('nome').addEventListener('keypress', function(event) {
  if(!isNaN(event.key) && event.key !== ' ') {
    event.preventDefault();
    alert('❌ Digite apenas letras!')
  }
});


/* **************************************************
CAMPO: PREÇO R$
- IMPEDIR LETRAS
************************************************** */

document.getElementById('preco').addEventListener('keypress', function(e) {
  const permitidos = "0123456789.,";

  if(!permitidos.includes(e.key)) {
    e.preventDefault();
    alert("❌ Digite apenas números");

  }
});


/* **************************************************
CAMPO: QUANTIDADE
- IMPEDIR LETRAS
************************************************** */

document.getElementById('quantidade').addEventListener('keypress', function(evento) {
  const permitidos = "0123456789.,";

  if(!permitidos.includes(evento.key)) {
    evento.preventDefault();
    alert("❌ Digite apenas números");
  }
});

/* **************************************************
CAMPO: FORNECEDOR
- IMPEDIR SÓ NÚMEROS
Observação: A função abaixo irá permitir 'números' e
'letras', mas não irá permitir apenas números
************************************************** */

//focus: quando o usuário clica, por exemplo, em um input, ou seja, ele está digitando ali
//blur: quando o usuário sai do campo no qual estava digitando

document.getElementById('fornecedor').addEventListener('blur', function() {
  //Significa: “No campo onde o usuário está (this), pegue o que ele digitou (value), tire
  // os espaços que não servem no começo e no fim (trim()), e depois faça a verificação.”  
  const valor = this.value.trim();

  // Regex: verifica se o campo tem apenas números
  const soNumeros = /^[0-9]+$/;

  // A expressão irá usar o item '.test' e irá verificar se os valores estão de acordo
  //com const soNumeros...
  if(valor !== "" && soNumeros.test(valor)) {
    alert("❌ Não é permitido apenas números!");
    this.value;
    this.focus();
  }
});


/* **************************************************
CAMPO: DESCRIÇÃO - 'textarea'
- LIMITAR A QUANTIDADE DE CARACTERES
************************************************** */

const descricao = document.getElementById('descricao');
const contador = document.getElementById('contador');
const limite = 250;

contador.textContent = `${limite}/${limite}`;

descricao.addEventListener('input', function() {
  let caracteres = this.value.length;

  if (caracteres > limite) {
    this.value = this.value.substring(0, limite);
    caracteres = limite;
  }

  const restantes = limite - caracteres;
  contador.textContent = `${restantes}/${limite}`;

  if (restantes <= 20) {
    contador.style.color = "#d32f2f";
    contador.style.backgroundColor = "#ffebee";
    contador.style.borderColor = "#ef9a9a";
  } else {
    contador.style.color = "#0277bd";
    contador.style.backgroundColor = "#e3f2fd";
    contador.style.borderColor = "#90caf9";
  }
});


/* **************************************************
BOTÃO CADASTRAR
- Cadastrar os dados constantes no formulário
************************************************** */

document.getElementById('botaoCadastrar').addEventListener('click', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const preco = document.getElementById('preco').value.trim();
  const quantidade = document.getElementById('quantidade').value.trim();
  const fornecedor = document.getElementById('fornecedor').value.trim();
  const categoria = document.getElementById('categoria').value.trim();
  const descricao = document.getElementById('descricao').value.trim();  
  
  if (nome === "" || preco === "" || quantidade === "" || fornecedor === "" || descricao === "" || categoria === "") {
    alert("⚠️ Preencha todos os campos antes de enviar!");
  } else {
    alert(`✅ Produto cadastrado com sucesso!\nNome: ${nome}\nPreço: R$ ${preco}`);
    window.location.href = "cadastro.html";
  }
});