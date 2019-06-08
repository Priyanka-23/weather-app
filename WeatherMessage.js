var React=require('react');
var WeatherMessage=React.createClass({
    render:function(){
        var {temp,location}=this.props;
        
        return(
            <div>
                <h3>
                    My city is {location} and temperature is {temp}
                    </h3>
              </div>
        )
    }
}); 
module.exports=WeatherMessage