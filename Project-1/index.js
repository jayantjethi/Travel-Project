function updateMap() {
  // console.log("Updating Map");
  fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
      // console.log(rsp.data)
      rsp.data.forEach(element => {
        latitude = element.latitude;
        longitude = element.longitude;
        
        cases = element.infected;
        if(cases > 20000)
        {
          color = "red";
        }
        else 
        {
          color = "green";
        }
        new mapboxgl.Marker({
          draggable: false,
          color : color
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    })
}
let interval = 1000;
setInterval(updateMap , interval);