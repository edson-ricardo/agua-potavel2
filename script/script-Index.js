/* **************************************************
BOTÃO LOGIN
************************************************** */

//Usuário e senha pré-definidos
const usuarioCerto = "edson@gmail.com";
const senhaCerta = "123";

//Pegar o evento do formulário no envio
document.querySelector("form").addEventListener("submit", function (event){
    //Impedir o envio normal do formulário
    event.preventDefault();

    //Pegar os valores digitados
    const email = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();

    //O código irá verificar se está tudo preenchido
    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }                
    
    //Condição para verificar se os dados estão todos preenchidos
    if (email === usuarioCerto && senha === senhaCerta){        
        //Salva temporariamente o login
        localStorage.setItem("usuarioLogado", email);
        //Vai direcionar para a página "cadastr.html"
        window.location.href = "cadastro.html";
    } else {
        //Quando dá erro no login
        alert("Usuário ou senha incorreto. Tente novamente!");
    }
});