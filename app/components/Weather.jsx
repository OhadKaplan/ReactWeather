var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState:function(){
        return{
            isLoading:false
        }
    },
    handleSearch:function(location){
        var that=this;

        this.setState({isLoading:true});

        openWeatherMap.getTemp(location).then(
            function(temp){
                that.setState({
                    isLoading:false,
                    location:location,
                    temp:temp
                });                
            },
            function(errorMessage){
                that.setState({
                    isLoading:false
                    // location:undefined,
                    // temp:undefined
                })
                alert(errorMessage);
            }
        );
        // // this.setState({
        // //     location:location,
        // //     temp:16
        // // });
    },
    render:function(){
        var {isLoading, location, temp} =this.state;
        // var location=this.state.location;
        // var tempIn=this.state.temp;
        
        function renderMessage(){
            if(isLoading){
                return <h3>Faching Weather...</h3>;
            }else if(temp && location){
                return <WeatherMessage location={location} temp={temp}/>
            };
        };
        

        return(
            <div>
                <h1>Get Weather:</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}    
            </div>  
        
        );
    }
});



module.exports = Weather;