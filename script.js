// Função para calcular o ressarcimento
function calcularRessarcimento() {
    var faturamentoTotalInput = document.getElementById("faturamento-total");
    var faturamentoTotalValue = faturamentoTotalInput.value.trim().replace(/[^\d.,]/g, ''); // Remover todos os caracteres, exceto números, pontos e vírgulas
faturamentoTotalValue = faturamentoTotalValue.replace(',', '.'); // Substituir vírgulas por pontos

if (isNaN(faturamentoTotalValue)) {
    alert("Por favor, insira um valor válido para o Faturamento Total.");
    return;
}

var faturamentoTotal = parseFloat(faturamentoTotalValue); // Converter para número

    var meses = parseInt(document.getElementById("meses").value);

    // Calcular a base de cálculo corretamente (1,2% do faturamento total)
    var baseCalculo = faturamentoTotal * 0.012; // 12% do faturamento total

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
