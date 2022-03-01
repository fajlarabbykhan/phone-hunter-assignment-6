// console.log("hello")
const searchPhone = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    // console.log(searchText)

    //clearing data.....
    searchField.value = ""

    //Loading data.....
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneSearchResult(data.data))
}

const displayPhoneSearchResult = phones => {
    // console.log(phones)
    const phoneSearchResult = document.getElementById('phone-search-result')

    //clearing data.....
    // phoneSearchResult.innerHTML = ""
    phoneSearchResult.textContent = ""

    for (const phone of phones) {
        console.log(phone)
        const div = document.createElement('div')
        div.classList.add('col')
        // console.log(phone.slug)
        div.innerHTML = `
        <div class="card p-3 m-3 border border-3 rounded-3 shadow">
            <img src="${phone.image}" class="card-img-top " alt="...">
            <div class="card-body ">
                <h5 class="card-title text-center">Phone Brand: ${phone.brand}</h5>
                <h5 class="card-title text-center">Phone Name: ${phone.phone_name}</h5>
            </div>
            <div class="text-center">

                    <a href="#" onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary">More Details</a>
            </div>
            
         </div>
        `
        phoneSearchResult.appendChild(div)
    }
}

const loadPhoneDetails = id => {

    // console.log(id)
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displyPhoneDetails(data.data))
}

const displyPhoneDetails = phones => {
    console.log(phones)
    const phoneDetails = document.getElementById('phone-display-details')

    //clearing data.....
    phoneDetails.textContent = ""
    const div = document.createElement('div')
    div.classList.add('card')
    // const date = phones.releaseDate
    // console.log(date)

    div.innerHTML = `
            <img class="card-img-top w-25 mx-auto" src="${phones.image}" alt="Card image cap">
            <div class="card-body text-center">
                    <h5 class="card-title text-center">${phones.releaseDate}</h5>
                
                <p class="card-text ">Storage - ${phones.mainFeatures.storage}</p>
                <p class="card-text ">Display Size - ${phones.mainFeatures.displaySize}</p>
                <p class="card-text ">Chip Set - ${phones.mainFeatures.chipSet}</p>
                <p class="card-text ">Memory - ${phones.mainFeatures.memory}</p>
                <a href="#" class="btn btn-primary ">Buy Now</a>
            </div>
    
    
    `
    phoneDetails.appendChild(div)

}