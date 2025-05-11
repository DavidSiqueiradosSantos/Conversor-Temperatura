function converter() {
  // Obtém o valor da temperatura e do tipo de conversão
  const temperatura = parseFloat(document.getElementById('temperatura').value);
  const tipoConversao = document.getElementById('tipo-conversao').value;

  // Verifica se o valor da temperatura foi informado e é um número válido
  if (isNaN(temperatura)) {
    document.getElementById('resultado').textContent = 'Por favor, insira um valor válido para a temperatura.';
    return;
  }

  let resultado;

  // Realiza a conversão de acordo com a seleção
  switch (tipoConversao) {
    case 'celsius-para-fahrenheit':
      resultado = (temperatura * 9/5) + 32;
      document.getElementById('resultado').textContent = `${temperatura}° Celsius é igual a ${resultado.toFixed(2)}° Fahrenheit.`;
      break;
    case 'celsius-para-kelvin':
      resultado = temperatura + 273.15;
      document.getElementById('resultado').textContent = `${temperatura}° Celsius é igual a ${resultado.toFixed(2)} Kelvin.`;
      break;
    case 'fahrenheit-para-celsius':
      resultado = (temperatura - 32) * 5/9;
      document.getElementById('resultado').textContent = `${temperatura}° Fahrenheit é igual a ${resultado.toFixed(2)}° Celsius.`;
      break;
    case 'fahrenheit-para-kelvin':
      resultado = ((temperatura - 32) * 5/9) + 273.15;
      document.getElementById('resultado').textContent = `${temperatura}° Fahrenheit é igual a ${resultado.toFixed(2)} Kelvin.`;
      break;
    case 'kelvin-para-celsius':
      resultado = temperatura - 273.15;
      document.getElementById('resultado').textContent = `${temperatura} Kelvin é igual a ${resultado.toFixed(2)}° Celsius.`;
      break;
    case 'kelvin-para-fahrenheit':
      resultado = ((temperatura - 273.15) * 9/5) + 32;
      document.getElementById('resultado').textContent = `${temperatura} Kelvin é igual a ${resultado.toFixed(2)}° Fahrenheit.`;
      break;
    default:
      document.getElementById('resultado').textContent = 'Selecione um tipo de conversão válido.';
      break;
  }
}
