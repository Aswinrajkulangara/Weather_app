


const search =async()=>
    {
        let cityName=place.value
        console.log(cityName);
        if(cityName)
        {
            let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=99debba57133a8f6d4e86bebf80f3fff`)
           // console.log(response.json());

           response.json().then((data)=>
           {
            console.log(data);

            if(response.status>=200&&response.status<300){
                console.log(response.status);

            let humidity=data.main.humidity
            console.log(humidity);

            let wind=data.wind.speed
            console.log(wind);

            let pressure=data.main.pressure
            console.log(pressure);

            let name=data.name
            console.log(name);

            let temp=(data.main.temp-273.15).toFixed(2)
            console.log(temp); 

            let tempfeel=(data.main.feels_like-273.15).toFixed(2)
            console.log(tempfeel); 



            let tempmin=(data.main.temp_min-273.15).toFixed(2)
            console.log(tempmin); 

            let tempmax=(data.main.temp_max-273.15).toFixed(2)
            console.log(tempmax); 
          
            let des=data.weather
            console.log(des);

            let sun=data.sys.sunrise
            let hr=new Date(sun*1000).getHours()
            let ampm = hr >= 12 ? 'PM' : 'AM';
            let sunrise="Around "+hr%12+" "+ampm
            console.log(sunrise);

            let set=data.sys.sunset
            let hour=new Date(set*1000).getHours()
            let ap = hour >= 12 ? 'PM' : 'AM';
            let sunset="Around "+hour%12+" "+ap
            console.log(sunset);

            let longitude=data.coord.lon
            console.log(longitude);

            let latitude = data.coord.lat
            console.log(latitude);

            let dis =data.weather.map((item)=>item.description)
              console.log(dis);

           


          
           
           first.innerHTML = `
             <div class="box">
             <div class="info-weather">
                 <div class="weather">
                     <img src="./image/cloud.png" alt="">
                     <p class="temperature" >${temp}°C</p>
                     <p class="description">${dis}</p>
                 </div>
             </div>
         </div>
           `

           second.innerHTML=
           `
           <div class="humidity">
           <i class="fa-solid fa-water fa-beat-fade"></i>
           <div class="text">
               <div class="info-humidity">
                   <span>${humidity}%</span>
               </div>
               <p>humidity</p>
           </div>
        </div>

        <div class="wind">
        <i class="fa-solid fa-wind fa-fade"></i>
        <div class="text">
            <div class="info-wind">
                <span>${wind}km/h</span>
            </div>
            <p>wind speed</p>
        </div>


</div>
           `
           third.innerHTML=`
           <div class="text-center">
           <h2 style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;"> <i class="fa-solid fa-street-view"></i> ${name}</h2>


       </div>

       <div class="d-flex justify-content-evenly mt-4">
                        <h6>longitude:<span style="color: black;">${longitude}</span></h6>
                        <h6>latitude:<span style="color: black;">${latitude}</span></h6>
                        
                    </div>


                    <div class="text-center mt-3">
                    <h4><i class="fa-solid fa-temperature-three-quarters"></i></h4>
                    <h5>Feels like:<span style="color: black;">${tempfeel}°C</span></h5>
                    <div class="d-flex justify-content-between mt-4">
                        <h5><i class="fa-solid fa-temperature-arrow-up"></i> max temp:<span style="color: black;">${tempmax}°C</span></h5>
                        <h5><i class="fa-solid fa-temperature-arrow-down"></i> min temp:<span style="color: black;">${tempmin}°C</span></h5>
                        
                    </div>

                    

                </div>

               

            <div class=" text-center mt-4">
            <h5><i class="fa-regular fa-sun"></i> SunRise:<span style="color: rgb(243, 175, 5);">${sunrise}</span></h5>
            <h5><i class="fa-solid fa-sun"></i></i> SunSet:<span style="color: rgb(244, 151, 12);">${sunset}</span></h5>
            
        </div>

    
        
       
       `




            }
            else
            {
                
              alert('no result found please enter any other place')
              
                
            }


           
           })
        }
        else
        {
            alert('please enter any city name')
        }
       
    }