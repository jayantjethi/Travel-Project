function updateMap() {
  // console.log("Updating Map");
  fetch("https://corona.lmao.ninja/v2/countries")
    .then(response => response.json())
    .then(rsp => {

       console.log(rsp.data)

      console.log(rsp.data)
      rsp.data.forEach(element => {
        latitude = element.countryInfo.lat;
        longitude = element.countryInfo.long;
        
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
          .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML('<h3>' + element.country + '</h3><br><h3>'+ '<h3>Infected</h3>'+ element.active + '</h3><br>'+'<h3>' +'<h3>Recovered</h3>'+ element.recovered + '</h3><br>' ))
          .addTo(map);
      });
    })
}
updateMap();
// let interval = 1000;
// setInterval(updateMap , interval);