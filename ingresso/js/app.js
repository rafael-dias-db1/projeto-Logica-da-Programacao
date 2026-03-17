let pistaQ = parseInt(document.getElementById('qtd-pista').textContent);
let superiorQ = parseInt(document.getElementById('qtd-superior').textContent);
let inferiorQ = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar() {
    let quantidade = parseInt(document.getElementById('qtd').value);
    let tipoIngresso = document.getElementById('tipo-ingresso').value;

    if (quantidade > 0) {
        switch (tipoIngresso) {
            case 'pista':
                if (quantidade > pistaQ) {
                    alert("Quantidade indisponível de ingressos na pista");
                    break;
                } else {
                    pistaQ -= quantidade;
                    document.getElementById('qtd-pista').textContent = pistaQ
                    break;
                }

            case 'superior':
                if (quantidade > superiorQ) {
                    alert("Quantidade indisponível de ingressos nas cadeiras superiores");
                    break;
                } else{
                superiorQ -= quantidade;
                document.getElementById('qtd-superior').textContent = superiorQ
                break;
                }

            case 'inferior':
                if (quantidade > inferiorQ) {
                    alert("Quantidade indisponível de ingressos nas cadeiras inferiores");
                    break;
                } else{
                inferiorQ -= quantidade;
                document.getElementById('qtd-inferior').textContent = inferiorQ
                break;
                }
        }
    }

    console.log(tipoIngresso);
}


