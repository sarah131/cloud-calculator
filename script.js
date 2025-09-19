const d = document.getElementById('d');

document.querySelector('.keys').addEventListener('click', async e => {
  if (!e.target.matches('button')) return;
  const v = e.target.dataset.v;

  if (v === 'C') {
    d.value = '';
    return;
  }

  if (v === '=') {
    const expression = d.value;
    if (!expression) return;
    try {
      const response = await fetch('https://cloud-backend-bgc7avh2cqcvdae0.centralindia-01.azurewebsites.net/calculate', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ expression })
      });
      const data = await response.json();
      if (data.result !== undefined) {
        d.value = data.result;
      } else {
        d.value = 'Error';
      }
    } catch (error) {
      d.value = 'Error';
    }
    return;
  }

  d.value += v;
});
