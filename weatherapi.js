

var axios=require('axios');       //supports promise api's and make http requests
const  WEATHER_URL='http://api.openweathermap.org/data/2.5/weather?appid=824ae49e4dbabe4d1faf904ef665a7b8&units=Metric';// you want to keep your changes unchanged
module.exports={
    getTemp:function(location){
        var el=encodeURIComponent(location);    //encodes the unwanted spaces or characters so as to have no changes in the url
        var url=`${WEATHER_URL}&q=${el}`;

        return axios.get(url).then(function(res){
            if(res.data.cod && res.data.message){       //cod is the no. of error which is found eg. 404,400,502
                throw new Error(res.data.message);

             }
            else{
                 return res.data.main.temp       //it sends many properties like humidity or sunrise but main.temp is here to access only the temperature of the given city 
             }
         }, 
        function(res){
            throw new Error(res.data.message)
        })
    
    }
}                                    