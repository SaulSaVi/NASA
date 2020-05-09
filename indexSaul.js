const axios = require('axios');

const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=1991-02-04&end_date=1991-02-04&api_key=bZb2rIff81jl7vTUJ1JNuTHqNXabDHTp6qmZqWT2'

const asteroide = axios.get(url)

asteroide.then ((response) => {

    const meteor = response.data

    console.log("\n== Asteroides que pudieron matarnos el día que nací (pero no lo hicieron) [04/Feb/91] ==\n");

    for (const info of meteor.near_earth_objects['1991-02-04']){
        
        let promedioDiam = (info.estimated_diameter.kilometers.estimated_diameter_min+info.estimated_diameter.kilometers.estimated_diameter_max)/2;
        let ChicxulubDiam = 11;

        console.log("Asteroide: "+info.name);
        console.log("Diametro Estimado: "+info.estimated_diameter.kilometers.estimated_diameter_min+" km - "+info.estimated_diameter.kilometers.estimated_diameter_max+" km");
        console.log("Tamaño: "+(promedioDiam*100/ChicxulubDiam).toFixed(2)+"% del meteorito de Chicxulub");
        if (info.is_potentially_hazardous_asteroid === true){
            console.log("Potencialmente peligroso: si\n");
        }else{
            console.log("Potencialmente peligroso: no\n");
        }
    }
}).catch ((error) => {
    console.log(error.response.data);
})

