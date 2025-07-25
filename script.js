

async function getLoc(){

    // This gets the users current location
    function success(position){
        const latitude=position.coords.latitude;
        const longitude=position.coords.longitude;

        let data;

        console.log(longitude)
        console.log(latitude)

        // Used for testing to check to see if location was being pulled
        data= `<li> Lad: ${latitude} and Long: ${longitude} </li>`
        
        getWeather(longitude,latitude);
        
    }
    
    navigator.geolocation.getCurrentPosition(success);

}

async function getWeather(longitude,latitude){
    const url= `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`

            // Pulling from the weather API
            const res=  await fetch(url)
            const record=  await res.json()

            const temps = record.hourly.temperature_2m;
            const times = record.hourly.time;

            //The current time 
            const now= new Date();
            const hours= now.getHours();
            const timeString = now.toLocaleTimeString();

            console.log(`Current time ${hours}`)
            let intHours = parseInt(hours);

            //Test Code for API call
            console.log(temps[intHours]*(9/5)+32)
            console.log(times[intHours])


            // Showing it on the web page and how it works 

            let display="";


            document.getElementById("time").innerHTML= `Current time: ${timeString}`;
            document.getElementById("temp").innerHTML= `Current temp: ${Math.round(temps[intHours ]*(9/5)+32)}`
            

            // Changes the color of the page based on the current temp at user location
            // Also display a message 
            const currentTemp = temps[intHours ]*(9/5)+32;

            if (currentTemp >= 90) {
                changeBackground("red");
                document.getElementById("currenttemps").innerHTML="Its way too hot";
            } else if (currentTemp >=80 ) {
                changeBackground("orange");
                document.getElementById("currenttemps").innerHTML="Its not too hot";
            } else {
                changeBackground("skyblue");
                document.getElementById("currenttemps").innerHTML="Its getting chilly";
            }

    }
    




// Make function that changes the color of the bakcgorund based on how hot it is 

function changeBackground(color){
    document.body.style.background = color;

}



// Starts the extension
window.addEventListener("load", getLoc);
