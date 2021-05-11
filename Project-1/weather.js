  var button = document.querySelector('.button')
  var inputValue=document.querySelector('.inputValue')
 var name = document.querySelector(".name");
  var desc = document.querySelector(".desc");
  var temp = document.querySelector(".temp");

  button.addEventListener('click',function(){
  getval();
    async function getval() {
      var res=await axios.get("http://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&APPID=55f7fd4902db29473960fb9925f04c86");
      //var x = res.data.jobs;
      var nameValue= res.data.name;
      
  	var tempValue= res.data.main.temp;
  	 
  	var descValue= res.data.weather[0].description;
  	
     name.innerHTML= nameValue;
    temp.innerHTML= Math.round(tempValue-273)+"(in C)";
    desc.innerHTML= descValue;
     
     // console.log(x)
      //showcategories(x)
    }
  	
  

 //.catch(err => alert("Wrong City Name"));
})

