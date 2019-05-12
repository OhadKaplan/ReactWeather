var React=require('react');

var WeatherForm = React.createClass({
    onFormSubmit:function(e){
        e.preventDefault();
        
        var locationInFun = this.refs.location.value;

        if(locationInFun.length>0){
            this.refs.location.value='';
            this.props.onSearch(locationInFun);
        }
    },
    render:function(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location"/>
                    <button>Get Weather</button>
                </form>
            </div>
        );       
    }
});

module.exports= WeatherForm;