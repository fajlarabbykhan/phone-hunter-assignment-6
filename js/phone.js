// console.log("hello")
const searchPhone = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    // console.log(searchText)

    searchField.value = ""
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneSearchResult(data.data))
}

const displayPhoneSearchResult = phones => {
    // console.log(phones)
    const phoneSearchResult = document.getElementById('phone-search-result')
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
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
    
    
    `
    phoneDetails.appendChild(div)

}