const isLoggedIn = true
function handleClick(){
    alert("Botão Clicado!")
}
//componente LoginStatus
function LoginStatus(){
    return(
        <div>
            <h2></h2>
                {isLoggedIn ? "Bem vindo(a) " : "Por favor, faça Llogin"} 
            <h2/>
            <button onClick={handleClick}>
                {isLoggedIn? "Sair" : "Entrar"}
            </button>
        </div>
    )
}
export default LoginStatus