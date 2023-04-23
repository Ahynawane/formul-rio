btn = document.getElementById("btn")
login = document.getElementById("login")
senha1 = document.getElementById("senha1")
cadastro = document.getElementById("cadastro")
btn.addEventListener("click", function(event){
    event.preventDefault()
    if(login.value == "admin" && senha1.value == "admin"){
        cadastro.classList.add("mensagem-sucesso")
        cadastro.classList.remove("mensagem-erro")
        cadastro.innerHTML = "Cadastro com sucesso"
    
        
    } else{
        
        cadastro.classList.remove("mensagem-sucesso")
        cadastro.classList.add("mensagem-erro")
        cadastro.innerHTML = "Usuário ou senha inválidos"
        
    }
})