const searchButton = ()=>{
    const phoneInput = document.getElementById('phone-input') ;
    const phoneValue = phoneInput.value;
    const error = document.getElementById('error');
    if (phoneValue === '') {
        error.innerText = 'Please enter a phone';

    }
    phoneInput.value = '';

}