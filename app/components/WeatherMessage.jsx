var React = require('react');

var WeatherMessage = ({location, temp}) =>{
    // var {location, temp}= props;
        return(
            <div>
                <p>The Weather in {location} is: {temp}</p>
            </div>
        );
    }


module.exports = WeatherMessage;