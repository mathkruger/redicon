/**
 * 
 * @param {Date} initialDate 
 * @param {Number} boxQuantity 
 * @param {Number} quantityPerDay 
 * @param {Numbr} quantityTookOnFirstDay 
 */
function getBoxFinalDate(
  initialDate,
  boxQuantity,
  quantityPerDay,
  quantityTookOnFirstDay
) {
  const daysNeeded = Math.ceil((boxQuantity + quantityTookOnFirstDay) / quantityPerDay);
  const finalDate = new Date(initialDate);
  finalDate.setDate(finalDate.getDate() + daysNeeded);
  return finalDate;
}

document.getElementById('medicineForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o recarregamento da página

  // Obtém os valores do formulário
  const initialDate = new Date(document.getElementById('initialDate').value);
  const boxQuantity = parseInt(document.getElementById('boxQuantity').value, 10);
  const quantityPerDay = parseInt(document.getElementById('quantityPerDay').value, 10);
  const quantityTookOnFirstDay = parseInt(document.getElementById('quantityTookOnFirstDay').value, 10);

  // Chama a função para calcular a data final
  const finalDate = getBoxFinalDate(initialDate, boxQuantity, quantityPerDay, quantityTookOnFirstDay);

  // Exibe o resultado
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `A caixa de remédios acabará em <span>${finalDate.toLocaleDateString('pt-BR')}</span>`;
});