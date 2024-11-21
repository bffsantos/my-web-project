function logIn()
{
    var userName = document.querySelector("#nameInput").value;
    var userPassword = document.querySelector("#passwordInput").value;

    if(!validateForm(userName, userPassword))
    {
        return alert("Digite um nome ou uma senha valida!")
    }

    alert("Voce entrou na sua conta.")
}

function signIn()
{
    alert("Voce se cadastrou")
}

function validateForm(userName, userPassword)
{
    if(userName == "" || userPassword == ""){
        return false;
    }

    return true;
}