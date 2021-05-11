function updateMap() {
  // console.log("Updating Map");
  fetch("https://jayantjethi.github.io/data-json/data.json")
    .then(response => response.json())
    .then(rsp => {

       console.log(rsp.data)

      console.log(rsp.data)
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
          .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML('<h3>' + element.name + '</h3><br><h3>'+ '<h3>Infected</h3>'+ element.infected + '</h3><br>'+'<h3>' +'<h3>Vaccinated</h3>'+ element.vaccinated + '</h3><br>'+'<h3>Recovered</h3>'+ element.recovered + '</h3><br>' ))
          .addTo(map);
      });
    })
}
updateMap();
// let interval = 1000;
// setInterval(updateMap , interval);