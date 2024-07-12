const latestTimeToCatchBus = function(buses, passengers, capacity) {
    let latestTime = 0;
     let busIndex = 0;
     passengers.sort((a, b) => a - b);
     for (let i = 0; i < passengers.length; i++) {
       while (busIndex < buses.length && buses[busIndex] < passengers[i]) {
         busIndex++;
       }
       if (busIndex >= buses.length) {
         break;
       }
       if (i % capacity === 0) {
         latestTime = buses[busIndex] - 1;
       }
     }
     return latestTime;
   };