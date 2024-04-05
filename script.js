// Função para formatar o valor do faturamento total e calcular ressarcimento
function formatarFaturamentoTotal() {
    var faturamentoTotalInput = document.getElementById("faturamento-total");
    var valor = faturamentoTotalInput.value.trim().replace(/[\D\s]/g, ''); // Remover todos os caracteres não numéricos
  
    // Formatar como moeda brasileira
    valor = Number(valor) / 100;
    faturamentoTotalInput.value = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    // Chamar a função para calcular o ressarcimento
    calcularRessarcimento();
  }
  
  // Função para calcular o ressarcimento
  function calcularRessarcimento() {
    var faturamentoTotalInput = document.getElementById("faturamento-total");
    var faturamentoTotalValue = faturamentoTotalInput.value.trim().replace(/R\$/, '').replace(/\./g, '').replace(',', '.').trim();
  
    // Converter para número
    var faturamentoTotal = parseFloat(faturamentoTotalValue);
  
    if (isNaN(faturamentoTotal)) {
      alert("Por favor, insira um valor válido para o Faturamento Total.");
      return;
    }
  
    var meses = parseInt(document.getElementById("meses").value);
  
    var baseCalculo = faturamentoTotal * 0.012;
  
    // Formatar a base de cálculo com vírgula a cada 3 dígitos
    var baseCalculoFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(baseCalculo);
  
    // Atualizar o elemento HTML com o valor da base de cálculo formatado
    document.getElementById("base-calculo").innerText = "Base de Cálculo (mensal): " + baseCalculoFormatado;
  
    var saldoMedio = (baseCalculo * meses) - 0.20; // Subtrai 20%
  
    // Formatar o resultado sem arredondamento
    var saldoMedioFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(saldoMedio);
  
    document.getElementById("resultado").innerText = "O saldo médio é: " + saldoMedioFormatado;
  }
  
  // Adicionar evento de entrada para os campos de faturamento total e meses
  document.getElementById("faturamento-total").addEventListener("input", formatarFaturamentoTotal);
  document.getElementById("meses").addEventListener("input", function() {
    calcularRessarcimento();
    formatarFaturamentoTotal(); // Atualizar também o faturamento total para garantir que esteja formatado corretamente
  });
  
  // Função para inicializar os cálculos
  function inicializarCalculos() {
    formatarFaturamentoTotal();
  }
  
  // Chamar a função de inicialização
  inicializarCalculos();
  
