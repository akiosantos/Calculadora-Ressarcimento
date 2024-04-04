// Função para formatar um número como moeda
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função para formatar o valor do faturamento total
function formatarFaturamentoTotal() {
    var faturamentoTotalInput = document.getElementById("faturamento-total");
    var valor = faturamentoTotalInput.value.trim().replace(/^R\$/, ''); // Remover o símbolo de "R$"
  
    // Remover todos os pontos e vírgulas
    valor = valor.replace(/[.,\s]/g, '');

    // Converter para número
    var numero = parseFloat(valor);

    // Verificar se o valor é válido
    if (!isNaN(numero)) {
        // Formatar o número como moeda
        var valorFormatado = formatarMoeda(numero);

        // Definir o valor do input como moeda formatada
        faturamentoTotalInput.value = valorFormatado;

        // Calcular o ressarcimento após a formatação do valor do faturamento total
        calcularRessarcimento();
    } else {
        alert('Por favor, insira um valor numérico válido.');
        faturamentoTotalInput.value = ''; // Limpar o campo se o valor não for válido
    }
}

// Função para calcular o ressarcimento
function calcularRessarcimento() {
    var faturamentoTotalInput = document.getElementById("faturamento-total");
    var faturamentoTotalValue = faturamentoTotalInput.value.trim().replace(/R\$/, '').replace(/\./g, '').trim();

    // Converter para número
    var faturamentoTotal = parseFloat(faturamentoTotalValue);

    if (isNaN(faturamentoTotal)) {
        alert("Por favor, insira um valor válido para o Faturamento Total.");
        return;
    }

    var meses = parseInt(document.getElementById("meses").value);

    var baseCalculo = faturamentoTotal * 0.012;

    // Formatar a base de cálculo com vírgula a cada 3 dígitos
    var baseCalculoFormatado = formatarMoeda(baseCalculo);

    // Atualizar o elemento HTML com o valor da base de cálculo formatado
    document.getElementById("base-calculo").innerText = "Base de Cálculo: " + baseCalculoFormatado;
  
    var saldoMedio = (baseCalculo * meses) - 0.20; // Subtrai 20%

    // Formatar o resultado com vírgula e símbolo de moeda
    var saldoMedioFormatado = formatarMoeda(saldoMedio);

    document.getElementById("resultado").innerText = "O saldo médio é: " + saldoMedioFormatado;
}

// Adicionar evento ao campo de faturamento total para formatar o valor quando o usuário sair do campo
document.getElementById("faturamento-total").addEventListener("blur", formatarFaturamentoTotal);
