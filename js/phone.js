const allPhones = document.getElementById('all-phone');


const searchButton = ()=>{
    const phoneInput = document.getElementById('phone-input') ;
    const phoneValue = phoneInput.value;
    const error = document.getElementById('error');
    if (phoneValue == '') {
        error.innerText = 'Please enter a phone';
        allPhones.innerHTML = '';

    }  
    else {
        allPhones.innerHTML = '';
        fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneValue}`)
        .then(res => res.json())
        .then(data => displayPhones(data.data));
        error.innerText = '';
    }
    phoneInput.value = '';

}
const displayPhones = phones => {
    const first20Phone = phones.slice(0, 20);
    // console.log(phones);

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
          <h5>${phone.phone_name?name:"no result found"}</h5>
        <p>Brand: ${phone.brand}</p>
        <button onclick = "phoneDetails('${phone.slug}')" class="btn btn-primary">Details</button>
      </div>
    </div>
    `
    allPhones.appendChild(div);

    }
    
}

const phoneDetails = (singlePhone) => {
    // console.log(singlePhone);
    fetch(`https://openapi.programming-hero.com/api/phone/${singlePhone}`)
        .then(res => res.json())
        .then(data => displaySinglePhone(data.data));
 
}

const displaySinglePhone = details => {
    console.log(details);
    allPhones.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('d-flex')
    div.classList.add('justify-content-center')
    div.innerHTML = `
    <div class="card mb-3" >
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${details.image}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${details.name}</h5>
          <p class="card-text">${details.slug}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
      `
     allPhones.appendChild(div);


}



