window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  for (let i=0, i<json.length; i++)
  let ride = json[i]
  let passengerFirstname = ride.passengerDetails.first
  let passengerLastname = ride.passengerDetails.last
  let passengerPhone = ride.passengerDetails.phoneNumber
  let locationAddress = ride.pickupLocation.address
  let locationCityStateZip = `${ride.pickupLocation.city}, ${ride.pickupLocation.state}, ${ride.pickupLocation.zip}`
  let dropLocationAddress = ride.dropoffLocation.address
  let dropLocationCityStateZip = `${ride.dropoffLocation.city}, ${ride.dropoffLocation.state}, ${ride.dropoffLocation.zip}`
  let passengerAmount = ride.numberOfPassengers

  // Identify what kind of ride it is
      let rideElements = document.querySelector(`.rides`)

  // Check if the ride is Noober Purple
  if (ride.purpleRequested == true) {rideElements.insertAdjacentHTML(`beforeend`,`<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  <i class="fas fa-car-side"></i>
  <span>Noober Purple</span>
</h1>


<div class="border-4 border-purple-500 p-4 my-4 text-left">
  <div class="flex">
    <div class="w-1/2">
      <h2 class="text-2xl py-1">${passengerFirstname} ${passengerLastname}</h2>
      <p class="font-bold text-gray-600">${passengerPhone}</p>
    </div>
    <div class="w-1/2 text-right">
      <span class="rounded-xl bg-purple-600 text-white p-2">${passengerAmount} passengers
      </span>
    </div>
  </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">PICKUP</div>
      <p>${locationAddress}</p>
      <p>${locationCityStateZip}</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      <p>${dropLocationAddress}</p>
      <p>${dropLocationCityStateZip}</p>
    </div>
  </div>`)}

  else if (ride.numberOfPassengers > 3) {rideElements.insertAdjacentHTML(`beforeend`,`<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  <i class="fas fa-car-side"></i>
  <span>Noober XL</span>
</h1>

<div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${passengerFirstname} ${passengerLastname}</h2>
      <p class="font-bold text-gray-600">${passengerPhone}</p>
    </div>
    <div class="w-1/2 text-right">
      <span class="rounded-xl bg-gray-600 text-white p-2">${passengerAmount} passengers
      </span>
    </div>
  </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">PICKUP</div>
      <p>${locationAddress}</p>
      <p>${locationCityStateZip}</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      <p>${dropLocationAddress}</p>
      <p>${dropLocationCityStateZip}</p>
    </div>
  </div>`)}

  else {rideElements.insertAdjacentHTML(`beforeend`,`<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  <i class="fas fa-car-side"></i>
  <span>Noober X</span>
</h1>

<div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${passengerFirstname} ${passengerLastname}</h2>
      <p class="font-bold text-gray-600">${passengerPhone}</p>
    </div>
    <div class="w-1/2 text-right">
      <span class="rounded-xl bg-gray-600 text-white p-2">${passengerAmount} passengers
      </span>
    </div>
  </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">PICKUP</div>
      <p>${locationAddress}</p>
      <p>${locationCityStateZip}</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      <p>${dropLocationAddress}</p>
      <p>${dropLocationCityStateZip}</p>
    </div>
  </div>`)}
}
})
})