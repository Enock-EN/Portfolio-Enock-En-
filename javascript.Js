const counterId = 'portfolio-enock-en';
const namespace = 'iradukunda-enock';
fetch(`https://api.countapi.xyz/hit/${iradukunda-enock}/${portfolio-enock-en}`)
.then( res => res.json())
.then(data => {
    document.getElementById('viewcount').textContent = data.value;
} )
.catch(err => {
    console.error('view counter error:',err);
    document.getElementById('viewcount').textContent = 'N/A';
});
