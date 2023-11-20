const enviarPOST = document.querySelector('#enviarPOST')

enviarPOST.addEventListener('click', async () => {
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let dataNasc = document.getElementById("nasc").value
    let endereco = document.getElementById("address").value
    let nomeMae = document.getElementById("mae").value
    let nomePai = document.getElementById("pai").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("tel").value
    let serie = document.getElementById("serie").value
    let sexo = document.querySelector('input[type="radio"]:checked').value

    //deficiencias
    let auditiva = document.getElementById("auditiva").checked
    let motora = document.getElementById("motora").checked
    let visual = document.getElementById("visual").checked
    let paralisia = document.getElementById("paralisia").checked
    let autismo = document.getElementById("autismo").checked
    let foro = document.getElementById("foro").checked
    let aprendizagem = document.getElementById("aprendizagem").checked
    let habilidades = document.getElementById("habilidades").checked

    let option = {
        method: "POST",
        body: JSON.stringify({
            nNome: nome,
            nSobrenome: sobrenome,
            nNascimento: dataNasc,
            nEndereco: endereco,
            nMae: nomeMae,
            nPai: nomePai,
            nEmail: email,
            nTel: telefone,
            nSerie: serie,
            sexo: sexo,
            nAuditiva: auditiva,
            nMotora: motora,
            nVisual: visual,
            nParalisia: paralisia,
            nAutismo: autismo,
            nForo: foro,
            nAprendizagem: aprendizagem,
            nHabilidades: habilidades
        }),
        headers: { "Content-Type": "application/json" }
    };


    let resposta = await fetch("http://localhost:3000/aluno", option)
    console.log(await resposta.json());
})