var React=require('react');
//var ReactDOM=require('react-dom');
var WeatherMessage=require('WeatherMessage');
var WeatherForm=require('WeatherForm');
var Api=require('Api');
var WeatherMain=React.createClass({
    getInitialState:function(){
        return{
            isLoading:false         //firstly its not loading so the variable is set to false
        }
    },
    handleSearch:function(location){
        var that=this;                   //if we use function inside a function this is not accesible so we r giving this value in that
        this.setState ({isLoading:true})                //this.setstate coz we are accessing it within a main function called handlesearch
        Api.getTemp(location).then(function(temp){      //then implies everything is fine i.e., if the location is not entered then it wont show any error but tends to jump to another function inside it
            console.log("1")
            that.setState({
                location:location,
                temp:temp,
                isLoading:false
            })
        },
        function(errorMessage){
            that.setState({isLoading:false});
        alert(errorMessage);
        });
    },
    render:function(){
        var{isLoading,temp,location}=this.state;          //feature of ES6 to enable many no.s of variables to render its state at once
       function renderData(){
           if(isLoading){
               return <h3>Loading Data...</h3>          //the msg must be written within a line with return keyword
           }
           else if(temp && location){
              
               return <WeatherMessage temp={temp} location={location}/>        //the msg must be written in the same line with return keyword
           }
       }
       return(
<div>
    <h3>Weather Application </h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderData()}
    </div>
        )
    }

});

module.exports=WeatherMain