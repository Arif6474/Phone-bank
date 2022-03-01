const allPhones = document.getElementById('all-phone');


const searchButton = ()=>{
    const phoneInput = document.getElementById('phone-input') ;
    const phoneValue = phoneInput.value;
    const error = document.getElementById('error');
    if (phoneValue == '') {
        error.innerText = 'Please enter a phone';
        allPhones.innerHTML = '';

    } 
    // else if (isNaN(phoneValue) ) {
    //     error.innerText = 'No result found'
    // }
    else {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneValue}`)
        .then(res => res.json())
        .then(data => displayPhones(data.data))
        error.innerText = '';
    }

    phoneInput.value = '';

}
const displayPhones = phones => {
    const first20Phone = phones.slice(0, 20);
    // console.log(first20Phone);

    const allPhones = document.getElementById('all-phone');
    for (const phone of first20Phone) {
        // console.log(phone);
    
    const div = document.createElement('div');
    div.classList.add('col-lg-4')
    div.classList.add('my-4')
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
          <img src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5>${phone.phone_name}</h5>
        <p>Brand: ${phone.brand}</p>
        <button class="btn btn-primary">Details</button>
      </div>
    </div>
    `
    allPhones.appendChild(div);

    }
    
}
