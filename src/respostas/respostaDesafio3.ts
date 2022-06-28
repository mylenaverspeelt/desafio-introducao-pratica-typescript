let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

let total = 0

function somarAoSaldo(soma: number) {
    total += soma
    campoSaldo.innerHTML += total.toString()
    return total
}

function limparSaldo() {
    total = 0;
    campoSaldo.innerHTML = total.toString();
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value)); 
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});