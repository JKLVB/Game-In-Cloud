function exibirSenha(){
    var senha = document.getElementById("senhaInput").value;
    alert("Sua Senha é: "+senha)
}

function criarCliente() {

    var nome = document.getElementById("nomeInput").value
    var cpf = document.getElementById("cpfInput").value
    var data = document.getElementById("dataInput").value




    var tabela = document.getElementsByTagName('table')[0]
    var novaLinha = tabela.insertRow(tabela.length)
    celula1 = novaLinha.insertCell(0)
    celula1.innerHTML = ('Nome: ')+nome
    celula2 = novaLinha.insertCell(1)
    celula2.innerHTML = ('/    CPF: ')+cpf
    celula3 = novaLinha.insertCell(2)
    celula3.innerHTML = ('/    Data de Nascimento: ')+data

}