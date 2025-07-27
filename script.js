

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
        day7forecast(latitude, longitude);
        
    }
    
    navigator.geolocation.getCurrentPosition(success);

}

// Thsi gets the weather currently 

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
            document.getElementById("temp").innerHTML= `Current temp: ${Math.round(temps[intHours ]*(9/5)+32)}°F`
            

            // Changes the color of the page based on the current temp at user location
            // Also display a message 
            const currentTemp = temps[intHours ]*(9/5)+32;

            if (currentTemp >= 90) {
                changeBackground("red");
                document.getElementById("currenttemps").innerHTML=" Extreme Heat Warning Today ";
            } else if (currentTemp >=80 ) {
                changeBackground("orange");
                document.getElementById("currenttemps").innerHTML="Its not too hot, go enjoy the sun! 😎";
            } else {
                changeBackground("skyblue");
                document.getElementById("currenttemps").innerHTML="Its getting chilly";
            }

    }

// This to display a forcast for the next 7 days 
async function day7forecast(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;

    try {
        const res = await fetch(url);
        const record = await res.json();

        const tempsMax = record.daily.temperature_2m_max;
        const tempsMin = record.daily.temperature_2m_min;
        const dates = record.daily.time;

        let output = "<ul class='forcastwork' >";
        

        output+=" <div > 7 Day Forcast </div>";


        for (let i = 1; i < dates.length; i++) {
            if ((tempsMax[i]*(9/5)+32)>90 ){
                output += `<li id="forcast-item" >${dates[i]}: High ${Math.round(tempsMax[i]*(9/5)+32)}°F / Low ${Math.round(tempsMin[i]*(9/5)+32)}°F 🔥🧯</li> `;

            }else if((tempsMax[i]*(9/5)+32)<80 ){
                output += `<li id="forcast-item" >${dates[i]}: High ${Math.round(tempsMax[i]*(9/5)+32)}°F / Low ${Math.round(tempsMin[i]*(9/5)+32)}°F 😎</li> `;

            }else{
                output += `<li id="forcast-item" >${dates[i]}: High ${Math.round(tempsMax[i]*(9/5)+32)}°F / Low ${Math.round(tempsMin[i]*(9/5)+32)}°F ☃️</li> `;

            }
        }


        output += "</ul>";

        document.getElementById("7dayforcast").innerHTML = output;

        const safetyTips = `
                <div >
                    <strong>🥵 Heat Safety Tips:</strong>
                    <ul style="margin-top: 5px; padding-left: 20px;">
                        <li>Stay hydrated — drink water every hour</li>
                        <li>Avoid going outside between 11AM and 4PM</li>
                        <li>Wear light-colored, loose-fitting clothes</li>
                        <li>Check on elderly or at-risk neighbors</li>
                        <li>Never leave pets or kids in the car</li>
                    </ul>
                </div>
            `;

        document.getElementById("saftyguide").innerHTML= safetyTips;
        
    } catch (error) {
        console.error("Error fetching 7-day forecast:", error);
    }
}



    
// Make function that changes the color of the bakcgorund based on how hot it is 

function changeBackground(color){
    document.body.style.background = color;

}



// Starts the extension
window.addEventListener("load", getLoc);
