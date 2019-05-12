var axios = require('axios');

const OPERN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?APPID=674357c923aa757d8fc05f4a1443a715&units=metric';

module.exports={
    
    getTemp:function(location){
        var encodedLocation = encodeURIComponent(location);
        var requetUrl=`${OPERN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requetUrl).then(
            function(res){
                if(res.data.cod && res.data.message){
                    throw new Error(res.data.message);
                    console.log('1');
                }else{
                    return res.data.main.temp;
                }
            },
            function(res){
                console.log('2');
                throw new Error(res.data.message);
            }
        );
    }
}