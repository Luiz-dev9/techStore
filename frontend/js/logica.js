const API = 'http://localhost:3000'

document.getElementById("cadastra").addEventListener('submit', async function(event){
    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    if(!email){
        alert("preencha o email");
        return;
    }

    try{
        const banco = await fetch(`${API}/cadastra`,{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({email})
        })

        const dados = await banco.json();

        if(!banco.ok){
         alert(dados.error || "Usuário não cadastrado");
         return;
        }

        alert("Cadastrado com sucesso!")
        
    } catch(err){
        alert("error no servidor")
        console.error(err)
    }
})