//Script para usuário logado
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






        