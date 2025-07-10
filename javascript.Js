const counterId = 'portfolio-enock-en';
const namespace = 'iradukunda-enock';

// Step 1: Create the counter if it doesn't exist (value = 0)
fetch(`https://api.countapi.xyz/create?namespace=${namespace}&key=${counterId}&value=0`)
  .catch(() => {
    // Ignore error if the counter already exists
  })
  .finally(() => {
    // Step 2: Increment the counter and display the result
    fetch(`https://api.countapi.xyz/hit/${namespace}/${counterId}`)
      .then(res => res.json())
      .then(data => {
        document.getElementById('viewcount').textContent = `${data.value} Views`;
      })
      .catch(err => {
        console.error('View counter error:', err);
        document.getElementById('viewcount').textContent = 'N/A';
      });
  });
