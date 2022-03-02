
const phoneSingle = document.getElementById('single-phone')
const allPhones = document.getElementById('all-phone');

const searchButton = ()=>{
    const phoneInput = document.getElementById('phone-input') ;
    const phoneValue = phoneInput.value;
    const error = document.getElementById('error');
    if (phoneValue == '') {
        error.innerText = 'Please enter a phone';
        allPhones.innerHTML = '';
        phoneSingle.innerHTML ='';

    }  
    else {
        phoneSingle.innerHTML ='';
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
    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
          <img src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5>${phone.phone_name}</h5>
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
    // allPhones.innerHTML = '';
    phoneSingle.innerHTML ='';

    const div = document.createElement('div');
   
    div.classList.add('justify-content-center')
    div.innerHTML = `
    <div class="card w-75 mx-auto mb-3" >
    <div class="row g-0">
      <div class="col-lg-6 p-4">
        <img src="${details.image}" class="img-fluid w-100 rounded-start" alt="...">
      </div>
      <div class="col-lg-6">
        <div class="card-body">
          <h5 class="card-title">${details.name}</h5>
          <p class="card-text">${details.slug}</p>
          <p class="card-text"><span class="fw-bold">Release:</span> ${details.releaseDate?details.releaseDate:'Not available'}</p>
          <h5 class="card-title">Main Features</h5>
          <p><span class="fw-bold">Display Size:</span> ${details.mainFeatures.displaySize} </p>
          <p><span class="fw-bold">Memory:</span> ${details.mainFeatures.memory} </p>
          <p><span class="fw-bold">Storage:</span> ${details.mainFeatures.storage} </p>
          <p><span class="fw-bold">Sensors:</span> ${details.mainFeatures.sensors} </p>
          <h5 class="card-title">Others</h5>
          <p><span class="fw-bold">Bluetooth:</span> ${details.others.Bluetooth?details.others.Bluetooth:'Not available'} </p>
          
          <p><span class="fw-bold">GPS:</span> ${details.others.GPS?details.others.GPS:'Not available'} </p>
          <p><span class="fw-bold">USB:</span> ${details.others.USB?details.others.USB:'Not available'} </p>
          <p><span class="fw-bold">WLAN:</span> ${details.others.WLAN?details.others.WLAN:'Not available'} </p>
        </div>
      </div>
    </div>
  </div>
      `
      phoneSingle.appendChild(div);


}



