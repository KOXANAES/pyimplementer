document.getElementById('pyCodeForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const code = document.getElementById('pyCodeForm__input').value;
  fetch('http://localhost:5005/execute', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: new URLSearchParams({ code: code })
  })
  .then(response => response.json())
  .then(data => {
    const outputDiv = document.getElementById('pyCodeOutput');
    if (data.error) {
      outputDiv.innerHTML = `<strong>Ошибка:</strong> ${data.error}`;
    } else {
      outputDiv.innerHTML = `<strong>Результат:</strong> ${data.output}`;
    }
  });
});