window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  for (let i=0;i<json.length;i++){
    let rideinfo = json[i]
    let Firstname = rideinfo.passengerDetails.first
    let Lastname = rideinfo.passengerDetails.last
    let Phone = rideinfo.passengerDetails.phoneNumber
    let Address = rideinfo.pickupLocation.address
    let City = `${rideinfo.pickupLocation.city}, ${rideinfo.pickupLocation.state}, ${rideinfo.pickupLocation.zip}`
    let DropAddress = rideinfo.dropoffLocation.address
    let DropCity = `${rideinfo.dropoffLocation.city}, ${rideinfo.dropoffLocation.state}, ${rideinfo.dropoffLocation.zip}`
    let Amount = rideinfo.numberOfPassengers

    // Identify what kind of ride it is
        let rideElements = document.querySelector(`.rides`)

    // Check if the ride is Noober Purple
    if (rideinfo.purpleRequested == true) {rideElements.insertAdjacentHTML(`beforeend`,`<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>Noober Purple</span>
  </h1>


  <div class="border-4 border-purple-500 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${Firstname} ${Lastname}</h2>
        <p class="font-bold text-gray-600">${Phone}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-purple-600 text-white p-2">${Amount} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${Address}</p>
        <p>${City}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${DropAddress}</p>
        <p>${DropCity}</p>
      </div>
    </div>`)}

    else if (rideinfo.Passengers > 3) {rideElements.insertAdjacentHTML(`beforeend`,`<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>Noober XL</span>
  </h1>

  <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${Firstname} ${Lastname}</h2>
        <p class="font-bold text-gray-600">${Phone}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">${Amount} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${Address}</p>
        <p>${City}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${DropAddress}</p>
        <p>${DropCity}</p>
      </div>
    </div>`)}

    else {rideElements.insertAdjacentHTML(`beforeend`,`<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>Noober X</span>
  </h1>

  <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${Firstname} ${Lastname}</h2>
        <p class="font-bold text-gray-600">${Phone}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">${Amount} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${Address}</p>
        <p>${City}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${DropAddress}</p>
        <p>${DropCity}</p>
      </div>
    </div>`)}
  }
})