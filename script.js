async function getData() {
    
    const url= "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"

    const res= await fetch(url)
    const record= await res.json()

    let temps = record.hourly.temperature_2m;
    let times = record.hourly.time;

    console.log(temps[0]*(9/5)+32)
    console.log(times[0])


    // Showing it on the web page and how it works 

    let display="";


    for (let i=0; i<3; i++){

        display+= `<li>`+ ` ${times[i]} will be ${temps[i]}` + `</li>`
    }

    document.getElementById("weather").innerHTML= display;
}

getData();

async function getLocandWeather(){

    function success(position){
        const latitude=position.coords.latitude;
        const longitude=position.coords.longitude;

        let data;

        console.log(longitude)
        console.log(latitude)

        data= `<li> Lad: ${latitude} and Long: ${longitude} </li>`
        document.getElementById("ellongandellad").innerHTML=data;
        
        

    }
    
    navigator.geolocation.getCurrentPosition(success);

    


}

getLocandWeather();